input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
    basic.showNumber(1)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(2)
    basic.showNumber(2)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(0)
    basic.showNumber(0)
})
basic.showIcon(IconNames.Yes)
radio.setGroup(99)
