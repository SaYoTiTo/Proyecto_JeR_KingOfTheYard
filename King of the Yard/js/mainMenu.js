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

        this.bg = this.add.sprite(600, 337.5, 'menuBg');
        this.bg.anims.play('menuBgAnim');

        this.play = this.physics.add.sprite(575, 350, 'playButton');
        this.playPressed = this.physics.add.sprite(575, 350, 'playButtonPressed');

        this.quit = this.physics.add.sprite(575, 500, 'quitButton');
        this.quitPressed = this.physics.add.sprite(575, 500, 'quitButtonPressed');

        this.quitPressed.alpha = 0;
        this.playPressed.alpha = 0;

        this.play.setInteractive();
        this.quit.setInteractive();

        this.upKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        this.downKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        this.enterKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
        this.spaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        this.selection = 0;
    }

    update(){
        
        //Control con raton
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

        //Control con teclado
        if(this.upKey.isDown){
            this.play.alpha = 0;
            this.playPressed.alpha = 1;
            this.quit.alpha = 1;
            this.quitPressed.alpha = 0;
            this.selection = 1;
        }else if(this.downKey.isDown){
            this.play.alpha = 1;
            this.playPressed.alpha = 0;
            this.quit.alpha = 0;
            this.quitPressed.alpha = 1;
            this.selection = 2;
        }else if(this.enterKey.isDown || this.spaceKey.isDown){
            switch(this.selection){
                case 1:
                    this.scene.stop('mainMenu');
                    this.scene.start('selectionMenu');
                break;
                    
                case 2:
                    window.close();
                break;
            }
        }
    }
}