// The objective is to write a function that finds the sum of all positive multiples of 3 or 5 below n.

const sumMults = (n) => {
    let sum = 0
    for (let i = 1; i < n; i++) {
        if (i % 3 == 0 || i % 5 == 0) sum += i;
    }
    return sum
}
sumMults(100)