var gameBgMusic;
var menuBgMusic;
var victoryBgMusic;

var musicMult = 1;
var moveActive = true;

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

        this.titulo = this.physics.add.sprite(600, 150, 'title').setScale(0.65).refreshBody();
        
        this.play = this.physics.add.sprite(575, 400, 'playButton').setScale(0.8).refreshBody();
        this.playPressed = this.physics.add.sprite(575, 400, 'playButtonPressed').setScale(0.8).refreshBody();
        this.quit = this.physics.add.sprite(575, 625, 'quitButton').setScale(0.8).refreshBody();
        this.quitPressed = this.physics.add.sprite(575, 625, 'quitButtonPressed').setScale(0.8).refreshBody();
        this.settings = this.physics.add.sprite(575, 525, 'settingsButton').setScale(0.8).refreshBody();
        this.settingsPressed = this.physics.add.sprite(575, 525, 'settingsButtonPressed').setScale(0.8).refreshBody();

        this.quitPressed.alpha = 0;
        this.playPressed.alpha = 0;
        this.settingsPressed.alpha = 0;

        this.play.setInteractive();
        this.quit.setInteractive();
        this.settings.setInteractive();

        this.upKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        this.downKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        this.enterKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
        this.spaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        this.selection = 0;

        if(gameBgMusic === undefined){
            gameBgMusic = this.sound.add('gameMusic');
            gameBgMusic.loop = true;
            gameBgMusic.play();
            gameBgMusic.setVolume(0);

            menuBgMusic = this.sound.add('menuMusic');
            menuBgMusic.loop = true;
            menuBgMusic.play();

            victoryBgMusic = this.sound.add('victoryMusic');
            victoryBgMusic.loop = true;
            victoryBgMusic.play();
            victoryBgMusic.setVolume(0);
        }
        
        menuBgMusic.setVolume(musicMult);

		//The chat
		//this.input.keyboard.on()

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

        this.settings.on("pointerover", () => {
            this.alpha = 0;
            this.settingsPressed.alpha = 1;
        });
        this.settings.on("pointerout", () => {
            this.alpha = 1;
            this.settingsPressed.alpha = 0;
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
        this.settings.on("pointerdown", function(){
            this.scene.scene.stop('mainMenu');
            this.scene.scene.start('configScene');
        });
        this.quit.on("pointerdown", function(){
            window.close();
        });

        //Control con teclado
        if(this.upKey.isDown){
            if(moveActive){
                switch(this.selection){
                    case 0:
                        this.play.alpha = 1;
                        this.playPressed.alpha = 0;
                        this.settings.alpha = 1;
                        this.settingsPressed.alpha = 0;
                        this.quit.alpha = 0;
                        this.quitPressed.alpha = 1;
                        this.selection = 2;
                        //Creates a timer to reestablish movement
                        moveActive = false;
                        this.time.addEvent({ delay: 500, callback: () => moveActive = true, callbackScope: this});   
                    break;

                    case 1:
                        this.play.alpha = 0;
                        this.playPressed.alpha = 1;
                        this.settings.alpha = 1;
                        this.settingsPressed.alpha = 0;
                        this.quit.alpha = 1;
                        this.quitPressed.alpha = 0;
                        this.selection = 0;
                        //Creates a timer to reestablish movement
                        moveActive = false;
                        this.time.addEvent({ delay: 500, callback: () => moveActive = true, callbackScope: this});
                    break;

                    case 2:
                        this.play.alpha = 1;
                        this.playPressed.alpha = 0;
                        this.settings.alpha = 0;
                        this.settingsPressed.alpha = 1;
                        this.quit.alpha = 1;
                        this.quitPressed.alpha = 0;
                        this.selection = 1;
                        //Creates a timer to reestablish movement
                        moveActive = false;
                        this.time.addEvent({ delay: 500, callback: () => moveActive = true, callbackScope: this});
                    break;
                }      
            }      
        }else if(this.downKey.isDown){
            if(moveActive){
                switch(this.selection){
                    case 0:
                        this.play.alpha = 1;
                        this.playPressed.alpha = 0;
                        this.settings.alpha = 0;
                        this.settingsPressed.alpha = 1;
                        this.quit.alpha = 1;
                        this.quitPressed.alpha = 0;
                        this.selection = 1;
                        //Creates a timer to reestablish movement
                        moveActive = false;
                        this.time.addEvent({ delay: 500, callback: () => moveActive = true, callbackScope: this});
                    break;

                    case 1:
                        this.play.alpha = 1;
                        this.playPressed.alpha = 0;
                        this.settings.alpha = 1;
                        this.settingsPressed.alpha = 0;
                        this.quit.alpha = 0;
                        this.quitPressed.alpha = 1;
                        this.selection = 2;
                        //Creates a timer to reestablish movement
                        moveActive = false;
                        this.time.addEvent({ delay: 500, callback: () => moveActive = true, callbackScope: this});
                    break;

                    case 2:
                        this.play.alpha = 0;
                        this.playPressed.alpha = 1;
                        this.settings.alpha = 1;
                        this.settingsPressed.alpha = 0;
                        this.quit.alpha = 1;
                        this.quitPressed.alpha = 0;
                        this.selection = 0;
                        //Creates a timer to reestablish movement
                        moveActive = false;
                        this.time.addEvent({ delay: 500, callback: () => moveActive = true, callbackScope: this});
                    break;
                }  
            }
        }else if(this.enterKey.isDown || this.spaceKey.isDown){
            switch(this.selection){
                case 0:
                    this.scene.stop('mainMenu');
                    this.scene.start('selectionMenu');
                break;
                    
                case 1:
                    this.scene.stop('mainMenu');
                    this.scene.start('configScene');
                break;

                case 2:
                    window.close();
                break;
            }
        }
    }
}