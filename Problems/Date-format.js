/* Return an array with the current date in the formats:

2007-11-23
Sunday, November 23, 2007
Example output: ['2007-11-23', 'Sunday, November 23, 2007'] */

const getDateFormats = () => {
    const arr = [], d = new Date(), month = d.getMonth(), year = d.getFullYear(), day = d.getDay(), date = d.getDate()

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"]
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    arr.push(year + "-" + (month + 1) + "-" + date)
    arr.push(dayNames[day] + ", " + monthNames[month] + " " + date + ", " + year)
    return arr
}
getDateFormats()
