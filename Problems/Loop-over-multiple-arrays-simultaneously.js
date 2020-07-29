/* Loop over multiple arrays and create a new array whose  ith  element is the concatenation of  ith  element of each of the given.

For this example, if you are given this array of arrays:

[ ["a", "b", "c"], ["A", "B", "C"], [1, 2, 3] ]

the output should be:

["aA1","bB2","cC3"]

Write a function that takes an array of arrays as a parameter and returns an array of strings satisfying the given description. */

const loopSimult = (A) => {
    let newArr = []
    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < A[i].length; j++) {
            newArr[j] ? newArr[j] = newArr[j] + A[i][j] : newArr[j] = A[i][j]
        }
    }
    return newArr
}
loopSimult([["a", "b", "c"], ["A", "B", "C"], [1, 2, 3]])