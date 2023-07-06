const moment = require("moment")

/**
 * This is a function that prints "tick" to the console
 */
const tick = () => {
    const now = moment().format("h:mm:ss a")
    console.clear()
    console.log("it's ", now)
}

/**
 * Init an interval that calls the tick function every second
 */
setInterval(tick, 1000)
