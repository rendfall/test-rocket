import Player from '../models/Player';

class Level1 extends Phaser.State {
    player = null;
    background = null;

    preload() {
        this.game.load.spritesheet('player', 'assets/sprites/player.png', 190, 100, 4);
        this.game.load.image('background', 'assets/images/background.jpg');
    }

    create() {
        // Background
        this.background = this.game.add.tileSprite(0, 0, 1024, 600, 'background');
        this.game.world.bounds.setTo(0, 0, 1024, 600);
        this.game.physics.setBoundsToWorld();

        // Player
        let player = this.player = new Player(this.game);
        player.addSprite(100, 100, 'player');
        player.getSprite().body.collideWorldBounds = true;
        player.setControls();
    }

    update() {
        this.background.tilePosition.x -= 2;

        this.player.updateMove(this.player.getControls());
    }
}

export default Level1;    
