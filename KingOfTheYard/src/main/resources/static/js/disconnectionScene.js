class disconnectionScene extends Phaser.Scene {

    constructor() {
        super({key:'disconnectionScene'});
    }    
    
    create() {

        menuBgMusic.setVolume(musicMult);
        /*
        this.anims.create({
            key: 'disconnectionBgAnim',
            frameRate: 2.5,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('disconnectionBg', {start: 0, end: 2}),
        });

        this.bg = this.add.sprite(600, 337.5, 'disconnectionBg');
        this.bg.anims.play('disconnectionBgAnim');
        this.bg.setInteractive();
        */
    }

    update(){
        
        /*
        this.bg.on("pointerdown", function(){
            this.scene.scene.stop('disconnectionScene');
            this.scene.scene.start('mainMenu');
        });
        */
    }
}