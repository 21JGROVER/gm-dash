input.onButtonPressed(Button.A, function () {
    GMX += -1
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . . # . .
            . . # . #
            # . . . #
            . . # . #
            . . # . .
            `)
        basic.showLeds(`
            . # . . .
            . # . . .
            . # . . .
            . . . # .
            . . . # .
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    GMX += 1
})
let GMX = 0
let LIVES = 1
music.playMelody("E B C5 A B G A F ", 120)
music.playMelody("C D C5 B A G A B ", 120)
music.playMelody("C5 B A G A F E D ", 120)
music.playMelody("C C5 B A G A B C5 ", 120)
music.playMelody("C5 A B G A F G E ", 120)
music.playMelody("E G F A G B A C5 ", 120)
basic.showIcon(IconNames.Angry)
let GMY = 1
GMX += 3
led.plot(GMX, GMY)
basic.forever(function () {
	
})
basic.forever(function () {
    GMY += 1
    if (GMY == 5) {
        GMY += 4
    }
})
