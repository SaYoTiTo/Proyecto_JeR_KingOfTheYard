var previousScene;

class chatScene extends Phaser.Scene {
    constructor() {
        super({ key:'chatScene' });
    }

	init(data){
		previousScene = data.prev;
	}
	
    create(){
	
		this.anims.create({
            key: 'chatBgAnim',
            frameRate: 2.5,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('chatBg', {start: 0, end: 2}),
        });
        this.bg = this.add.sprite(600, 337.5, 'chatBg');
		this.bg.anims.play('chatBgAnim');

		this.anims.create({
            key: 'chatButtonAnim',
            frameRate: 2.5,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('chatButton', {start: 0, end: 2}),
        });
		this.button = this.physics.add.sprite(1025, 625, 'chatButton').setScale(0.5);
		this.button.anims.play('chatButtonAnim');
		this.button.alpha = 0.5;
		this.button.setInteractive();
		
		document.getElementById('chat').style.display = 'block';
        this.input.keyboard.on('keydown-ESC', goBack, this);
		this.input.keyboard.disableGlobalCapture();
    }

	update(){
		
		//Control con raton
        this.button.on("pointerover", () => {
            this.alpha = 1;
        });
        this.button.on("pointerout", () => {
            this.alpha = 0.5;
        });
		this.button.on("pointerdown", function(){
			this.scene.scene.stop('chatScene');
			this.scene.scene.start(previousScene);
		    document.getElementById('chat').style.display = 'none';
		})
	}
}

function goBack(){
	this.scene.stop('chatScene');
	this.scene.start(previousScene);
    document.getElementById('chat').style.display = 'none';
}
