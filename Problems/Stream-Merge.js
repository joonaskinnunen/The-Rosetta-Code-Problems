// Write a function that takes multiple sorted arrays of items, and returns one array of sorted items.

function mergeLists(lists) {
    let arr = []
    lists.forEach(x => {
        arr = arr.concat(x)
    })
    arr.sort((a, b) => {
        return a - b
    })
    return arr
}

mergeLists([[1, 3, 9, 14, 15, 17, 28], [7, 8, 14, 14, 23, 26, 28, 29, 30], [9, 23, 25, 29]])