// CodeWars: BMI Calculator (8kyu)
// Ссылка: https://www.codewars.com/kata/57a429e253ba3381850000fb
// Дата: 15.06.2026

function bmi(weight, height) {
    let result = weight / (height ** 2);
    
    if (result <= 18.5) {
        return "Underweight";
    }
    if (result <= 25.0) {
        return "Normal";
    }
    if (result <= 30.0) {
        return "Overweight";
    }
    if (result > 30) {
        return "Obese";
    }
}

// Проверка
console.log(bmi(50, 1.6));   // Normal
console.log(bmi(40, 1.6));   // Underweight
console.log(bmi(80, 1.7));   // Overweight
console.log(bmi(100, 1.7));  // Obese
