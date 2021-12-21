class disconnectionScene extends Phaser.Scene {

    constructor() {
        super({key:'disconnectionScene'});
    }    
    
    create() {

        menuBgMusic.setVolume(musicMult);
        
        this.anims.create({
            key: 'disconnectedBgAnim',
            frameRate: 2.5,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('disconnectedBg', {start: 0, end: 2}),
        });

        this.bg = this.add.sprite(600, 337.5, 'disconnectedBg');
        this.bg.anims.play('disconnectedBgAnim');
        this.bg.setInteractive();
        
    }

    update(){
        
        this.bg.on("pointerdown", function(){
            this.scene.scene.stop('disconnectionScene');
            this.scene.scene.start('mainMenu');
        });
    }
}