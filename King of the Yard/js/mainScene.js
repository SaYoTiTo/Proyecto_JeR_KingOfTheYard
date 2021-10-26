var red;
var blue;
var crown;

var boolSteal = false;
var pointTimer;

var redText;
var blueText;

var floorSlow;

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
        red = this.physics.add.sprite(600,100, 'redChar', 0).setScale(0.35).refreshBody();
        red.setCollideWorldBounds(true);
        red.name = 'red';
        red.points = 0;
        red.speedMod = 1;
        this.anims.create({
            key: 'redWalkAnim',
            frameRate: 2.5,
            repeat: 0,
            frames: this.anims.generateFrameNumbers('redCharAnim', {start: 0, end: 7}),
        });

        //Blue
        blue = this.physics.add.sprite(600,575, 'blueChar', 0).setScale(0.35).refreshBody();
        blue.setCollideWorldBounds(true);
        blue.name = 'blue';
        blue.points = 0;
        blue.speedMod = 1;
        this.anims.create({
            key: 'blueWalkAnim',
            frameRate: 2.5,
            repeat: 0,
            frames: this.anims.generateFrameNumbers('blueCharAnim', {start: 0, end: 7}),
        });

        //Crown
        crown = this.physics.add.sprite(600,337.5, 'crown', 0).setScale(0.5).refreshBody();
        crown.attached = 'null';
        //crown.setCollideWorldBounds(true);

        //Scene objects
        this.anims.create({
            key: 'stringsAnim',
            frameRate: 1.5,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('strings', {start: 0, end: 3}),
        });
        this.strings = this.physics.add.sprite(220,240, 'strings', 0).setScale(0.8).refreshBody();
        this.strings.anims.play('stringsAnim');

        this.anims.create({
            key: 'seatsAnim',
            frameRate: 1.5,
        this.strings.body.setImmovable();
            repeat: -1,
            frames: this.anims.generateFrameNumbers('seats', {start: 0, end: 3}),
        });

        this.seats = this.physics.add.sprite(220,240, 'seats', 0).setScale(0.8).refreshBody();
        this.seats.anims.play('seatsAnim');
        this.seats.body.setImmovable();

        this.swingBar = this.physics.add.sprite(220,225, 'swingBar', 0).setScale(0.8).refreshBody();
        this.swingBar.body.setImmovable();

        this.anims.create({
            key: 'wheelAnim',
            frameRate: 2.5,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('wheel', {start: 0, end: 2}),
        });
        this.wheel = this.physics.add.sprite(200,550, 'wheel', 0).setScale(0.65).refreshBody();
        this.wheel.anims.play('wheelAnim');
        this.wheel.body.setCircle(140);
        this.wheel.body.setOffset(60,30);
        this.wheel.body.setImmovable();

        //Trees
        this.anims.create({
            key: 'treeAnim',
            frameRate: 2.5,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('tree', {start: 0, end: 2}),
        });
        this.tree1 = this.physics.add.sprite(515,500, 'tree', 0).setScale(0.75).refreshBody();
        this.tree1.anims.play('treeAnim');
        this.tree1.depth = 30;
        this.tree2 = this.physics.add.sprite(440,160, 'tree', 0).setScale(0.75).refreshBody();
        this.tree2.anims.play('treeAnim');
        this.tree2.rotation = -0.4;
        this.tree2.depth = 30;
        this.tree3 = this.physics.add.sprite(945,150, 'tree', 0).setScale(0.75).refreshBody();
        this.tree3.anims.play('treeAnim');
        this.tree3.rotation = 0.4;
        this.tree3.depth = 30;

        //Scene walls
        this.walls = this.physics.add.staticGroup();
        this.walls.create(937, 435, 'wall').setScale(3.3,0.3).refreshBody();
        this.walls.create(937, 595, 'wall').setScale(3.3,0.3).refreshBody();
        this.walls.create(795, 580, 'wall').setScale(0.15,1).refreshBody();
        this.walls.create(1077, 575, 'wall').setScale(0.15,1).refreshBody();
        this.walls.create(795, 460, 'wall').setScale(0.15,1).refreshBody();
        this.walls.create(1080, 460, 'wall').setScale(0.15,1).refreshBody();
        this.walls.create(110, 230, 'wall').setScale(0.15,2).refreshBody();
        this.walls.create(335, 230, 'wall').setScale(0.15,1.8).refreshBody();

        var child = this.walls.getChildren();
        for (var i = 0; i < child.length; i++)
        {
            child[i].setVisible(false);
        }

        //Slowing places
        floorSlow = this.physics.add.sprite(935,510, 'wall').setScale(3.3,3.2).refreshBody();
        floorSlow.setVisible(false);

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
        this.physics.add.collider(red, this.wheel);               
        this.physics.add.collider(blue, this.wheel); 
        this.physics.add.collider(red, this.walls);
        this.physics.add.collider(blue, this.walls);
        this.physics.add.overlap(red, floorSlow, reduceSpeed, null, this);
        this.physics.add.overlap(blue, floorSlow, reduceSpeed, null, this);
    }

    update(){        

        //Control velocity
        if(red.slowed){
            if(red.body.touching.none){
                increaseSpeed(red);
            }
        }
        if(blue.slowed){
            if(blue.body.touching.none){
                increaseSpeed(blue);
            }
        }        
        //Update red
        if (this.keyA.isDown)
        {
            red.body.velocity.x = -160 * red.speedMod;
        }else if (this.keyD.isDown)
        {
            red.body.velocity.x = 160 * red.speedMod;
        }else{
            red.body.velocity.x = 0;
        }
        if (this.keyW.isDown){
            red.body.velocity.y = -160 * red.speedMod;
        }else if (this.keyS.isDown){
            red.body.velocity.y = 160 * red.speedMod;
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
            blue.body.velocity.x = -160 * blue.speedMod;
        }else if (this.keyL.isDown)
        {
            blue.body.velocity.x = 160 * blue.speedMod;
        }else{
            blue.body.velocity.x = 0;
        }
        if (this.keyI.isDown){
            blue.body.velocity.y = -160 * blue.speedMod;
        }else if (this.keyK.isDown){
            blue.body.velocity.y = 160 * blue.speedMod;
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

function reduceSpeed(player){
    player.slowed = true;
    player.speedMod = 0.8;
}

function increaseSpeed(player){
    player.slowed = false;
    player.speedMod = 1;
}
