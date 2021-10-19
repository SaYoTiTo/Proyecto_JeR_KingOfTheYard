class selectionMenu extends Phaser.Scene{

    constructor(){
        super({ key: 'selectionMenu'});
    }

    create(){

        this.bg = this.add.video(575, 300, 'selectionBg');
        this.bg.play(true);

        this.online = this.physics.add.sprite(200, 350, 'onlineButtonOff').setScale(0.5).refreshBody();

        this.offline = this.physics.add.sprite(800, 350, 'offlineButton').setScale(0.5).refreshBody();
        this.offlinePressed = this.physics.add.sprite(800, 350, 'offlineButtonPressed').setScale(0.5).refreshBody();

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