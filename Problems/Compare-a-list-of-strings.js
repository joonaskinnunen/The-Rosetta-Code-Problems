/*
Given a list of arbitrarily many strings, implement a function for each of the following conditions:

test if they are all lexically equal
test if every string is lexically less than the one after it (i.e. whether the list is in strict ascending order) */

const allEqual = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] !== arr[i + 1]) {
            return false
        }
    }
    return true
}

const azSorted = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] >= arr[i + 1]) {
            return false
        }
    }
    return true
}