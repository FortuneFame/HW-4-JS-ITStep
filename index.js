//       Пути к обьектам HTML

// var task1 = document.getElementById('task1');
// var task2 = document.getElementById('task2');
// var task3 = document.getElementById('task3');
// var task4 = document.getElementById('task4');
// var task5 = document.getElementById('task5');
// var task6 = document.getElementById('task6');
// var task7 = document.getElementById('task7');
// var task8 = document.getElementById('task8');
// var task9 = document.getElementById('task9');
// var task10 = document.getElementById('task10');

//

// ------------------------------- Task 1 ----------------------------------

// Написать функцию, которая принимает 2 числа
// и возвра - щает - 1,
// если первое меньше, чем второе;
// 1 – если первоебольше, чем второе;
// и 0 – если числа равны.

// var x = + prompt('Введи первое число');
// var y = + prompt('Введи второе число');

// function calculation(x, y) {

//     if (x < y) {
//         return result = -1;
//     }
//     else if (x > y) {
//         return result = 1;
//     }
//     else {
//         return result = 0;
//     }

// }

// alert(calculation(x, y));


// ------------------------------- Task 2 ----------------------------------

// Написать функцию, которая вычисляет факториал переданного ей числа.

// var num = 4;

// if (num != 0) {
//     function factorial(n) {

//         return (n != 1) ? n * factorial(n - 1) : 1;
        
//     }
// }
// else {
//     alert('Произашла ошибка !!ERROR!!')
// }

// alert(factorial(num))


// ------------------------------- Task 3 ----------------------------------

// Написать функцию, которая принимает три отдельные
// цифры и превращает их в одно число.
// Например: цифры 1, 4, 9 превратятся в число 149.

// var one = "" + prompt('Введите первое число');
// var two = "" + prompt('Введите второе число');
// var three = "" + prompt('Введите третье число');
    
// function num(one, two, three) {
//     return one + two + three;
// }

// alert('Получилось число:  ' +  num(one, two, three))

// ------------------------------- Task 4 ----------------------------------


// Написать функцию, которая принимает длину и ширину
// прямоугольника и вычисляет его площадь.
// Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.

// var a = + prompt("Введи длину прямоугольника");
// var b = + prompt("Введите ширину прямоугольника");

// function multiplication(a, b) {
//     return a * b;
// }
// alert("Площадь равна: " + multiplication(a,b))


// ------------------------------- Task 5 ----------------------------------

// Написать функцию, которая проверяет, является ли пере -
// данное ей число совершенным.Совершенное число – эточисло,
// равное сумме всех своих собственных делителей.

// var number = +prompt('Введите число');

function isPerfect(number) {

    if (isNaN(number)) {
        console.log("!!Error!!")
    }
    else {
        var temp = 0;
        for (var i = 1; i <= number / 2; i++) {
            if (number % i === 0) temp += i;
        }

        (temp === number && temp !== 0)
            ?
            console.log("Это Совершенное число!")
            :
            console.log("Это НЕ Совершенное число!");
    }
}
// isPerfect(number);

// ------------------------------- Task 6 ----------------------------------

var min = + prompt('Введите минимальное число');
var max = + prompt('Введите максимальное число');

function getPerfect(min, max) {
    let result;
    for (let i = min; i < max; i++) {
    }
}

// function getPerfect(a, b) {
//   let result = [];
//   for (let i = a; i < b; i++) {
//     sum = 0;
//     for (let n = 1; n <= i/2; n++) {
//       if (i % n === 0) sum += n;
//     }
//     if (i === sum) result.push(i);
//   }
//   return result;
// }
 
// console.log(getPerfect(1, 1000));

// Написать функцию, которая принимает минимальное и
// максимальное значения для диапазона, и выводит
// толькоте числа из диапазона, которые являются
// совершенными.Используйте написанную ранее функцию,
// чтобы узнавать, совершенное число или нет.





// ------------------------------- Task 7 ----------------------------------



// ------------------------------- Task 8 ----------------------------------



// ------------------------------- Task 9 ----------------------------------



// ------------------------------- Task 10 ---------------------------------