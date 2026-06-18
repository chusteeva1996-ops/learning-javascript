// CodeWars: Reversed Strings (8kyu)
// Задача: перевернуть строку
// Ссылка: https://www.codewars.com/kata/5168bb5dfe9a00b126000018
// Дата: 18.06.2026

// МОЁ РЕШЕНИЕ (через цикл)
function solution(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

// Проверка
console.log(solution('hello'));   // 'olleh'
console.log(solution('world'));   // 'dlrow'
console.log(solution(''));        // ''
console.log(solution('12345'));   // '54321'
