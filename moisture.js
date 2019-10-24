let moisture = 0

basic.forever(function () {
    pins.analogWritePin(AnalogPin.P8, 1023)
    moisture = pins.analogReadPin(AnalogPin.P0)
    pins.analogWritePin(AnalogPin.P8, 0)

    if (input.buttonIsPressed(Button.A)) {
        pins.analogWritePin(AnalogPin.P8, 1)
        basic.showNumber(moisture)
        basic.pause(2000)
        pins.analogWritePin(AnalogPin.P8, 0)
    }


})
