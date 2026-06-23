// CodeWars: What day? (8kyu)
// Задача: вернуть день недели по числу от 1 до 7
// Ссылка: https://www.codewars.com/kata/59dd3c54f7d2cbcf2f0000a4
// Дата: 23.06.2026

function whatday(num) { 
  if (num === 1) {
    return "Sunday";
  }
  if (num === 2) {
    return "Monday";
  }
  if (num === 3) {
    return "Tuesday";
  }
  if (num === 4) {
    return "Wednesday";
  }
  if (num === 5) {
    return "Thursday";
  }
  if (num === 6) {
    return "Friday";
  }
  if (num === 7) {
    return "Saturday";
  }
  return "Wrong, please enter a number between 1 and 7"
}

// Проверка
console.log(whatday(1)); // "Sunday"
console.log(whatday(3)); // "Tuesday"
console.log(whatday(7)); // "Saturday"
console.log(whatday(9)); // "Wrong, please enter a number between 1 and 7"
