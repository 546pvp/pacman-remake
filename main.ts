/**
 * events
 */
input.onButtonPressed(Button.AB, function () {
    game.resume()
})
input.onButtonPressed(Button.B, function () {
    ghost2 = game.createSprite(1, 1)
})
/**
 * Note: pause is really making the ghost chasing pacman
 */
let ghost2: game.LedSprite = null
let pacman = game.createSprite(2, 2)
let ghost = game.createSprite(0, 0)
let food = game.createSprite(4, 4)
ghost.set(LedSpriteProperty.Blink, 100)
food.set(LedSpriteProperty.Brightness, 20)
while (true) {
    basic.pause(500)
    if (ghost.get(LedSpriteProperty.X) < pacman.get(LedSpriteProperty.X)) {
        ghost.change(LedSpriteProperty.X, 1)
    } else if (ghost.get(LedSpriteProperty.X) > pacman.get(LedSpriteProperty.X)) {
        ghost.change(LedSpriteProperty.X, -1)
    } else if (ghost.get(LedSpriteProperty.Y) < pacman.get(LedSpriteProperty.Y)) {
        ghost.change(LedSpriteProperty.Y, 1)
    } else if (ghost.get(LedSpriteProperty.Y) > pacman.get(LedSpriteProperty.Y)) {
        ghost.change(LedSpriteProperty.Y, -1)
    }
    if (input.acceleration(Dimension.X) > 200) {
        pacman.change(LedSpriteProperty.X, 1)
    } else if (input.acceleration(Dimension.X) < -200) {
        pacman.change(LedSpriteProperty.X, -1)
    }
    if (input.acceleration(Dimension.Y) > 200) {
        pacman.change(LedSpriteProperty.Y, 1)
    } else if (input.acceleration(Dimension.Y) < -200) {
        pacman.change(LedSpriteProperty.Y, -1)
    }
    if (ghost.get(LedSpriteProperty.X) == pacman.get(LedSpriteProperty.X) && ghost.get(LedSpriteProperty.Y) == pacman.get(LedSpriteProperty.Y)) {
        basic.showString("X")
        game.gameOver()
    }
    if (pacman.get(LedSpriteProperty.X) == food.get(LedSpriteProperty.X) && pacman.get(LedSpriteProperty.Y) == food.get(LedSpriteProperty.Y)) {
        game.addScore(1)
        food.set(LedSpriteProperty.X, randint(0, 4))
        food.set(LedSpriteProperty.Y, randint(0, 4))
    }
}
basic.forever(function () {
	
})
