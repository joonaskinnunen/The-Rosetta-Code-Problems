/* Write a function to return the factorial of a number.

Factorial of a number is given by:

n! = n * (n-1) * (n-2) * ..... * 1
For example:

3! = 3 * 2 * 1 = 6
4! = 4 * 3 * 2 * 1 = 24
Note: 0! = 1 */


const factorial = (n) => {
    // Good luck!
    let sum = 1
    for(let i = 1; i < n; i++) {
      sum += sum * i
    }
    return sum
  }