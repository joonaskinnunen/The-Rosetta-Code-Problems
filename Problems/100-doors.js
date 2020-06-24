/*
There are 100 doors in a row that are all initially closed.
You make 100 passes by the doors.
The first time through, visit every door and 'toggle' the door (if the door is closed, open it; if it is open, close it).
The second time, only visit every 2nd door (i.e., door #2, #4, #6, ...) and toggle it.
The third time, visit every 3rd door (i.e., door #3, #6, #9, ...), etc., until you only visit the 100th door.

Implement a function to determine the state of the doors after the last pass.
Return the final result in an array, with only the door number included in the array if it is open.
*/

function getFinalOpenedDoors(numDoors) {
  // Good luck!
  let doorsArr = Array(numDoors).fill(false)
  let counter = 1
  let finalArr = []
  while(counter <= 100) {
    for(let i = counter - 1; i < numDoors; i += counter) {
      doorsArr[i] = !doorsArr[i]
    }
    counter++
  }
  doorsArr.map((door, i) => door === true && finalArr.push(i+1))
  return finalArr
}

getFinalOpenedDoors(100)