input.onButtonPressed(Button.A, function () {
    speler.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    speler.change(LedSpriteProperty.X, 1)
})
let gehaktbal: game.LedSprite = null
let speler: game.LedSprite = null
speler = game.createSprite(2, 4)
basic.forever(function () {
	
})
basic.forever(function () {
    gehaktbal = game.createSprite(randint(0, 4), 0)
    for (let index = 0; index < 4; index++) {
        let pauze = 0
        basic.pause(pauze)
        gehaktbal.change(LedSpriteProperty.Y, 1)
    }
    if (gehaktbal.isTouching(speler)) {
        game.addScore(1)
        gehaktbal.delete()
    } else {
        game.gameOver()
    }
})
