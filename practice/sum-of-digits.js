// Задача: написать функцию, которая принимает целое число и возвращает сумму всех его цифр

function sumOfDigits(n) {
  let str = String(Math.abs(n)) // преобразуем число n в строку и убираем минус
  let sum = 0; //вводим переменную для накопления суммы
    for (let i = 0; i < str.length; i++) { // перебираем каждый символ строки с помощью цикла
      sum = sum + Number(str[i]); // преобразуем символ в число и добавляем к сумме
}
  return sum;
}

// Проверка
console.log(sumOfDigits(123));  // 6
console.log(sumOfDigits(-123)); // 6
