class mainMenu extends Phaser.Scene{

    constructor(){
        super({ key: 'mainMenu'});
    }

    create(){

        this.anims.create({
            key: 'menuBgAnim',
            frameRate: 2.5,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('menuBg', {start: 0, end: 2}),
        });

        this.bg = this.add.sprite(575, 300, 'menuBg');
        this.bg.anims.play('menuBgAnim');

        this.play = this.physics.add.sprite(575, 350, 'playButton');
        this.playPressed = this.physics.add.sprite(575, 350, 'playButtonPressed');

        this.quit = this.physics.add.sprite(575, 500, 'quitButton');
        this.quitPressed = this.physics.add.sprite(575, 500, 'quitButtonPressed');

        this.quitPressed.alpha = 0;
        this.playPressed.alpha = 0;

        this.play.setInteractive();
        this.quit.setInteractive();
    }

    update(){
        
        this.play.on("pointerover", () => {
            this.alpha = 0;
            this.playPressed.alpha = 1;
        });
        this.play.on("pointerout", () => {
            this.alpha = 1;
            this.playPressed.alpha = 0;
        });

        this.quit.on("pointerover", () => {
            this.alpha = 0;
            this.quitPressed.alpha = 1;
        });
        this.quit.on("pointerout", () => {
            this.alpha = 1;
            this.quitPressed.alpha = 0;
        });

        this.play.on("pointerdown", function(){
            this.scene.scene.stop('mainMenu');
            this.scene.scene.start('selectionMenu');
        });
        this.quit.on("pointerdown", function(){
            window.close();
        });
    }
}