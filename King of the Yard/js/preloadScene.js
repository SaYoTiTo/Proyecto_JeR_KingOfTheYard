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

        //Slider
        var url;
        url = 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexsliderplugin.min.js';
        this.load.plugin('rexsliderplugin', url, true);
        
        //Menu principal
        this.load.spritesheet('menuBg', 'assets/fondoMenuSprite.png', {
            frameWidth: 1200,
            frameHeight: 675,
        });
        this.load.image('titulo', 'assets/titulo.png');
        this.load.image('playButton', 'assets/botonPlay.png');
        this.load.image('playButtonPressed', 'assets/botonPlayPulsado.png');
        this.load.image('quitButton', 'assets/botonQuit.png');
        this.load.image('quitButtonPressed', 'assets/botonQuitPulsado.png');

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

        //Barra de carga
        this.load.on('progress', this.updateBar, {newGraphics:this.newGraphics,loadingText:loadingText});
        this.load.on('complete', this.complete, {scene: this.scene});

        //EscenaJuego
        this.load.spritesheet('gameBg', 'assets/fondoJuegoSprite.jpg', {
            frameWidth: 1200,
            frameHeight: 675,
        });
        this.load.image('blueChar', 'assets/bluePersonaje.png');
        this.load.spritesheet('blueCharAnim', 'assets/blueAnimacion.png', {
            frameWidth: 254.375,
            frameHeight: 160,
        });
        this.load.image('redChar', 'assets/redPersonaje.png');
        this.load.spritesheet('redCharAnim', 'assets/redAnimacion.png', {
            frameWidth: 254.375,
            frameHeight: 160,
        });
        this.load.image('crown', 'assets/corona.png');
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