// Determine whether a generated string of brackets is balanced; that is, whether it consists entirely of pairs of opening/closing brackets (in that order), none of which mis-nest.

function isBalanced(str) {
    let charCount = [0, 0]
    if (str.charAt(0) === "]" || str.charAt(str.length - 1) === "[") {
        return false
    }
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === "[") {
            charCount[0]++
        }
        if (str.charAt(i) === "]") {
            charCount[1]++
        }
        if (charCount[1] > charCount[0]) {
            return false
        }
    }
    return charCount[0] === charCount[1]
}
isBalanced("[]]]")