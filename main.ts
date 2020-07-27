let Ya = 0
let Yb = 1
let Yc = 2
let Yd = 3
let Ye = 4
let direction1 = 1
let direction2 = 1
let direction3 = 1
let direction4 = 1
let direction5 = -1
led.plot(0, Ya)
led.plot(1, Yb)
led.plot(2, Yc)
led.plot(3, Yd)
led.plot(4, Ye)
basic.forever(function () {
    led.unplot(0, Ya)
    led.unplot(1, Yb)
    led.unplot(2, Yc)
    led.unplot(3, Yd)
    led.unplot(4, Ye)
    Ya += direction1
    Yb += direction2
    Yc += direction3
    Yd += direction4
    Ye += direction5
    if (Ya <= 0) {
        direction1 = 1
    } else if (Ya >= 4) {
        direction1 = -1
    }
    if (Yb <= 0) {
        direction2 = 1
    } else if (Yb >= 4) {
        direction2 = -1
    }
    if (Yc <= 0) {
        direction3 = 1
    } else if (Yc >= 4) {
        direction3 = -1
    }
    if (Yd <= 0) {
        direction4 = 1
    } else if (Yd >= 4) {
        direction4 = -1
    }
    if (Ye <= 0) {
        direction5 = 1
    } else if (Ye >= 4) {
        direction5 = -1
    }
    led.plot(0, Ya)
    led.plot(1, Yb)
    led.plot(2, Yc)
    led.plot(3, Yd)
    led.plot(4, Ye)
    basic.pause(100)
})
