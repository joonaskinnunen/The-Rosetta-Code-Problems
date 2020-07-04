/* Given a string, calculate the frequency of each character.

All characters should be counted. This includes lower and upper case letters, digits, whitespace, special characters, or any other distinct characters.

Write a function to count the occurrences of each character in a given string.

The function should return a 2D array with each of the elements in the following form: ['char', freq].
The character should be a string with a length of 1, and frequency is a number denoting the count.

For example, given the string "ab", your function should return [['a', 1], ['b', 1]]. */

const letterFrequency = (txt) => {
    let counts = {}
    let charArr = txt.split('')
    charArr.forEach(x => { counts[x] = (counts[x] || 0) + 1 })
    let charCountsArr = Object.entries(counts)
    charCountsArr.sort()
    return charCountsArr
}
letterFrequency("Not all that Mrs. Bennet, however")