class Player {
    game = null;
    sprite = null;
    speed = 5;

    constructor(game) {
        this.game = game;
    }

    getSprite() {
        return this.sprite;
    }

    addSprite(posX, posY, name) {
        let sprite = this.sprite = this.game.add.sprite(posX, posY, name);

        var flight = sprite.animations.add('flight');
        sprite.animations.play('flight', 32, true);
        this.game.physics.enable(sprite, Phaser.ARCADE);
    }

    setControls(keys) {
        // Config keys if needed
        if (keys) {
            this.cursors.up = this.game.input.keyboard.addKey(Phaser.Keyboard[keys.up]);
            this.cursors.down = this.game.input.keyboard.addKey(Phaser.Keyboard[keys.down]);
            this.cursors.left = this.game.input.keyboard.addKey(Phaser.Keyboard[keys.left]);
            this.cursors.right = this.game.input.keyboard.addKey(Phaser.Keyboard[keys.right]);
            this.cursors.fire = this.game.input.keyboard.addKey(Phaser.Keyboard[keys.fire]);
        } else {
            this.cursors = this.game.input.keyboard.createCursorKeys();
            this.cursors.fire = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        }
    }

    getControls() {
        return this.cursors;
    }

    updateMove(cursors) {
        if (cursors.up.isDown) {
            this.sprite.body.y -= this.speed;
        }

        if (cursors.down.isDown) {
            this.sprite.body.y += this.speed;
        }

        if (cursors.left.isDown) {
            this.sprite.body.x -= this.speed;
        }

        if (cursors.right.isDown) {
            this.sprite.body.x += this.speed;
        }

        if (cursors.fire.isDown) {
            console.log('space!');
        }
    }
}

export default Player;
