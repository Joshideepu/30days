function countAvailableSeatingOptions(seatingArrangement, n) {
    const rows = seatingArrangement.length;
    const cols = seatingArrangement[0].length;
    let count = 0;
    function hasConsecutiveVacantSeats(row) {
      let consecutiveVacantSeats = 0;
      for (let i = 0; i < cols; i++) {
        if (seatingArrangement[row][i] === 0) {
          consecutiveVacantSeats++;
          if (consecutiveVacantSeats === n) {
            return true;
          }
        } else {
          consecutiveVacantSeats = 0;
        }
      }
      return false;
    }
    for (let row = 0; row < rows; row++) {
      if (hasConsecutiveVacantSeats(row)) {
        count++;
      }
    }
  
    return count;
  }
  
  // Example
  const seatingArrangement = [
    [1, 0, 1, 0, 1, 0, 1],
    [0, 1, 0, 1, 0, 1, 0],
    [0, 0, 1, 1, 1, 1, 1],
    [1, 0, 1, 1, 0, 0, 1],
    [1, 1, 1, 0, 1, 0, 1],
    [0, 1, 1, 1, 1, 0, 0]
];
  
  const n = 2;
  const availableOptions = countAvailableSeatingOptions(seatingArrangement, n);
  console.log("Available seating options:", availableOptions);
  