class controlsMenu extends Phaser.Scene{

    constructor(){
        super({ key: 'controlsMenu'});
    }

    create(){
	
		thisScene = 'controlsMenu';
		
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
		
		//The chat
        this.input.keyboard.on('keydown-C', chat, this);
    }

    update(){

        if(this.enterKey.isDown || this.spaceKey.isDown){
            menuBgMusic.setVolume(0);
            this.scene.stop('controlsMenu');
            this.scene.start('mainScene');
        }
        this.bg.on("pointerdown", function(){
            menuBgMusic.setVolume(0);
            this.scene.scene.stop('controlsMenu');
            this.scene.scene.start('mainScene');
        });

    }
}