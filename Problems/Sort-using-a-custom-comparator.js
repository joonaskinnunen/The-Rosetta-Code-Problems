/* Write a function to sort an array (or list) of strings in order of descending length, and in ascending lexicographic order for strings of equal length. */

function lengthSorter(arr) {
    // Good luck!
    let sortedArr = [...arr].sort((a, b) => {
      if(a.length === b.length) {
        return a.localeCompare(b)
      }
      return b.length - a.length
    })
    return sortedArr
  }
  
  lengthSorter(["I", "hope", "your", "day", "is", "going", "good", "?"])