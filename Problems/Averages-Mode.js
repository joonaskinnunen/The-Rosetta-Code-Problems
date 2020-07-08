/* Write a program to find the mode value of a collection.

The case where the collection is empty may be ignored. Care must be taken to handle the case where the mode is non-unique.

If it is not appropriate or possible to support a general collection, use a vector (array), if possible. If it is not appropriate or possible to support an unspecified value type, use integers. */

const mode = (arr) => {
    let numbersObj = {}, modeArr = [[0, 0]], numbersArr = []
    const finalArr = []
    arr.map(num => {
        numbersObj[num] = (numbersObj[num] || 0) + 1
    })
    numbersArr = Object.entries(numbersObj)
    numbersArr.map(numArr => {
        if (numArr[1] > modeArr[0][1]) {
            modeArr = [numArr]
        } else if (numArr[1] === modeArr[0][1]) {
            modeArr.push(numArr)
        }
    })
    modeArr.map(arr => {
        finalArr.push(parseInt(arr[0]))
    })
    return finalArr
}
mode([1, 2, 4, 4, 1])