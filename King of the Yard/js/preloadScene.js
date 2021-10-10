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
        
        //Barra de carga
        this.load.on('progress', this.updateBar, {newGraphics:this.newGraphics,loadingText:loadingText});
        this.load.on('complete', this.complete, {scene: this.scene});

        //Fondo
        this.load.image('menuBg', 'assets/fondoPrueba.png');
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
        game.scene.start('mainScene');        
    }
}