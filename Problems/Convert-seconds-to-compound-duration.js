/* Implement a function which:

takes a positive integer representing a duration in seconds as input (e.g., 100), and
returns a string which shows the same duration decomposed into weeks, days, hours, minutes, and seconds as detailed below (e.g., 1 min, 40 sec).
Demonstrate that it passes the following three test-cases:

Test Cases
Input number	Output number
7259	2 hr, 59 sec
728640059	1 d
6000000	9 wk, 6 d, 10 hr, 40 min
Details
The following five units should be used: 
Unit	Suffix used in Output	Conversion
week	wk	1 week = 7 days
day	d	1 day = 24 hours
hour	hr	1 hour = 60 minutes
minute	min	1 minute = 60 seconds
second	sec	---
However, only include quantities with non-zero values in the output (e.g., return 1 d and not 0 wk, 1 d, 0 hr, 0 min, 0 sec).
Give larger units precedence over smaller ones as much as possible (e.g., return 2 min, 10 sec and not 1 min, 70 sec or 130 sec).
Mimic the formatting shown in the test-cases (quantities sorted from largest unit to smallest and separated by comma+space; value and unit of each quantity separated by space). */

const convertSeconds = (sec) => {
    const obj = {
        wk: 0,
        d: 0,
        hr: 0,
        min: 0,
        sec: 0
    }
    while (sec >= 604800) {
        obj.wk++
        sec -= 604800
    }
    while (sec >= 86400) {
        obj.d++
        sec -= 86400
    }
    while (sec >= 3600) {
        obj.hr++
        sec -= 3600
    }
    while (sec >= 60) {
        obj.min++
        sec -= 60
    }
    obj.sec += sec

    const keys = Object.keys(obj)
    const values = Object.values(obj)
    let str = ""
    for (let i = 0; i < keys.length; i++) {
        if (values[i] > 0) {
            if (str.length > 0) {
                str += ", "
            }
            str += values[i] + " " + keys[i]
        }
    }
    return str
}

convertSeconds(6000000)
