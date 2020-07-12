/* If you add the square of the digits of a Natural number (an integer bigger than zero), you always end with either 1 or 89:

15 -> 26 -> 40 -> 16 -> 37 -> 58 -> 89
7 -> 49 -> 97 -> 130 -> 10 -> 1
Write a function that takes a number as a parameter and returns 1 or 89 after performing the mentioned process. */

const iteratedSquare = (n) => {
    let num = n
    while (num !== 1 && num !== 89) {
        const digitsArr = num.toString().split("")
        num = 0
        digitsArr.map(digit => {
            num += digit ** 2
        })
    }
    return num
}
iteratedSquare(15)