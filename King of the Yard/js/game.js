var config = {
    type: Phaser.AUTO,
    width: 1200,
    height: 675,
    physics: {
        default: 'arcade',
        arcade : {debug:true}
    },
    scene:[preloadScene, mainMenu, selectionMenu, controlsMenu, mainScene, redWinScene, blueWinScene]
};

let game = new Phaser.Game(config);