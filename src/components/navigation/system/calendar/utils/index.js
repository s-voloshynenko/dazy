const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const months = ['January', 'February', 'March', 'April',
                'May', 'June', 'July', 'August', 'September',
                'October', 'November', 'December'];

export function calculateMonth (date) {
  let weeks = [];
  const currentDay = getCurrentDay(date);
  const month = date.getMonth();
  const year = date.getFullYear();

  const monthName = months[month];
  const firstDay = new Date(year, month, 1);
  const startingDay = firstDay.getDay();
  let monthLength = daysInMonth[month];
  let day = 1;

  /** Catch February */
  if (month == 1) {
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
      monthLength = 29;
    }
  }

  for (let i = 0; i < 9; i++) {
    let week = [];

    for (let j = 0; j <= 6; j++) {
      if (day <= monthLength && (i > 0 || j >= startingDay)) {
        week.push({ value: day, type: currentDay === day ? 1 : 0 });
        day++;
      } else {
        week.push('');
      }
    }

    weeks.push(week);

    if (day > monthLength) break;
  }

  return { monthName, weeks };
}

function getCurrentDay(date) {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  if (date.getMonth() === currentMonth && date.getFullYear() === currentYear) return currentDate.getDate();

  return 0;
}