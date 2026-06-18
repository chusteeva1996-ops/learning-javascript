// CodeWars: Who ate the cookie? (8kyu)
// Задача: определить, кто съел печенье, по типу входных данных
// Ссылка: https://www.codewars.com/kata/55a996e0e8520afab9000055
// Дата: 18.06.2026

function cookie(x) {
    if (typeof x === 'string') {
        return "Who ate the last cookie? It was Zach!";
    }
    if (typeof x === 'number') {
        return "Who ate the last cookie? It was Monica!";
    }
    return "Who ate the last cookie? It was the dog!";
}

// Проверка
console.log(cookie("hello"));   // "Who ate the last cookie? It was Zach!"
console.log(cookie(42));        // "Who ate the last cookie? It was Monica!"
console.log(cookie(true));      // "Who ate the last cookie? It was the dog!"
console.log(cookie([]));        // "Who ate the last cookie? It was the dog!"
