var red;
var blue;
var crown;

var boolSteal = false;
var pointTimer = null;

var redText;
var blueText;

var floorSlow;

var animDone = false;
var anim = 0;

var gameBgMusic;
var punchSound;

var tp0;
var tp1;
var tpTimer;
var tpActive = true;

class mainScene extends Phaser.Scene{

    constructor(){
        super({ key: 'mainScene'});
    }

    create(){  
            
        this.input.mouse.disableContextMenu();

		//Start variables
		boolSteal = false;
		pointTimer = null;
		animDone = false;
		tpActive = true;
		
        //Server variables
        this.serverTimeout = 2000;
        this.pinged = false;
        this.localReady = false;
        this.onlineReady = false;
        this.gameFinished = false;

        //Background
        this.anims.create({
            key: 'gameBgAnim',
            frameRate: 2.5,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('gameBg', {start: 0, end: 2}),
        });

        this.bg = this.add.sprite(600, 337.5, 'gameBg');
        this.bg.anims.play('gameBgAnim');

        //Characters

        //Red
        red = this.physics.add.sprite(600,100, 'redChar', 0).setScale(0.35).refreshBody();
        red.setCollideWorldBounds(true);
        red.name = 'red';
        red.points = 0;
        red.speedMod = 1;
        this.anims.create({
            key: 'redWalkAnim',
            frameRate: 2.5,
            repeat: 1,
            frames: this.anims.generateFrameNumbers('redCharAnim', {start: 0, end: 7}),
        });
        this.anims.create({
            key: 'redStunAnim',
            frameRate: 1.5,
            repeat: 1,
            frames: this.anims.generateFrameNumbers('redStun', {start: 0, end: 3}),
        });

        //Blue
        blue = this.physics.add.sprite(600,575, 'blueChar', 0).setScale(0.35).refreshBody();
        blue.setCollideWorldBounds(true);
        blue.name = 'blue';
        blue.points = 0;
        blue.speedMod = 1;
        this.anims.create({
            key: 'blueWalkAnim',
            frameRate: 2.5,
            repeat: 0,
            frames: this.anims.generateFrameNumbers('blueCharAnim', {start: 0, end: 7}),
        });
        this.anims.create({
            key: 'blueStunAnim',
            frameRate: 1.5,
            repeat: 0,
            frames: this.anims.generateFrameNumbers('blueStun', {start: 0, end: 3}),
        });

        //Crown
        crown = this.physics.add.sprite(600,337.5, 'crown', 0).setScale(0.5).refreshBody();
        crown.attached = 'null';

        //Scene objects
        this.anims.create({
            key: 'stringsAnim',
            frameRate: 1.5,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('strings', {start: 0, end: 3}),
        });
        this.strings = this.add.sprite(220,240, 'strings', 0).setScale(0.8);
        this.strings.anims.play('stringsAnim');

        this.anims.create({
            key: 'seatsAnim',
            frameRate: 1.5,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('seats', {start: 0, end: 3}),
        });

        this.seats = this.add.sprite(220,240, 'seats', 0).setScale(0.8);
        this.seats.anims.play('seatsAnim');

        this.swingBar = this.physics.add.sprite(220,225, 'swingBar', 0).setScale(0.8).refreshBody();
        this.swingBar.body.setImmovable();

        this.anims.create({
            key: 'wheelAnim',
            frameRate: 2.5,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('wheel', {start: 0, end: 2}),
        });
        this.wheel = this.physics.add.sprite(235,510, 'wheel', 0).setScale(0.65).refreshBody();
        this.wheel.anims.play('wheelAnim');
        this.wheel.body.setCircle(140);
        this.wheel.body.setOffset(60,30);
        this.wheel.body.setImmovable();

        this.swing1Top = this.physics.add.sprite(175, 140, 'wall', 0).setScale(0.8).refreshBody();
        this.swing1Top.setVisible(false);
        this.swing1Top.body.setImmovable();
        this.swing1Bot = this.physics.add.sprite(175, 320, 'wall', 0).setScale(0.8).refreshBody();
        this.swing1Bot.setVisible(false);
        this.swing1Bot.body.setImmovable();
        this.swing1Mid = this.physics.add.sprite(175, 240, 'wall', 0).setScale(0.8).refreshBody();
        this.swing1Mid.setVisible(false);
        this.swing1Mid.body.setImmovable();
        this.swing2Top = this.physics.add.sprite(270, 140, 'wall', 0).setScale(0.8).refreshBody();
        this.swing2Top.setVisible(false);
        this.swing2Top.body.setImmovable();
        this.swing2Bot = this.physics.add.sprite(270, 320, 'wall', 0).setScale(0.8).refreshBody();
        this.swing2Bot.setVisible(false);
        this.swing2Bot.body.setImmovable();
        this.swing2Mid = this.physics.add.sprite(270, 240, 'wall', 0).setScale(0.8).refreshBody();
        this.swing2Mid.setVisible(false);
        this.swing2Mid.body.setImmovable();

        //Trees
        this.anims.create({
            key: 'treeAnim',
            frameRate: 2.5,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('tree', {start: 0, end: 2}),
        });
        this.tree1 = this.add.sprite(515,500, 'tree', 0).setScale(0.75);
        this.tree1.anims.play('treeAnim');
        this.tree1.depth = 30;
        this.tree2 = this.add.sprite(440,160, 'tree', 0).setScale(0.75);
        this.tree2.anims.play('treeAnim');
        this.tree2.rotation = -0.4;
        this.tree2.depth = 30;
        this.tree3 = this.add.sprite(945,150, 'tree', 0).setScale(0.75);
        this.tree3.anims.play('treeAnim');
        this.tree3.rotation = 0.4;
        this.tree3.depth = 30;

        //Scene walls
        this.walls = this.physics.add.staticGroup();
        this.walls.create(937, 435, 'wall').setScale(3.3,0.3).refreshBody();
        this.walls.create(937, 595, 'wall').setScale(3.3,0.3).refreshBody();
        this.walls.create(795, 580, 'wall').setScale(0.15,1).refreshBody();
        this.walls.create(1077, 575, 'wall').setScale(0.15,1).refreshBody();
        this.walls.create(795, 460, 'wall').setScale(0.15,1).refreshBody();
        this.walls.create(1080, 460, 'wall').setScale(0.15,1).refreshBody();
        this.walls.create(110, 230, 'wall').setScale(0.15,2).refreshBody();
        this.walls.create(335, 230, 'wall').setScale(0.15,1.8).refreshBody();

        var child = this.walls.getChildren();
        for (var i = 0; i < child.length; i++)
        {
            child[i].setVisible(false);
        }

        //Slowing places
        floorSlow = this.physics.add.group();
        floorSlow.create(935, 510, 'wall').setScale(3.3, 3.2).refreshBody();    
        floorSlow.create(975, 260, 'wall').setScale(0.7, 1.5).refreshBody();    
        floorSlow.create(792, 80, 'wall').setScale(0.6, 1.2).refreshBody();            
        floorSlow.create(500, 305, 'wall').setScale(0.8, 1.2).refreshBody();    
        floorSlow.create(450, 595, 'wall').setScale(0.9, 1.4).refreshBody();    
        floorSlow.create(55, 405, 'wall').setScale(0.65, 1.15).refreshBody();    

        var child = floorSlow.getChildren();
        for (var i = 0; i < child.length; i++)
        {
            child[i].setVisible(false);
        }

        //Tps
        tp1 = this.physics.add.sprite(85, 55, 'wall', 0).setScale(0.6,1.1);
        tp1.num = 1;
        tp1.setVisible(false);
        tp1.body.setImmovable();
        tp0 = this.physics.add.sprite(1135, 635, 'wall', 0).setScale(0.6,1.1);
        tp0.num = 0;
        tp0.setVisible(false);
        tp0.setImmovable();

        //Point texts
        redText = this.add.text(300, 16, 'Red Score: 0', { fontSize: '32px', fill: '#FF0000' });
        blueText = this.add.text(625, 16, 'Blue Score: 0', { fontSize: '32px', fill: '#060057' });
    
        //Character controlls
        if(!online || jugador == 0){
            this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
            this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
            this.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
            this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        }
        if(!online || jugador == 1){
            this.keyI = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.I);
            this.keyJ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.J);
            this.keyK = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.K);
            this.keyL = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.L);
        }

        if(online){
            this.messageInterval = window.setInterval(this.posMessages.bind(this), 100);
            stompClient.subscribe('/topic/gameId/' + server, this.onMessageReceived.bind(this), {id:nick});
            this.chechServerInterval = window.setInterval(this.tryServer.bind(this), this.serverTimeout);
        }

        //Colliders
        this.physics.add.collider(red, blue, this.stealCrown, null, this);
        if(!online || jugador === 0){
            this.physics.add.overlap(red, crown, this.getCrown, null, this);

            this.physics.add.collider(red, this.walls);
            this.physics.add.overlap(red, floorSlow, this.reduceSpeed, null, this);
            
            this.physics.add.collider(red, this.wheel, this.stun, null, this);
            this.physics.add.collider(red, this.swing1Top, this.stun, null, this);
            this.physics.add.collider(red, this.swing1Mid, this.stun, null, this);
            this.physics.add.collider(red, this.swing1Bot, this.stun, null, this);
            this.physics.add.collider(red, this.swing2Top, this.stun, null, this);
            this.physics.add.collider(red, this.swing2Mid, this.stun, null, this);
            this.physics.add.collider(red, this.swing2Bot, this.stun, null, this);

            this.physics.add.collider(red, tp0, this.tp, null, this);
            this.physics.add.collider(red, tp1, this.tp, null, this);
        }
        
        if(!online || jugador === 1){
            this.physics.add.overlap(blue, crown, this.getCrown, null, this);

            this.physics.add.collider(blue, this.walls);

            this.physics.add.overlap(blue, floorSlow, this.reduceSpeed, null, this);
                        
            this.physics.add.collider(blue, this.wheel, this.stun, null, this);
            
            this.physics.add.collider(blue, this.swing1Mid, this.stun, null, this);
            this.physics.add.collider(blue, this.swing1Top, this.stun, null, this);
            this.physics.add.collider(blue, this.swing1Bot, this.stun, null, this);
            this.physics.add.collider(blue, this.swing2Top, this.stun, null, this);
            this.physics.add.collider(blue, this.swing2Mid, this.stun, null, this);
            this.physics.add.collider(blue, this.swing2Bot, this.stun, null, this);

            this.physics.add.collider(blue, tp0, this.tp, null, this);
            this.physics.add.collider(blue, tp1, this.tp, null, this);
        }

        //Music        
        gameBgMusic.setVolume(musicMult);
        punchSound = this.sound.add('punch');
        punchSound.setVolume(musicMult);

        if(online){
            this.sendSync();
			if(jugador === 0)
				this.cartelito = this.physics.add.sprite(600, 337.5, 'wheel', 0).setScale(0.65).refreshBody();
			else
				this.cartelito = this.physics.add.sprite(600, 337.5, 'wheel', 0).setScale(0.65).refreshBody();
            this.time.addEvent({ delay: 1000, callback: () => this.cartelito.setVisible(false), callbackScope: this});
		}
    }

    update(){        

        if(!this.gameFinished){

            //Control velocity
            if(red.slowed){
                if(red.body.touching.none){
                    this.increaseSpeed(red);
                }
            }
            if(blue.slowed){
                if(blue.body.touching.none){
                    this.increaseSpeed(blue);
                }
            }
            
            //Update swing
            if(!animDone){
                switch(anim){
                    case 0:
                        this.swing1Top.body.enable = false;
                        this.swing1Bot.body.enable = true;
                        this.swing1Mid.body.enable = false;
                        this.swing2Top.body.enable = true;
                        this.swing2Bot.body.enable = false;
                        this.swing2Mid.body.enable = false;
                        animDone = true;
                        this.time.addEvent({ delay: 650, callback: function() { anim++; animDone = false}, callbackScope: this});
                    break;

                    case 1:
                        this.swing1Top.body.enable = false;
                        this.swing1Bot.body.enable = false;
                        this.swing1Mid.body.enable = true;
                        this.swing2Top.body.enable = false;
                        this.swing2Bot.body.enable = false;
                        this.swing2Mid.body.enable = true;
                        animDone = true;
                        this.time.addEvent({ delay: 650, callback: function() { anim++; animDone = false}, callbackScope: this});
                    break;

                    case 2:
                        this.swing1Top.body.enable = true;
                        this.swing1Bot.body.enable = false;
                        this.swing1Mid.body.enable = false;
                        this.swing2Top.body.enable = false;
                        this.swing2Bot.body.enable = true;
                        this.swing2Mid.body.enable = false;
                        animDone = true;
                        this.time.addEvent({ delay: 650, callback: function() { anim++; animDone = false}, callbackScope: this});
                    break;

                    case 3:
                        this.swing1Top.body.enable = false;
                        this.swing1Bot.body.enable = false;
                        this.swing1Mid.body.enable = true;
                        this.swing2Top.body.enable = false;
                        this.swing2Bot.body.enable = false;
                        this.swing2Mid.body.enable = true;
                        animDone = true;
                        this.time.addEvent({ delay: 650, callback: function() { anim = 0; animDone = false}, callbackScope: this});
                    break;
                }
            }
            
            if(!online || jugador === 0){
                //Update red
                if (this.keyA.isDown)
                {
                    red.body.velocity.x = -160 * red.speedMod;
                }else if (this.keyD.isDown)
                {
                    red.body.velocity.x = 160 * red.speedMod;
                }else{
                    red.body.velocity.x = 0;
                }
                if (this.keyW.isDown){
                    red.body.velocity.y = -160 * red.speedMod;
                }else if (this.keyS.isDown){
                    red.body.velocity.y = 160 * red.speedMod;
                }else{
                    red.body.velocity.y = 0;
                }

                //Red animation
                if(red.body.velocity.x !== 0 || red.body.velocity.y !== 0){
                    if(!red.anims.isPlaying)
                        red.anims.play('redWalkAnim');
                }else{
                    red.anims.stop();
                }

                //Update red rotation
                if(red.body.velocity.x > 0){
                    if(red.body.velocity.y > 0){
                        red.body.rotation = 135;
                    }else if(red.body.velocity.y < 0){
                        red.body.rotation = 45;
                    }else{
                        red.body.rotation = 90;
                    }
                }else if(red.body.velocity.x < 0){
                    if(red.body.velocity.y > 0){
                        red.body.rotation = 225;
                    }else if(red.body.velocity.y < 0){
                        red.body.rotation = 305;
                    }else{
                        red.body.rotation = 270;
                    }
                }else if(red.body.velocity.y < 0){
                    red.body.rotation = 0;
                }else if(red.body.velocity.y > 0){
                    red.body.rotation = 180;
                }
            }

            if(!online || jugador === 1){
                //Update blue
                if (this.keyJ.isDown)
                {
                    blue.body.velocity.x = -160 * blue.speedMod;
                }else if (this.keyL.isDown)
                {
                    blue.body.velocity.x = 160 * blue.speedMod;
                }else{
                    blue.body.velocity.x = 0;
                }
                if (this.keyI.isDown){
                    blue.body.velocity.y = -160 * blue.speedMod;
                }else if (this.keyK.isDown){
                    blue.body.velocity.y = 160 * blue.speedMod;
                }else{
                    blue.body.velocity.y = 0;
                }

                //Blue animation
                if(blue.body.velocity.x !== 0 || blue.body.velocity.y !== 0){
                    if(!blue.anims.isPlaying)
                        blue.anims.play('blueWalkAnim');
                }else{
                    blue.anims.stop();
                }

                //Update blue rotation
                if(blue.body.velocity.x > 0){
                    if(blue.body.velocity.y > 0){
                        blue.body.rotation = 135;
                    }else if(blue.body.velocity.y < 0){
                        blue.body.rotation = 45;
                    }else{
                        blue.body.rotation = 90;
                    }
                }else if(blue.body.velocity.x < 0){
                    if(blue.body.velocity.y > 0){
                        blue.body.rotation = 225;
                    }else if(blue.body.velocity.y < 0){
                        blue.body.rotation = 305;
                    }else{
                        blue.body.rotation = 270;
                    }
                }else if(blue.body.velocity.y < 0){
                    blue.body.rotation = 0;
                }else if(blue.body.velocity.y > 0){
                    blue.body.rotation = 180;
                }
            }

            //Update crown
            if(crown.attached !== 'null'){
                if(crown.attached === red.name){
                    //Depends on red position
                    //SI solo va a la derecha, que se aleje mas
                    if(red.body.velocity.x > 0 && red.body.velocity.y === 0){
                        crown.x = red.x - 90;
                        crown.y = red.y;
                    }else if(red.body.velocity.x !== 0 || red.body.velocity.y !== 0){
                        if(red.speedMod !== 1){
                            crown.x = red.x - red.body.velocity.x / 1.5;
                            crown.y = red.y - red.body.velocity.y / 1.5;
                        }else{
                            crown.x = red.x - red.body.velocity.x / 2.5;
                            crown.y = red.y - red.body.velocity.y / 2.5;
                        }
                    }else{
                        crown.x = red.x;
                        crown.y = red.y - 65;
                    }
                    
                }else if(crown.attached === blue.name){
                    //Depends on blue position
                    if(blue.body.velocity.x !== 0 || blue.body.velocity.y !== 0){
                        if(blue.speedMod !== 1){
                            crown.x = blue.x - blue.body.velocity.x / 1.5;
                            crown.y = blue.y - blue.body.velocity.y / 1.5;
                        }else{
                            crown.x = blue.x - blue.body.velocity.x / 2.5;
                            crown.y = blue.y - blue.body.velocity.y / 2.5;
                        }                    
                    }else{
                        crown.x = blue.x;
                        crown.y = blue.y - 60;
                    }
                }
            }
        }
    }

    getCrown(player, crown){
        if(crown.attached === 'null'){
            boolSteal = true;
            crown.attached = player.name;
            crown.setDepth(30);
            console.log("La corona es de " + red.name);
            if(pointTimer === null){
                //Creates a timer to give points
                pointTimer = this.time.addEvent({ delay: 2000, callback: this.givePoints, callbackScope: this, loop: true});
            }
            if(online)
                this.sendCrown(1);
        }
    }

    stealCrown(){
        if(boolSteal){      
            if(crown.attached === 'red'){
                crown.attached = 'blue';
                console.log("La corona ahora es de " + crown.attached);
                punchSound.play();
                red.anims.play("redStunAnim", 60, false);
                red.speedMod = 0;
                //Creates a timer to stun
                this.stun = this.time.addEvent({ delay: 2000, callback: () => red.speedMod = 1, callbackScope: this});
            }else{
                crown.attached = 'red';
                console.log("La corona ahora es de " + crown.attached);
                punchSound.play();
                blue.anims.play("blueStunAnim", 60, false);
                blue.speedMod = 0;
                //Creates a timer to stun
                this.stun = this.time.addEvent({ delay: 2000, callback: () => blue.speedMod = 1, callbackScope: this});
            } 
            
            boolSteal = false;
            //Creates a timer to avoid instant re-stealing
            timer = this.time.addEvent({ delay: 2000, callback: () => boolSteal = true, callbackScope: this});  
        }
    }

    givePoints(){
        //If not online, update both points
        if(!online){
            if(crown.attached === 'red'){
                red.points++;
                redText.setText('Red Score: ' + red.points);
                if(red.points === 20){
                    gameBgMusic.setVolume(0);
                    if(online)
                        this.sendVictory(0);
                    this.scene.stop('mainScene');
                    this.scene.start('redWinScene');
                }
            }else if(crown.attached === 'blue'){
                blue.points++;
                blueText.setText('Blue Score: ' + blue.points);
                if(blue.points === 20){
                    if(online)
                        this.sendVictory(1);
                    gameBgMusic.setVolume(0);
                    this.scene.stop('mainScene');
                    this.scene.start('blueWinScene');
                }
            }
        //If online, just test your points
        }else if(!this.gameFinished){
            if(jugador === 0){
                if(crown.attached === 'red'){
                    red.points++;
                    redText.setText('Red Score: ' + red.points);
                    if(red.points === 20){
                        gameBgMusic.setVolume(0);
                        if(online)
                            this.sendVictory(0);
                        this.gameFinished = true;
                        this.restartGame();
                        this.scene.stop('mainScene');
                        this.scene.start('redWinScene');
                    }
                }
            }else{
                if(crown.attached === 'blue'){
                    blue.points++;
                    blueText.setText('Blue Score: ' + blue.points);
                    if(blue.points === 20){
                        if(online)
                            this.sendVictory(1);
                        this.gameFinished = true;
                        gameBgMusic.setVolume(0);
                        this.restartGame();
                        this.scene.stop('mainScene');
                        this.scene.start('blueWinScene');
                    }
                }
            }
        }
    }
    
    reduceSpeed(player){
        if(player.speedMod !== 0){
            player.slowed = true;
            player.speedMod = 0.6;
        }
    }
    
    increaseSpeed(player){
        player.slowed = false;
        player.speedMod = 1;
    }
    
    stun(player, object){
        if(crown.attached === player.name)
            crown.attached = 'null';
        if(player.speedMod !== 0){
            punchSound.play();
            player.anims.play(player.name + "StunAnim", 60, false);
        }
        player.speedMod = 0;
        //Creates a timer to stun
        this.time.addEvent({ delay: 2000, callback: () => player.speedMod = 1, callbackScope: this});
		this.time.addEvent({ delay: 2000, callback: () => player.anims.stop()})
        if(online)
            this.sendObjHitMessage();    
    }

    tp(player, tp){
        if(tpActive){
            if(tp.num === 0){
                player.x = 200;
                player.y = 50;
                //Creates a timer to reestablish tp
                tpActive = false;
                tpTimer = this.time.addEvent({ delay: 3000, callback: () => tpActive = true, callbackScope: this});
            }else{
                player.x = 1125;
                player.y = 550;
                //Creates a timer to reestablish tp
                tpActive = false;
                tpTimer = this.time.addEvent({ delay: 3000, callback: () => tpActive = true, callbackScope: this});         
            }
            if(online)
                this.sendTp();
        }
    }
    
    tryServer(){
        if(this.pinged == false){
            this.restartGame();
            this.scene.start('disconnectionScene');
        }else{
            this.pinged = false;
        }
    }

    //Send position depending on player
    posMessages(){
        if(!this.gameFinished){
            if(jugador == 0){
                this.sendPosMessage(red.x, red.y, red.body.velocity.x, red.body.velocity.y, red.body.rotation, red.points);
            }else if(jugador == 1){
                this.sendPosMessage(blue.x, blue.y, blue.body.velocity.x, blue.body.velocity.y, blue.body.rotation, blue.points);
            }
        }
    }

    //Send position
    sendPosMessage(posX, posY, speedX, speedY, rot, pnts){

        var msg = {
            positionX: posX,
            positionY: posY,
            speedX: speedX,
            speedY: speedY,
            rotation: rot,
            points: pnts
        }

        var msgToTxt = JSON.stringify(msg);

        var formedMsg = {
            name: "move",
            player: nick,
            info: msgToTxt
        };

        stompClient.send("/app/playing.send/" + server, {}, JSON.stringify(formedMsg));
    }

    //Send hit between players
    sendPlayerHitMessage(who){
        var msg = {
            name: "hitPlayer",
            player: nick,
            info: who
        };
        stompClient.send("/app/playing.send/" + server, {}, JSON.stringify(msg));
    }

    //Send hit to object
    sendObjHitMessage(){
        var msg = {
            name: "hitObj",
            player: nick
        };
        stompClient.send("/app/playing.send/" + server, {}, JSON.stringify(msg));
    }

    //Syncronize both players
    sendSync(){
        this.localReady = true;
        if(this.onlineReady){
            this.localReady = false;
            this.onlineReady = false;
            //this.startGame();
        }

        var msg = {
            name: "sync",
            player: nick,
            info: "ready"
        }
        stompClient.send("/app/playing.send/" + server, {}, JSON.stringify(msg));
    }

    //Send tp
    sendTp(){
        var msg = {
            name: "tp",
            player: nick,
        };
        stompClient.send("/app/playing.send/" + server, {}, JSON.stringify(msg));
    }

    //Send crown
    sendCrown(who){
        var msg = {
            name: "crown",
            player: nick,
            info: who
        };
        stompClient.send("/app/playing.send/" + server, {}, JSON.stringify(msg));
    }

    //Send victory
    sendVictory(winner){
        var msg = {
            name: "victory",
            player: nick,
            info: winner
        };
        stompClient.send("/app/playing.send/" + server, {}, JSON.stringify(msg));
    }
    getSync(){
        this.onlineReady = true;
        if(this.localReady){
            this.localReady = false;
            this.onlineReady = false;
        }
    }

    //Receive victory
    receivedVictory(winner){
       
        this.gameFinished = true;
        this.restartGame();

        switch(winner){
            case 0:
                this.scene.stop('mainScene');
                this.scene.start("redWinScene");
            break;

            case 1:
                this.scene.stop('mainScene');
                this.scene.start("blueWinScene");
            break;
        }
    }

    //Clear variables after ending
    restartGame(){

        if(online){
            conexionEstablished = false;
            clearInterval(this.messageInterval);
            clearInterval(this.chechServerInterval);
            stompClient.unsubscribe(nick);
            stompClient.disconnect();
        }

        stompClient = null;
        socket = null;
        jugador = -1;
        server = -1;
        online = false;
        seed = 1;    
    }

    //What to do with received message
    onMessageReceived(message){
        console.log("He recibido un mensaje");
        var msgObj = JSON.parse(message.body);

        //If its not your own msg
        if(nick != msgObj.player){
            this.pinged = true;
            
            switch(msgObj.name){
                case "move":
                    this.updateOtherPosition(msgObj.info);
                break;

                case "hitPlayer":
                    this.playersCollided();
                break;

                case "hitObj":
                    this.receivedStun();
                break;

                case "tp":
                    this.coolDownTp();
                break;

                case "crown":
                    this.updateCrown(msgObj.info);
                break;

                case "victory":
                    this.receivedVictory(msgObj.info);
                break;

                case "sync":
                    this.getSync();
                break;
                
            }
        }
    }

    //Received position update
    updateOtherPosition(msgInfo){

        if(!this.gameFinished){
            var objInfo = JSON.parse(msgInfo);

            if(jugador === 0){
                blue.x = objInfo.positionX;
                blue.y = objInfo.positionY;
                blue.body.velocity.x = objInfo.speedX;
                blue.body.velocity.y = objInfo.speedY;
                //blue.body.rotation = objInfo.rotation;
                //Update blue rotation
                if(blue.body.velocity.x > 0){
                    if(blue.body.velocity.y > 0){
                        blue.angle = 135;
                    }else if(blue.body.velocity.y < 0){
                        blue.angle = 45;
                    }else{
                        blue.angle = 90;
                    }
                }else if(blue.body.velocity.x < 0){
                    if(blue.body.velocity.y > 0){
                        blue.angle = -135;
                    }else if(blue.body.velocity.y < 0){
                        blue.angle = -45;
                    }else{
                        blue.angle = -90;
                    }
                }else if(blue.body.velocity.y < 0){
                    blue.angle = 0;
                }else if(blue.body.velocity.y > 0){
                    blue.angle = 180;
                }
                blue.points = objInfo.points;
                blueText.setText('Blue Score: ' + blue.points);
                if(objInfo.speedX !== 0 || objInfo.speedY !== 0){
                    if(!blue.anims.isPlaying)
                    blue.anims.play('blueWalkAnim');
                }
            }else{
                red.x = objInfo.positionX;
                red.y = objInfo.positionY;
                red.body.velocity.x = objInfo.speedX;
                red.body.velocity.y = objInfo.speedY;
                //red.body.rotation = objInfo.rotation;
                //Update blue rotation
                if(red.body.velocity.x > 0){
                    if(red.body.velocity.y > 0){
                        red.angle = 135;
                    }else if(red.body.velocity.y < 0){
                        red.angle = 45;
                    }else{
                        red.angle = 90;
                    }
                }else if(red.body.velocity.x < 0){
                    if(red.body.velocity.y > 0){
                        red.angle = -135;
                    }else if(red.body.velocity.y < 0){
                        red.angle = -45;
                    }else{
                        red.angle = -90;
                    }
                }else if(red.body.velocity.y < 0){
                    red.angle = 0;
                }else if(red.body.velocity.y > 0){
                    red.angle = 180;
                }
                red.points = objInfo.points;
                redText.setText('Red Score: ' + red.points);
                if(objInfo.speedX !== 0 || objInfo.speedY !== 0){
                    if(!red.anims.isPlaying)
                        red.anims.play('redWalkAnim');
                }
            }
        }
    }

    //Other collided with object
    receivedStun(){
        if(jugador === 0){
            if(crown.attached === blue.name){
                crown.attached = 'null';
                boolSteal = false;
            }
            punchSound.play();
            blue.anims.play("blueStunAnim", 60, false);
			this.time.addEvent({ delay: 2000, callback: () => blue.anims.stop()})
        }else{
            if(crown.attached === red.name){
                crown.attached = 'null';
                boolSteal = false;
            }
            punchSound.play();
            red.anims.play("redStunAnim", 60, false);
			this.time.addEvent({ delay: 2000, callback: () => red.anims.stop()})
        }
    }

    //Players collided
    playersCollided(){
    }

    //Update crown
    updateCrown(msgInfo){

        var obj = JSON.parse(msgInfo)
        if(obj.who === -1){
            crown.attached = 'null';
            boolSteal = false;
        }else{
            if(pointTimer === null){
                //Creates a timer to give points
                pointTimer = this.time.addEvent({ delay: 2000, callback: this.givePoints, callbackScope: this, loop: true});
            }
            boolSteal = true;
            if(jugador === 0){
                crown.attached = blue.name;
                
            }else if(jugador === 1){
                crown.attached = red.name;
            }
        }
    }

    //Cooldown tp
    coolDownTp(){
        tpActive = false;
        tpTimer = this.time.addEvent({ delay: 3000, callback: () => tpActive = true, callbackScope: this});
    }
}