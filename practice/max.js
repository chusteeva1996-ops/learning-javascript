// Задача: найти большее из двух чисел

function max(a, b) {
    let num = Number(a);      // преобразуем a в число
    let num_1 = Number(b);    // преобразуем b в число
    
    if (num > num_1) {
        return num;           // возвращаем большее число
    } else {
        return num_1;         // возвращаем большее число
    }
}

// Проверка
console.log(max(5, 10));    // 10
console.log(max(100, 30));  // 100
console.log(max(7, 7));     // 7
