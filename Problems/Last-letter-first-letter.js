/* A certain children's game involves starting with a word in a particular category.
Each participant in turn says a word, but that word must begin with the final letter of the previous word.
Once a word has been given, it cannot be repeated. If an opponent cannot give a word in the category, they fall out of the game.

For example, with "animals" as the category,

Child 1: dog
Child 2: goldfish
Child 1: hippopotamus
Child 2: snake
...
Write a function that takes an input array of words.
The function should return an array of words where the first letter of each word is the same as the last letter of the previous word.
Only use the words in the input array, and once a word is used it cannot be repeated.
The words in the return array should be selected and sequenced so that that its length is maximized. */

const findLongestChain = (items) => {
    let finalArr = []
    items.map((item) => {
        let tempArr = []
        tempArr.push(item)
        for (let j = 0; j < items.length; j++) {
            if (tempArr[tempArr.length - 1].charAt(tempArr[tempArr.length - 1].length - 1) === items[j].charAt(0) && !tempArr.includes(items[j])) {
                tempArr.push(items[j])
                j = 0
            }
        }
        if (tempArr.length > finalArr.length) {
            finalArr = tempArr
        }
    })
    return finalArr
}
findLongestChain(["certain", "each", "game", "involves", "starting", "with", "word"])