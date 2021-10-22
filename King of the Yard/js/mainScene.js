var red;
var blue;
var crown;
var boolSteal = false;
var pointTimer;
var redText;
var blueText;

class mainScene extends Phaser.Scene{

    constructor(){
        super({ key: 'mainScene'});
    }

    create(){  
            
        this.input.mouse.disableContextMenu();

        //Background
        this.anims.create({
            key: 'gameBgAnim',
            frameRate: 2.5,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('gameBg', {start: 0, end: 2}),
        });

        this.bg = this.add.sprite(600, 337.5, 'gameBg');
        this.bg.anims.play('gameBgAnim');

        //Characters

        //Red
        red = this.physics.add.sprite(500,200, 'redChar', 0).setScale(0.35).refreshBody();
        red.setCollideWorldBounds(true);
        red.name = 'red';
        red.points = 0;
        this.anims.create({
            key: 'redWalkAnim',
            frameRate: 2.5,
            repeat: 0,
            frames: this.anims.generateFrameNumbers('redCharAnim', {start: 0, end: 7}),
        });

        //Blue
        blue = this.physics.add.sprite(650,400, 'blueChar', 0).setScale(0.35).refreshBody();
        blue.setCollideWorldBounds(true);
        blue.name = 'blue';
        blue.points = 0; 
        this.anims.create({
            key: 'blueWalkAnim',
            frameRate: 2.5,
            repeat: 0,
            frames: this.anims.generateFrameNumbers('blueCharAnim', {start: 0, end: 7}),
        });

        //Crown
        crown = this.physics.add.sprite(360,240, 'crown', 0).setScale(0.4).refreshBody();
        crown.attached = 'null';
        //crown.setCollideWorldBounds(true);

        //Point texts
        redText = this.add.text(16, 16, 'Red Score: 0', { fontSize: '32px', fill: 'FF0000' });
        blueText = this.add.text(900, 16, 'Blue Score: 0', { fontSize: '32px', fill: '00FFF3' });
    
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
        this.physics.add.collider(red, blue, stealCrown, null, this);
        this.physics.add.overlap(red, crown, getCrown, null, this);
        this.physics.add.overlap(blue, crown, getCrown, null, this);
        
    }

    update(){        

        //Update red
        if (this.keyA.isDown)
        {
            red.body.velocity.x = -160;
        }else if (this.keyD.isDown)
        {
            red.body.velocity.x = 160;
        }else{
            red.body.velocity.x = 0;
        }
        if (this.keyW.isDown){
            red.body.velocity.y = -160;
        }else if (this.keyS.isDown){
            red.body.velocity.y = 160;
        }else{
            red.body.velocity.y = 0;
        }

        //Red animation
        if(red.body.velocity.x !== 0 || red.body.velocity.y !== 0){
            if(!red.anims.isPlaying)
                red.anims.play('redWalkAnim');
        }else{
            red.anims.stop();
        }

        //Update red rotation
        if(red.body.velocity.x > 0){
            if(red.body.velocity.y > 0){
                red.body.rotation = 135;
            }else if(red.body.velocity.y < 0){
                red.body.rotation = 45;
            }else{
                red.body.rotation = 90;
            }
        }else if(red.body.velocity.x < 0){
            if(red.body.velocity.y > 0){
                red.body.rotation = 225;
            }else if(red.body.velocity.y < 0){
                red.body.rotation = 305;
            }else{
                red.body.rotation = 270;
            }
        }else if(red.body.velocity.y < 0){
            red.body.rotation = 0;
        }else if(red.body.velocity.y > 0){
            red.body.rotation = 180;
        }

        //Update blue
        if (this.keyJ.isDown)
        {
            blue.body.velocity.x = -160;
        }else if (this.keyL.isDown)
        {
            blue.body.velocity.x = 160;
        }else{
            blue.body.velocity.x = 0;
        }
        if (this.keyI.isDown){
            blue.body.velocity.y = -160;
        }else if (this.keyK.isDown){
            blue.body.velocity.y = 160;
        }else{
            blue.body.velocity.y = 0;
        }

        //Blue animation
        if(blue.body.velocity.x !== 0 || blue.body.velocity.y !== 0){
            if(!blue.anims.isPlaying)
                blue.anims.play('blueWalkAnim');
        }else{
            blue.anims.stop();
        }

        //Update blue rotation
        if(blue.body.velocity.x > 0){
            if(blue.body.velocity.y > 0){
                blue.body.rotation = 135;
            }else if(blue.body.velocity.y < 0){
                blue.body.rotation = 45;
            }else{
                blue.body.rotation = 90;
            }
        }else if(blue.body.velocity.x < 0){
            if(blue.body.velocity.y > 0){
                blue.body.rotation = 225;
            }else if(blue.body.velocity.y < 0){
                blue.body.rotation = 305;
            }else{
                blue.body.rotation = 270;
            }
        }else if(blue.body.velocity.y < 0){
            blue.body.rotation = 0;
        }else if(blue.body.velocity.y > 0){
            blue.body.rotation = 180;
        }

        //Update crown
        if(crown.attached !== 'null'){
            if(crown.attached === red.name){
                //Depends on red position
                if(red.body.velocity.x !== 0 || red.body.velocity.y !== 0){
                    crown.x = red.x - red.body.velocity.x / 3;
                    crown.y = red.y - red.body.velocity.y / 3;
                }else{
                    crown.x = red.x;
                    crown.y = red.y - 60;
                }
                
            }else if(crown.attached === blue.name){
                //Depends on blue position
                if(blue.body.velocity.x !== 0 || blue.body.velocity.y !== 0){
                    crown.x = blue.x - blue.body.velocity.x / 3;
                    crown.y = blue.y - blue.body.velocity.y / 3;
                }else{
                    crown.x = blue.x;
                    crown.y = blue.y - 60;
                }
            }
        }
    }
}

function getCrown(player, crown){
    if(crown.attached === 'null'){
        boolSteal = true;
        crown.attached = player.name;
        crown.setDepth(30);
        console.log("La corona es de " + red.name);
        //Creates a timer to give points
        pointTimer = this.time.addEvent({ delay: 2000, callback: givePoints, callbackScope: this, loop: true});
    }
}

function stealCrown(){
    if(boolSteal){      
        if(crown.attached === 'red'){
            crown.attached = 'blue';
            console.log("La corona ahora es de " + crown.attached);
        }else{
            crown.attached = 'red';
            console.log("La corona ahora es de " + crown.attached);
        } 
        
        boolSteal = false;
        //Creates a timer to avoid instant re-stealing
        timer = this.time.addEvent({ delay: 2000, callback: () => boolSteal = true, callbackScope: this, loop: true });

        //Creates a timer to give points
        pointTimer = this.time.addEvent({ delay: 2000, callback: givePoints, callbackScope: this, loop: true});
    }
}

function givePoints(){
    if(crown.attached === 'red'){
        red.points++;
        redText.setText('Red Score: ' + red.points);
        if(red.points === 10){
            this.scene.stop('controlsMenu');
            this.scene.start('redWinScene');
        }
    }else if(crown.attached === 'blue'){
        blue.points++;
        blueText.setText('Blue Score: ' + blue.points);
        if(blue.points === 10){
            this.scene.stop('controlsMenu');
            this.scene.start('blueWinScene');
        }
    }
}
