class mainScene extends Phaser.Scene{

    constructor(){
        super({ key: 'mainScene'});
    }

    create(){
        
        /*this.keys = this.input.keyboard.addKeys(
            {up:Phaser.Input.Keyboard.KeyCodes.W,
             down:Phaser.Input.Keyboard.KeyCodes.S,
             left:Phaser.Input.Keyboard.KeyCodes.A,
             right:Phaser.Input.Keyboard.KeyCodes.D,
             up2:Phaser.Input.Keyboard.KeyCodes.I,
             down2:Phaser.Input.Keyboard.KeyCodes.K,
             left2:Phaser.Input.Keyboard.KeyCodes.J,
             right2:Phaser.Input.Keyboard.KeyCodes.L,
             space2:Phaser.Input.Keyboard.KeyCodes.P}
        );*/           
            
        this.input.mouse.disableContextMenu();

        this.add.sprite(210, 160, 'menuBg', 0);

        this.player = this.add.rectangle(210, 160, 30, 30, 0x6666ff);

        this.physics.add.existing(this.player);

        this.cursors = this.input.keyboard.createCursorKeys();

    }

    update(){
        if (this.cursors.left.isDown)
        {
            this.player.body.velocity.x = -160;
            this.player.body.velocity.y = 0;
        }
        else if (this.cursors.right.isDown)
        {
            this.player.body.velocity.x = 160;
            this.player.body.velocity.y = -0;
        }
        else if (this.cursors.up.isDown){
            this.player.body.velocity.x = 0;
            this.player.body.velocity.y = -160;
        }
        else if (this.cursors.down.isDown){
            this.player.body.velocity.x = 0;
            this.player.body.velocity.y = 160;
        }else{
            this.player.body.velocity.x = 0;
            this.player.body.velocity.y = 0;
        }
    }
}