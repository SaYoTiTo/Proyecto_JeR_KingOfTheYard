var soundOn;
var soundOff;

class configScene extends Phaser.Scene{

    constructor(){
        super({ key: 'configScene'});
    }

    create(){

        this.anims.create({
            key: 'configBgAnim',
            frameRate: 2.5,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('configBg', {start: 0, end: 2}),
        });

        this.bg = this.add.sprite(600, 337.5, 'configBg');
        this.bg.anims.play('configBgAnim');

        this.anims.create({
            key: 'soundOnAnim',
            frameRate: 2.5,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('soundOn', {start: 0, end: 2}),
        });
        soundOn = this.add.sprite(400, 337.5, 'soundOn').setScale(0.5);
        soundOn.anims.play('soundOnAnim');

        this.anims.create({
            key: 'soundOffAnim',
            frameRate: 2.5,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('soundOff', {start: 0, end: 2}),
        });
        soundOff = this.add.sprite(800, 337.5, 'soundOff').setScale(0.5);
        soundOff.anims.play('soundOffAnim');

        this.bg.setInteractive();
        soundOn.setInteractive();
        soundOff.setInteractive();

        if(musicMult === 1)
            soundOff.alpha = 0.3;
        else
            soundOn.alpha = 0.3;

        this.enterKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
        this.spaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }

    update(){

        if(this.enterKey.isDown || this.spaceKey.isDown){
            this.scene.stop('configScene');
            this.scene.start('mainMenu');
        }
        soundOn.on("pointerdown", function(){
            soundOff.alpha = 0.3;
            this.alpha = 1;
            musicMult = 1;
            menuBgMusic.setVolume(musicMult);
        });
        soundOn.on("pointerover", () => {
            this.alpha = 0.6;
        });
        soundOn.on("pointerout", () => {
            this.alpha = 0.3;
        });

        soundOff.on("pointerdown", function(){
            this.alpha = 1;
            soundOn.alpha = 0.3;
            musicMult = 0;
            menuBgMusic.setVolume(musicMult);
        });
        soundOff.on("pointerover", () => {
            this.alpha = 0.6;
        });
        soundOff.on("pointerout", () => {
            this.alpha = 0.3;
        });

        this.bg.on("pointerdown", function(){
            this.scene.scene.stop('configScene');
            this.scene.scene.start('mainMenu');
        });

    }
}