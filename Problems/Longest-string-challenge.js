/* In this challenge, you have to find the strings that are the longest among the given strings.

Write a function that takes an array of strings and returns the strings that have a length equal to the longest length. */

function longestString(strings) {
    const longestStrings = []
    let longest = 0
    for(let i = 0; i < strings.length; i++) {
      if(strings[i].length > longest) {
        longest = strings[i].length
      }
    }
    for(let i = 0; i < strings.length; i++) {
      if(strings[i].length === longest) {
        longestStrings.push(strings[i])
      }
    }
    return longestStrings
  }  