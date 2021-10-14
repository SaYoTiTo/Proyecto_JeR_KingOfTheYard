class mainScene extends Phaser.Scene{

    constructor(){
        super({ key: 'mainScene'});
    }

    create(){  
            
        this.input.mouse.disableContextMenu();

        //Background
        this.physics.add.sprite(575, 300, 'gameBg', 0).setScale(0.6).refreshBody();

        //Characters
        this.red = this.physics.add.sprite(500,200, 'redChar', 0).setScale(0.25).refreshBody();
        this.red.setCollideWorldBounds(true);
        this.red.name = 'red';
        this.blue = this.physics.add.sprite(650,400, 'blueChar', 0).setScale(0.25).refreshBody();
        this.blue.name = 'blue';
        this.blue.setCollideWorldBounds(true);

        //Crown
        this.crown = this.physics.add.sprite(360,240, 'crown', 0).setScale(0.3).refreshBody();
        this.crown.attached = 'null';
        this.crown.setCollideWorldBounds(true);

        //Character controlls
        this.keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        
        this.keyI = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.I);
        this.keyJ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.J);
        this.keyK = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.K);
        this.keyL = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.L);

        //Colliders
        this.physics.add.collider(this.red, this.blue, stealCrown(this.crown));
        this.physics.add.collider(this.red, this.crown, getCrown(this.red, this.crown));
        this.physics.add.collider(this.blue, this.crown, getCrown(this.blue, this.crown));
    }

    update(){

        //Update red
        if (this.keyA.isDown)
        {
            this.red.body.velocity.x = -160;
        }else if (this.keyD.isDown)
        {
            this.red.body.velocity.x = 160;
        }else{
            this.red.body.velocity.x = 0;
        }
        if (this.keyW.isDown){
            this.red.body.velocity.y = -160;
        }else if (this.keyS.isDown){
            this.red.body.velocity.y = 160;
        }else{
            this.red.body.velocity.y = 0;
        }

        //Update red rotation
        if(this.red.body.velocity.x > 0){
            if(this.red.body.velocity.y > 0){
                this.red.body.rotation = 135;
            }else if(this.red.body.velocity.y < 0){
                this.red.body.rotation = 45;
            }else{
                this.red.body.rotation = 90;
            }
        }else if(this.red.body.velocity.x < 0){
            if(this.red.body.velocity.y > 0){
                this.red.body.rotation = 225;
            }else if(this.red.body.velocity.y < 0){
                this.red.body.rotation = 305;
            }else{
                this.red.body.rotation = 270;
            }
        }else if(this.red.body.velocity.y < 0){
            this.red.body.rotation = 0;
        }else{
            this.red.body.rotation = 180;
        }

        //Update blue
        if (this.keyJ.isDown)
        {
            this.blue.body.velocity.x = -160;
        }else if (this.keyL.isDown)
        {
            this.blue.body.velocity.x = 160;
        }else{
            this.blue.body.velocity.x = 0;
        }
        if (this.keyI.isDown){
            this.blue.body.velocity.y = -160;
        }else if (this.keyK.isDown){
            this.blue.body.velocity.y = 160;
        }else{
            this.blue.body.velocity.y = 0;
        }

        //Update blue rotation
        if(this.blue.body.velocity.x > 0){
            if(this.blue.body.velocity.y > 0){
                this.blue.body.rotation = 135;
            }else if(this.blue.body.velocity.y < 0){
                this.blue.body.rotation = 45;
            }else{
                this.blue.body.rotation = 90;
            }
        }else if(this.blue.body.velocity.x < 0){
            if(this.blue.body.velocity.y > 0){
                this.blue.body.rotation = 225;
            }else if(this.blue.body.velocity.y < 0){
                this.blue.body.rotation = 305;
            }else{
                this.blue.body.rotation = 270;
            }
        }else if(this.blue.body.velocity.y < 0){
            this.blue.body.rotation = 0;
        }else{
            this.blue.body.rotation = 180;
        }

        //Update crown
        if(this.crown.attached === this.red.name){
            this.crown.position = this.red.body.position;
        }else if(this.crown.attached === this.blue.name){
            this.crown.position = this.blue.body.position;
        }
    }
}

function getCrown(player, crown){
    if(crown.attached === 'null'){
        crown.attached = player.name;
        console.log("La corona es de " + player.name);
    }
}

function stealCrown(crown){
    if(crown.attached === 'null'){
        console.log("La corona estaba tirada");
    }else{
        if(crown.attached === 'red'){
            crown.attached = 'blue';
            console.log("La corona ahora es de " + crown.attached);
        }else{
            crown.attached = 'red';
            console.log("La corona ahora es de " + crown.attached);
        }     
    }
}
