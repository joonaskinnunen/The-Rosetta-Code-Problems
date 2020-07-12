// Write a function that takes an array of objects as a parameter. The function should sort the array according to the 'key' attribute of the objects and return the sorted array.

const sortByKey = (arr) => {
    arr.sort((a, b) => {
        return a.key - b.key
    })
    return arr
}
sortByKey([{ key: 3, value: "foo" }, { key: 2, value: "bar" }, { key: 4, value: "baz" }, { key: 1, value: 42 }, { key: 5, value: "another string" }])