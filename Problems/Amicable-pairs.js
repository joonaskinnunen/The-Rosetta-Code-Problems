/* Two integers  N  and  M  are said to be amicable pairs if  N≠M  and the sum of the proper divisors of  N  ( sum(propDivs(N)) )  =M  as well as  sum(propDivs(M))=N .

Example:

1184 and 1210 are an amicable pair, with proper divisors:

1, 2, 4, 8, 16, 32, 37, 74, 148, 296, 592 and
1, 2, 5, 10, 11, 22, 55, 110, 121, 242, 605 respectively.
Calculate and show here the Amicable pairs below 20,000 (there are eight). */

const amicablePairsUpTo = (maxNum) => {
    let divisorsSums = {}
    let amicablePairs = []
    let i = 1
    while (i <= maxNum) {
        for (let j = 1; j < i; j++) {
            if (i % j === 0) divisorsSums[i] = (divisorsSums[i] || 0) + j
        }
        i++
    }
    const arr = Object.entries(divisorsSums)
    arr.map(x => {
        x[0] = parseInt(x[0])
        arr.map(y => {
            y[0] = parseInt(y[0])
            if (x[0] === y[1] && x[1] === y[0] && x[0] !== y[0]) { amicablePairs.push(x.sort()) }
        })
    })
    amicablePairs = Array.from(new Set(amicablePairs.map(JSON.stringify)), JSON.parse)
    return amicablePairs
}
amicablePairsUpTo(20000)