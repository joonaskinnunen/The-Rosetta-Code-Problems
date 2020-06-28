/* Comma quibbling is a task originally set by Eric Lippert in his blog.

Write a function to generate a string output which is the concatenation of input words from a list/sequence where:

An input of no words produces the output string of just the two brace characters ("{}")
An input of just one word, e.g. ["ABC"], produces the output string of the word inside the two braces, e.g. "{ABC}"
An input of two words, e.g. ["ABC", "DEF"], produces the output string of the two words inside the two braces with the words separated by the string " and ", e.g. "{ABC and DEF}"
An input of three or more words, e.g. ["ABC", "DEF", "G", "H"], produces the output string of all but the last word separated by ", " with the last word separated by " and " and all within braces; e.g. "{ABC, DEF, G and H}"
Test your function with the following series of inputs showing your output here on this page:

[] # (No input words).
["ABC"]
["ABC", "DEF"]
["ABC", "DEF", "G", "H"]
Note: Assume words are non-empty strings of uppercase characters for this task. */


function quibble(words) {
    let str = "{"
    if (words.length === 0) {
        return "{}"
    }
    if (words.length === 1) {
        return "{" + words[0] + "}"
    }
    if (words.length === 2) {
        return "{" + words[0] + " and " + words[1] + "}"
    }
    for (let i = 0; i < words.length; i++) {
        str += words[i]
        if (i === words.length - 2) {
            str += " and "
        }
        if (i < words.length - 2) {
            str += ","
        }
    }
    str += "}"
    return str
}
quibble(["ABC", "DEF", "G", "H"])