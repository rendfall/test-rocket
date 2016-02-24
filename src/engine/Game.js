import Level1 from './../stages/Level1';

class Game {
    constructor() {
        let game = new Phaser.Game(
            1024, // width
            600, // height
            Phaser.ARCADE, // physics
            'game', // container
            Phaser.AUTO // renderer
        );

        // Add states
        game.state.add('Level1', Level1);

        // Go to first state
        game.state.start('Level1');
    }
}

export default Game;
