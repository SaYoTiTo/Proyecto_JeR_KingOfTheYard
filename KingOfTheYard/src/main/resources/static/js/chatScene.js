var previousScene;

class chatScene extends Phaser.Scene {
    constructor() {
        super({ key:'chatScene' });
    }

	init(data){
		previousScene = data.prev;
	}
	
    create(){
		document.getElementById('chat').style.display = 'block';
        this.input.keyboard.on('keydown-ESC', goBack, this);
    }

    update(){
        
    }
}

function goBack(){
	this.scene.stop('chatScene');
	this.scene.start(previousScene);
    document.getElementById('chat').style.display = 'none';
}
