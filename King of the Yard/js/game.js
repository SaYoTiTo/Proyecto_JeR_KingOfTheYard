var config = {
    type: Phaser.AUTO,
    width: 1150,
    height: 600,
    physics: {
        default: 'arcade',
        arcade : {debug:true}
    },
    scene:[preloadScene, mainScene]
};

let game = new Phaser.Game(config);