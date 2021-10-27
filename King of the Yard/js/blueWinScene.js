class blueWinScene extends Phaser.Scene{

    constructor(){
        super({ key: 'blueWinScene'});
    }

    create(){
        
        this.anims.create({
            key: 'controlsBgAnim',
            frameRate: 3,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('controlsBg', {start: 0, end: 2}),
        });

        this.bg = this.add.sprite(600, 337.5, 'controlsBg');
        this.bg.anims.play('controlsBgAnim');

        this.bg.setInteractive();

        this.enterKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
        this.spaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
<<<<<<< Updated upstream
=======

        victoryBgMusic.setVolume(1);
>>>>>>> Stashed changes
    }

    update(){

        if(this.enterKey.isDown || this.spaceKey.isDown){
<<<<<<< Updated upstream
=======
            victoryBgMusic.setVolume(0);
>>>>>>> Stashed changes
            this.scene.stop('blueWinScene');
            this.scene.start('mainMenu');
        }
        this.bg.on("pointerdown", function(){
<<<<<<< Updated upstream
=======
            victoryBgMusic.setVolume(0);
>>>>>>> Stashed changes
            this.scene.scene.stop('blueWinScene');
            this.scene.scene.start('mainMenu');
        });
    }
}
