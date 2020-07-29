/* Given two sets A and B, compute  (A∖B)∪(B∖A).  That is, enumerate the items that are in A or B but not both. This set is called the symmetric difference of A and B. In other words:  (A∪B)∖(A∩B)  (the set of items that are in at least one of A or B minus the set of items that are in both A and B).

Write a function that takes two arrays as parameters and returns the symmetric difference. Sort the resultant array before returning it. */

const symmetricDifference = (A, B) => {
    let arr = []
    A.forEach(x => {
        if (B.indexOf(x) < 0) {
            arr.push(x)
        }
    })
    B.forEach(x => {
        if (A.indexOf(x) < 0) {
            arr.push(x)
        }
    })
    arr.sort()
    return arr
}
symmetricDifference(["John", "Bob", "Mary", "Serena"], ["Jim", "Mary", "John", "Bob"])