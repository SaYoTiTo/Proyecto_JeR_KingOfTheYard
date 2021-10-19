class preloadScene extends Phaser.Scene{

    constructor(){
        super({ key: 'preloadScene'});
    }

    preload(){

        //Load Bar drawing
        this.graphics = this.add.graphics();
        this.newGraphics = this.add.graphics();
        var progressBar = new Phaser.Geom.Rectangle(100, 100, 200, 25);
        var progressBarFill = new Phaser.Geom.Rectangle(102, 102, 190, 15);

        this.graphics.fillStyle(0xffffff, 1);
        this.graphics.fillRectShape(progressBar);

        this.newGraphics.fillStyle(0x3587e2, 1);
        this.newGraphics.fillRectShape(progressBarFill);

        var loadingText = this.add.text(65,150,"Loading: ", { fontSize: '32px', fill: '#FFF' });

        //Slider
        var url;
        url = 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexsliderplugin.min.js';
        this.load.plugin('rexsliderplugin', url, true);
        
        //Menu principal
        this.load.video('menuBg', 'assets/fondoMenu.mp4', 'loadeddata', false, true);
        this.load.image('titulo', 'assets/titulo.png');
        this.load.image('playButton', 'assets/botonPlay.png');
        this.load.image('playButtonPressed', 'assets/botonPlayPulsado.png');
        this.load.image('quitButton', 'assets/botonQuit.png');
        this.load.image('quitButtonPressed', 'assets/botonQuitPulsado.png');

        //Menu seleccion
        this.load.video('selectionBg', 'assets/fondoSeleccion.mp4', 'loadeddata', false, true);
        this.load.image('offlineButton', 'assets/botonOffline.png');
        this.load.image('offlineButtonPressed', 'assets/botonOfflinePulsado.png');
        this.load.image('onlineButton', 'assets/botonOnline.png');
        this.load.image('onlineButtonPressed', 'assets/botonOnlinePulsado.png');
        this.load.image('onlineButtonOff', 'assets/botonOnlineAnulado.png');

        //Barra de carga
        this.load.on('progress', this.updateBar, {newGraphics:this.newGraphics,loadingText:loadingText});
        this.load.on('complete', this.complete, {scene: this.scene});

        //EscenaJuego
        this.load.image('gameBg', 'assets/fondoJuego.png');
        this.load.image('blueChar', 'assets/bluePersonaje.png');
        this.load.image('redChar', 'assets/redPersonaje.png');
        this.load.image('crown', 'assets/corona.png');
    }

    updateBar(percentage) {
        this.newGraphics.clear();
        this.newGraphics.fillStyle(0x3587e2, 1);
        this.newGraphics.fillRectShape(new Phaser.Geom.Rectangle(102, 102, percentage*190, 20));
            
        percentage = percentage * 100;
        this.loadingText.setText("Loading: " + percentage.toFixed(2) + "%");
        console.log("P:" + percentage); 
    }

    complete() {
	    console.log("COMPLETE!");
        game.scene.stop('preloadScene');
        game.scene.start('mainMenu');        
    }
}