/*
Write a function to generate the nth Fibonacci number.

The nth Fibonacci number is given by:

Fn = Fn-1 + Fn-2

The first two terms of the series are 0 and 1.

Hence, the series is: 0, 1, 1, 2, 3, 5, 8, 13...
*/

function fibonacci(n) {
    const arr = [0, 1, 1]
    for (let i = arr.length; i <= n; i++) {
        arr.push(arr[i - 1] + arr[i - 2])
        console.log(arr)
    }
    return arr[n]
}

fibonacci(10)