// Write a function that returns the greatest common divisor of two integers.

const gcd = (a, b) => {
    let i = a
    while (i >= 0) {
        if (a % i === 0 && b % i === 0) {
            return i
        }
        i--
    }
}
gcd(100, 25)