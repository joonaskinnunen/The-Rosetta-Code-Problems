/* Write a function to generate an array of lower case ASCII characters for a given range.
For example, given the range ['a', 'd'], the function should return ['a', 'b', 'c', 'd']. */

const lascii = (cFrom, cTo) => {
    const asciiFrom = cFrom.charCodeAt(0)
    const asciiTo = cTo.charCodeAt(0)
    const arr = []
    for(let i = asciiFrom; i <= asciiTo; i++) {
        arr.push(String.fromCharCode(i))
    }
    return arr
}

lascii('a','d')