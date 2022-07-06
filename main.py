pacman = game.create_sprite(2, 2)
ghost = game.create_sprite(0, 0)
food = game.create_sprite(4, 4)
ghost.set(LedSpriteProperty.BLINK, 100)
food.set(LedSpriteProperty.BRIGHTNESS, 20)
while True:
    if ghost.get(LedSpriteProperty.X) < pacman.get(LedSpriteProperty.X):
        ghost.change(LedSpriteProperty.X, 1)
    elif ghost.get(LedSpriteProperty.X) > pacman.get(LedSpriteProperty.X):
        ghost.change(LedSpriteProperty.X, -1)
    elif ghost.get(LedSpriteProperty.Y) < pacman.get(LedSpriteProperty.Y):
        ghost.change(LedSpriteProperty.Y, 1)
    elif ghost.get(LedSpriteProperty.Y) > pacman.get(LedSpriteProperty.Y):
        ghost.change(LedSpriteProperty.Y, -1)
    if 0 == 0:
        pass

def on_forever():
    pass
basic.forever(on_forever)
