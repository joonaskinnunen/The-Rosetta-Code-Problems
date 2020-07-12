/* The phrase "I before E, except after C" is a widely known mnemonic which is supposed to help when spelling English words.

Using the words provided, check if the two sub-clauses of the phrase are plausible individually:

"I before E when not preceded by C".
"E before I when preceded by C".
If both sub-phrases are plausible then the original phrase can be said to be plausible.

Write a function that accepts a word and check if the word follows this rule. The function should return true if the word follows the rule and false if it does not. */

const IBeforeExceptC = (word) => {
    let includesC = false, previousLetter = ""
    for (let i = 0; i < word.length; i++) {
        const letter = word.charAt(i)
        if (letter === "c") includesC = true
        if (includesC) {
            if (letter === "e" && previousLetter === "i") {
                return false
            }
        } else {
            if (letter === "e" && previousLetter === "i") {
                return false
            }
        }
        previousLetter = letter
    }
    return true
}
IBeforeExceptC("insufficinte")
