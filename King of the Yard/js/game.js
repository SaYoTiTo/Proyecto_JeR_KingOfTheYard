var config = {
    type: Phaser.AUTO,
    width: 420,
    height: 320,
    physics: {
        default: 'arcade'
    },
    scene:[preloadScene, mainScene]
};

let game = new Phaser.Game(config);