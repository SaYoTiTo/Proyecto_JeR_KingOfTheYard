class selectionMenu extends Phaser.Scene{


	

    constructor(){
        super({ key: 'selectionMenu'});
    }

    create(){

		this.sceneStarted = false;

		thisScene = 'selectionMenu';

        this.anims.create({
            key: 'selectionBgAnim',
            frameRate: 2.5,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('selectionBg', {start: 0, end: 2}),
        });

        this.bg = this.add.sprite(600, 337.5, 'selectionBg');
        this.bg.anims.play('selectionBgAnim');

        this.select = this.physics.add.sprite(600, 175, 'selectionTxt').setScale(0.8).refreshBody();

        this.online = this.physics.add.sprite(300, 450, 'onlineButton').setScale(0.7).refreshBody();
        this.onlinePressed = this.physics.add.sprite(300, 450, 'onlineButtonPressed').setScale(0.7).refreshBody();

        this.offline = this.physics.add.sprite(900, 450, 'offlineButton').setScale(0.7).refreshBody();
        this.offlinePressed = this.physics.add.sprite(900, 450, 'offlineButtonPressed').setScale(0.7).refreshBody();

        this.offlinePressed.alpha = 0;
        this.onlinePressed.alpha = 0;

        this.online.setInteractive();
        this.offline.setInteractive();

        this.leftKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        this.rightKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        this.enterKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
        this.spaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        this.selection = 0;

		//The chat
        this.input.keyboard.on('keydown-C', chat, this);
    }

    update(){

        //Control con raton
        this.offline.on("pointerover", () => {
            this.alpha = 0;
            this.offlinePressed.alpha = 1;
        });
        this.offline.on("pointerout", () => {
            this.alpha = 1;
            this.offlinePressed.alpha = 0;
        });
        this.offline.on("pointerdown", function(){
            online = false;
            this.scene.scene.stop('selectionMenu');
            this.scene.scene.start('controlsMenu');
        });

		//Control con raton
        this.online.on("pointerover", () => {
            this.alpha = 0;
            this.onlinePressed.alpha = 1;
        });
        this.online.on("pointerout", () => {
            this.alpha = 1;
            this.onlinePressed.alpha = 0;
        });
        this.online.on("pointerdown", function(){
		if(!this.sceneStarted){
            online = true;
			  this.scene.scene.stop('selectionMenu');
            this.scene.scene.start('matchmakingScene');
			console.log("He llamado a matchmakingScene con raton");
			this.sceneStarted = true;
		}
          
        })
		
        //Control con teclado
        if(this.leftKey.isDown){
            this.offline.alpha = 1;
            this.offlinePressed.alpha = 0;
			this.online.alpha = 0;
			this.onlinePressed.alpha = 1;
			this.selection = 1;
        }else if(this.rightKey.isDown){
            this.offline.alpha = 0;
            this.offlinePressed.alpha = 1;
			this.online.alpha = 1;
			this.onlinePressed.alpha = 0;
            this.selection = 2;
        }else if(this.enterKey.isDown || this.spaceKey.isDown){
            switch(this.selection){
                case 1:
                    if(!this.sceneStarted){
                        online = true;
			  	this.scene.scene.stop('selectionMenu');
            	this.scene.scene.start('matchmakingScene');
				console.log("He llamado a matchmakingScene con teclado");
				this.sceneStarted = true;
				}
                break;
                    
                case 2:
                    online = false;
                    this.scene.stop('selectionMenu');
                    this.scene.start('controlsMenu');
                break;
            }
        }
    }
}