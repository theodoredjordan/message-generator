// Generates random message as a reply to the Magic Eight Ball

// 1. Random Number Generator function
const random = (max) => {
    return Math.floor(Math.random() * max)
}

let x = random(10)
console.log(x) 