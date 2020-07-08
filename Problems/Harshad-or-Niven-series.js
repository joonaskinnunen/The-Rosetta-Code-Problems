/* The Harshad or Niven numbers are positive integers ≥ 1 that are divisible by the sum of their digits.

For example, 42 is a Harshad number as 42 is divisible by (4 + 2) without remainder.

Assume that the series is defined as the numbers in increasing order.

Implement a function to generate successive members of the Harshad sequence.

Use it to list the first twenty members of the sequence and list the first Harshad number greater than 1000. */

const isHarshadOrNiven = () => {
    const res = {
        firstTwenty: [],
        firstOver1000: undefined
    }
    let i = 1
    while (res.firstOver1000 === undefined) {
        let digits = i.toString().split("")
        let sum = 0
        digits.map(digit => {
            sum += parseInt(digit)
        })
        if (i <= 1000 && i % sum === 0) {
            res.firstTwenty.push(i)
        } else if (i % sum === 0) {
            res.firstOver1000 = i
        }
        if (res.firstTwenty.length === 20 && i <= 1000) i = 1000
        i++
    }
    return res
}
isHarshadOrNiven()
