var config = {
    type: Phaser.AUTO,
    width: 1200,
    height: 675,
    physics: {
        default: 'arcade',
        arcade : {debug:false}
    },
    scene:[preloadScene, mainMenu, selectionMenu, configScene, controlsMenu, mainScene, redWinScene, blueWinScene]
};

let game = new Phaser.Game(config);