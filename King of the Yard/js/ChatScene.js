class ChatScene extends Phaser.Scene {
    constructor() {
        super('chatScene');
    }

    create(){
        this.play = this.physics.add.sprite(575, 400, 'quitButton').setScale(0.8).refreshBody();
        this.playPressed = this.physics.add.sprite(575, 400, 'quitButtonPressed').setScale(0.8).refreshBody();
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
        this.play.on("pointerdown", function(){
            document.getElementById('chat').style.display = 'none';
            this.scene.scene.stop('chatScene');
            this.scene.scene.start('mainMenu');
        });
    }

}