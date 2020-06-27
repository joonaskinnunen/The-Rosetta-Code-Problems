/* jortSort is a sorting toolset that makes the user do the work and guarantees efficiency because you don't have to sort ever again.
It was originally presented by Jenn "Moneydollars" Schiffer at the prestigious JSConf.

jortSort should be a function that takes a single array of comparable objects as its argument.
It then sorts the array in ascending order and compares the sorted array to the originally provided array.
If the arrays match (i.e. the original array was already sorted), the function returns true.
If the arrays do not match (i.e. the original array was not sorted), the function returns false. */


function jortsort(array) {
    let sortedArray = [...array].sort((a, b) => {
      return a - b
    })
    if(JSON.stringify(array) == JSON.stringify(sortedArray))  {
      return true
    }
    return false
  }
  
  jortsort([1,2,3,4,5])