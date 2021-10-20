class selectionMenu extends Phaser.Scene{

    constructor(){
        super({ key: 'selectionMenu'});
    }

    create(){

        this.anims.create({
            key: 'selectionBgAnim',
            frameRate: 2.5,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('selectionBg', {start: 0, end: 2}),
        });

        this.bg = this.add.sprite(575, 300, 'selectionBg');
        this.bg.anims.play('selectionBgAnim');

        this.online = this.physics.add.sprite(300, 350, 'onlineButtonOff').setScale(0.7).refreshBody();

        this.offline = this.physics.add.sprite(900, 350, 'offlineButton').setScale(0.7).refreshBody();
        this.offlinePressed = this.physics.add.sprite(900, 350, 'offlineButtonPressed').setScale(0.7).refreshBody();

        this.offlinePressed.alpha = 0;

        this.offline.setInteractive();
    }

    update(){

        this.offline.on("pointerover", () => {
            this.alpha = 0;
            this.offlinePressed.alpha = 1;
        });
        this.offline.on("pointerout", () => {
            this.alpha = 1;
            this.offlinePressed.alpha = 0;
        });
        this.offline.on("pointerdown", function(){
            this.scene.scene.stop('selectionMenu');
            this.scene.scene.start('mainScene');
        });
    }
}