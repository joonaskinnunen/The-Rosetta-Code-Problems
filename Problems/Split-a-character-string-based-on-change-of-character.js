/* Split a (character) string into comma (plus a blank) delimited strings based on a change of character (left to right).
Blanks should be treated as any other character (except they are problematic to display clearly).
The same applies to commas. For instance, the string:
"gHHH5YY++///\"
should be split as:
["g", "HHH", "5", "YY", "++", "///", "\" ] */

const split = (str) => {
    const arr = []
    let arrStr = str.charAt(0)
    for (let i = 1; i <= str.length; i++) {
        if (str.charAt(i) === arrStr.charAt(arrStr.length - 1)) {
            arrStr += str.charAt(i)
        } else {
            arr.push(arrStr)
            arrStr = str.charAt(i)
        }
    }
    return arr
}
split("sssmmmaaammmaaat")