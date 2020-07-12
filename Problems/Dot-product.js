// Create a function, to compute the dot product, also known as the scalar product of two vectors.

const dotProduct = (arr1, arr2) => {
    let sum = 0
    arr1.map((num, i) => {
        sum += num * arr2[i]
    })
    return sum
}
