class connectionLostScene extends Phaser.Scene {

    constructor() {
        super({key:'connectionLostScene'});
    }   
    
    create() {

        menuBgMusic.setVolume(musicMult);
        /*
        this.anims.create({
            key: 'connectionLostBgAnim',
            frameRate: 2.5,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('connectionLostBg', {start: 0, end: 2}),
        });

        this.bg = this.add.sprite(600, 337.5, 'connectionLostBg');
        this.bg.anims.play('connectionLostBgAnim');
        this.bg.setInteractive();
        */
    }

    update(){
        
        /*
        this.bg.on("pointerdown", function(){
            this.scene.scene.stop('connectionLostScene');
            this.scene.scene.start('mainMenu');
        });
        */
    }
}