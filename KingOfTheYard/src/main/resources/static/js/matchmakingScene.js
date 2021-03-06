var conexionEstablished = false;
var pingPongTimer;
class matchmakingScene extends Phaser.Scene {
	
	  constructor() {
        super({key: 'matchmakingScene'});
    }

    create(){
        this.anims.create({
            key: 'matchmakingBgAnim',
            frameRate: 2.5,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('matchmakingBg', {start: 0, end: 2}),
        });

        this.bg = this.add.sprite(600, 337.5, 'matchmakingBg');
        this.bg.anims.play('matchmakingBgAnim');

        this.conexion();
		console.log("He tirado conexion");
        this.pongV = true;
    }

    update(){
        if(conexionEstablished){
            console.log("Pasando a escena de juego");
            menuBgMusic.setVolume(0);
            this.scene.start('mainScene');
        }
    }

    conexion(){
        socket = new SockJS('/ws');
        stompClient = Stomp.over(socket);
        stompClient.connect({}, this.onConnected.bind(this), this.onError.bind(this));
		console.log("Enviando peticion");        
        //JSON.stringify({sender: username, id: 1234});
       // stompClient.send("/game/search", {}, JSON.stringify({'name': "Saya"}));
       // stompClient.send("/game/search", {}, JSON.stringify({'name': "Saya"}));
    }
    

    onConnected(){
	console.log("");  
        stompClient.subscribe('/topic/searching', this.onMessage , { id: nick});
        
        var chatMessage = {
            name: "conexion",
            player: nick,
            info: nick
        };
        stompClient.subscribe('/topic/searching/' + nick,  this.ping.bind(this), {id: nick+'a'});
        pingPongTimer = window.setInterval(this.pong.bind(this), 500);
        stompClient.send("/app/search", {}, JSON.stringify(chatMessage)); 
        
    }

    onError(){
        console.log("Ha habido un error en la conexion");
        this.scene.start('connectionLostScene');
    }

    pong(){
        console.log("pong")
        if(this.pongV){
            stompClient.send('/app/ping/' + nick, {}, true);
            this.pongV = false;
        }else{
            clearInterval(pingPongTimer);
            stompClient.disconnect();
            this.scene.start('connectionLostScene');
        }
    }

    ping(message){
        console.log("ping")
        this.pongV = true;
    }


    onMessage(message){
        console.log("he llegado aqui")
        console.log("Mensaje recibido:" + message.body)
        if(message.body!="waiting"){
            var ids = message.body.split("%");
            if(ids[0]==nick){
                clearInterval(pingPongTimer);
                jugador = 0;
                server = ids[2];
                stompClient.unsubscribe( nick);
                stompClient.unsubscribe( nick+'a');
                seed = ids[3];
                console.log("Soy el jugador 0 y estoy pasando");
                //console.log("Pasando a escena de juego");
                //this.scene.start('GAME_SCENE_KEY');
                //this.titleBGM.stop();
                conexionEstablished = true;
            }
            if(ids[1]==nick){
                clearInterval(pingPongTimer);
                jugador = 1;
                server = ids[2];
                stompClient.unsubscribe( nick);
                stompClient.unsubscribe( nick+1);
                seed = ids[3];
                console.log("Soy el jugador 1 y estoy pasando");
                //console.log("Pasando a escena de juego");
                //this.scene.start('GAME_SCENE_KEY');
                //this.titleBGM.stop();
                conexionEstablished = true;
            }
        }
    }
}