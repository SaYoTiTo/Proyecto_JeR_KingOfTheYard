var redWinMusic;

class redWinScene extends Phaser.Scene{

    constructor(){
        super({ key: 'redWinScene'});
    }

    create(){
        
        this.anims.create({
            key: 'victoryBgAnim',
            frameRate: 3,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('victoryBg', {start: 0, end: 2}),
        });

        this.bg = this.add.sprite(600, 337.5, 'victoryBg');
        this.bg.anims.play('victoryBgAnim');

        this.redName = this.add.sprite(600, 300, 'redName');
        this.red = this.add.sprite(600, 500, 'redChar');

        this.bg.setInteractive();

        this.enterKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
        this.spaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        victoryBgMusic.setVolume(1);
    }

    update(){

        if(this.enterKey.isDown || this.spaceKey.isDown){
            victoryBgMusic.setVolume(0);
            this.scene.stop('redWinScene');
            this.scene.start('mainMenu');
        }
        this.bg.on("pointerdown", function(){
            victoryBgMusic.setVolume(0);
            this.scene.scene.stop('redWinScene');
            this.scene.scene.start('mainMenu');
        });
    }
}
