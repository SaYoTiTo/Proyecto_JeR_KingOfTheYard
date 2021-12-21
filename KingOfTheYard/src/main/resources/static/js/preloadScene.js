class preloadScene extends Phaser.Scene{

    constructor(){
        super({ key: 'preloadScene'});
    }

    preload(){

        //Load Bar drawing
        this.graphics = this.add.graphics();
        this.newGraphics = this.add.graphics();
        var progressBar = new Phaser.Geom.Rectangle(300, 300, 400, 55);
        var progressBarFill = new Phaser.Geom.Rectangle(302, 302, 390, 45);

        this.graphics.fillStyle(0xffffff, 1);
        this.graphics.fillRectShape(progressBar);

        this.newGraphics.fillStyle(0x3587e2, 1);
        this.newGraphics.fillRectShape(progressBarFill);

        var loadingText = this.add.text(250, 175,"Loading: ", { fontSize: '54px', fill: '#FFF' });

        
        //Menu principal
        this.load.spritesheet('menuBg', 'assets/fondoMenuSprite.png', {
            frameWidth: 1200,
            frameHeight: 675,
        });
        this.load.image('title', 'assets/titulo.png');
        this.load.image('playButton', 'assets/botonPlay.png');
        this.load.image('playButtonPressed', 'assets/botonPlayPulsado.png');
        this.load.image('quitButton', 'assets/botonQuit.png');
        this.load.image('quitButtonPressed', 'assets/botonQuitPulsado.png');
        this.load.image('settingsButton', 'assets/botonSettings.png');
        this.load.image('settingsButtonPressed', 'assets/botonSettingsPulsado.png');

        //Menu seleccion
        this.load.spritesheet('selectionBg', 'assets/fondoMenuSeleccionSprite.png', {
            frameWidth: 1200,
            frameHeight: 675,
        });
        this.load.image('offlineButton', 'assets/botonOffline.png');
        this.load.image('offlineButtonPressed', 'assets/botonOfflinePulsado.png');
        this.load.image('onlineButton', 'assets/botonOnline.png');
        this.load.image('onlineButtonPressed', 'assets/botonOnlinePulsado.png');
        this.load.image('onlineButtonOff', 'assets/botonOnlineAnulado.png');
        this.load.image('selectionTxt', 'assets/selectionText.png');
        
        //Menu configuracion
        this.load.spritesheet('configBg', 'assets/Settings/settingsSpritesheet.png', {
            frameWidth: 1200,
            frameHeight: 675,
        });
        this.load.spritesheet('soundOff', 'assets/Settings/sonidoMutedSpriteSheet.png', {
            frameWidth: 600,
            frameHeight: 500,
        });
        this.load.spritesheet('soundOn', 'assets/Settings/sonidoSpritesheet.png', {
            frameWidth: 600,
            frameHeight: 500,
        });

        //Menu controles
        this.load.spritesheet('controlsBg', 'assets/fondoTutorialSprite.png',{
            frameWidth: 1200,
            frameHeight: 675,
        });

        //Barra de carga
        this.load.on('progress', this.updateBar, {newGraphics:this.newGraphics,loadingText:loadingText});
        this.load.on('complete', this.complete, {scene: this.scene});

        //EscenaJuego
        this.load.spritesheet('gameBg', 'assets/fondoJuegoSprite.png', {
            frameWidth: 1200,
            frameHeight: 675,
        });
        this.load.image('blueChar', 'assets/bluePersonaje.png');
        this.load.spritesheet('blueCharAnim', 'assets/blueAnimacion.png', {
            frameWidth: 254.375,
            frameHeight: 160,
        });
        this.load.spritesheet('blueStun', 'assets/blueStunned.png', {
            frameWidth: 253.5,
            frameHeight: 225,
        });
        
        this.load.image('redChar', 'assets/redPersonaje.png');
        this.load.spritesheet('redCharAnim', 'assets/redAnimacion.png', {
            frameWidth: 254.375,
            frameHeight: 160,
        });
        this.load.spritesheet('redStun', 'assets/redStunned.png', {
            frameWidth: 253.5,
            frameHeight: 225,
        });

        this.load.image('crown', 'assets/corona.png');

        this.load.spritesheet('tree', 'assets/Arbol/arbolSpriteSheet.png', {
            frameWidth: 400,
            frameHeight: 350,
        });
        this.load.spritesheet('strings', 'assets/Columpio/cuerdaSpritesheet.png', {
            frameWidth: 400,
            frameHeight: 350,
        });        
        this.load.spritesheet('seats', 'assets/Columpio/asientoSpritesheet.png', {
            frameWidth: 400,
            frameHeight: 350,
        });
        this.load.spritesheet('wheel', 'assets/Rueda/ruedaSpritesheet.png', {
            frameWidth: 400,
            frameHeight: 350,
        });

        this.load.image('swingBar', 'assets/Columpio/columpioBarraXS.png');
        this.load.image('wall', 'assets/borde.png');

        //Escena victoria
        this.load.spritesheet('victoryBg', 'assets/fondo_victoria/victorySpritesheet.png',{
            frameWidth: 1200,
            frameHeight: 675,
        });
        this.load.image('redName', 'assets/redName.png');
        this.load.image('blueName', 'assets/blueName.png');

		//Escena chat
		this.load.spritesheet('chatBg', 'assets/safeZoneSpritesheet.png', {
            frameWidth: 1200,
            frameHeight: 675,
        });

		this.load.spritesheet('chatButton', 'assets/botonChat.png', {
            frameWidth: 450,
            frameHeight: 150,
        });

		//Escenas multijugador
		this.load.spritesheet('matchmakingBg', 'assets/matchmakingSpritesheet.png', {
            frameWidth: 1200,
            frameHeight: 675,
        });
        //Sonidos
        this.load.audio('gameMusic', ['assets/Music/gameMusic.wav']);
        this.load.audio('menuMusic', ['assets/Music/menuMusic.wav']);
        this.load.audio('victoryMusic', ['assets/Music/victoryMusic.wav']);
        this.load.audio('punch', ['assets/Music/punchSFX.mp3']);
        this.load.audio('victory', ['assets/Music/victorySFX.mp3']);

               
    }
    updateBar(percentage) {
        this.newGraphics.clear();
        this.newGraphics.fillStyle(0x3587e2, 1);
        this.newGraphics.fillRectShape(new Phaser.Geom.Rectangle(302, 302, percentage*390, 50));
            
        percentage = percentage * 100;
        this.loadingText.setText("Loading: " + percentage.toFixed(2) + "%");
        //console.log("P:" + percentage); 
    }

    complete() {
	    //console.log("COMPLETE!");
        game.scene.stop('preloadScene');
        game.scene.start('mainMenu');        
    }
}