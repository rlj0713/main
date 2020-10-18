
let weekNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let monthLengthsL = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let monthLengthsN = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let dayCount = 1;

for (let year = 1901; year <= 2000; year++) {
  for (let month = 0; month < 12; month++) {
    for (let x = 1; x <= limit(year, month); x++) {
      let fullDate = {
        year: year,
        month: monthNames[month],
        date: x,
        day: weekNames[dayCount % 7]
      }
      dayCount++;

      if (fullDate.day == 'Sunday' && fullDate.date == 1) {
        console.count(console.log(fullDate));
      }
    }
  }
}

function limit(currentYear, currentMonth) {
  if (isLeapYear(currentYear))
    return (monthLengthsL[currentMonth])
  else
    return (monthLengthsN[currentMonth])
}

function isLeapYear(year) {
  if (year % 400 === 0)
    return true
  else if (year % 100 === 0)
    return false
  else if (year % 4 === 0)
    return true
  else
    return false
}