/* The task is to strip control codes and extended characters from a string.
The solution should demonstrate how to achieve each of the following results: A string with control codes and extended characters stripped.
In ASCII, the control codes have decimal codes 0 through to 31 and 127. On an ASCII based system, if the control codes are stripped, the resultant string would have all of its characters within the range of 32 to 126 decimal on the ASCII table.
On a non-ASCII based system, we consider characters that do not have a corresponding glyph on the ASCII table (within the ASCII range of 32 to 126 decimal) to be an extended character for the purpose of this task. */

const strip = (s) => {
    let str = ""
    for (let i = 0; i < s.length; i++) {
        if (s.charCodeAt(i) > 31 && s.charCodeAt(i) < 127) {
            str += s.charAt(i)
        }
    }
    return str
}
strip("\ba\x00b\n\rc\fd\xc3")
