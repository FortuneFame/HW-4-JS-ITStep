
// ------------------------------- Task 1 ----------------------------------

// var x = + prompt('Введи первое число');
// var y = + prompt('Введи второе число');

// function calculation(x, y) {

//     if ((isNaN(x)) || (isNaN(y))) {

//         document.getElementById('task1').innerHTML = "<h2>"+"Вы ввели НЕ число !!Error!!"+"</h2>";
//     }
//     else if ((x % 1 != 0) || (y % 1 != 0)) {

//         document.getElementById('task1').innerHTML = "<h2>"+"Вы ввели НЕ целое число !!Error!!"+"</h2>";
//     }
//     else if ((x < 0) || (y < 0)) {

//         document.getElementById('task1').innerHTML = "<h2>"+"Вы ввели отрицательное число !!Error!!"+"</h2>";
//     }
//     else if ((x == " ") || (y    == " ")) {
        
//         document.getElementById('task1').innerHTML = "<h2>"+"Вы НЕ ввели число или число равняется нулю !!Error!!"+"</h2>";
//     }
//     else {
//         if (x < y) {
//             document.getElementById('task1').innerHTML = "<h2>" + "Так как " + x + "  " + "<" + "  " + y + "  " + "Получилось :" + "  " + "-1" + "</h2>";
//         }
//         else if (x > y) {
//             document.getElementById('task1').innerHTML = "<h2>" + "Так как " + x + "  " + ">" + "  " + y + "  " + "Получилось :" + "  " + "1" + "</h2>";
//         }
//         else {
//             document.getElementById('task1').innerHTML = "<h2>" + "Так как " + x + "  " + "=" + "  " + y + "  " + "Получилось :" + "  " + "0" + "</h2>";
//         }
//     }
// }

// calculation(x, y);

// ------------------------------- Task 2 ----------------------------------

// var num = +prompt("Введите число");

// function factorial(num) {

//     if (isNaN(num)) {
//         document.getElementById('task2').innerHTML = "<h2>" + "Вы ввели НЕ число !!Error!!" + "</h2>";
//     }
//     else if (num % 1 != 0) {
//         document.getElementById('task2').innerHTML = "<h2>" + "Вы ввели НЕ целое число !!Error!!" + "</h2>";
//     }
//     else if (num < 0) {
//         document.getElementById('task2').innerHTML = "<h2>" + "Вы ввели отрицательное число !!Error!!" + "</h2>";
//     }
//     else {
//         if (num === 0) {
//             return 1;
//         }
//         return num * factorial(num - 1);
//     }
// }

// document.getElementById('task2').innerHTML = "<h2>" + "Факториал числа" + " " + num + " Будет: " + " " + factorial(num) + "</h2>"


// ------------------------------- Task 3 ----------------------------------

// var one = + prompt('Введите первое число');
// var two = + prompt('Введите второе число');
// var three = + prompt('Введите третье число');


// function num(one, two, three) {

//     if ((isNaN(one)) || (isNaN(two)) || (isNaN(three))) {
        
//         document.getElementById('task3').innerHTML = "<h2>"+"Вы ввели НЕ число !!Error!!"+"</h2>";
//     }
//     else if ((one % 1 != 0) || (two % 1 != 0) || (three % 1 != 0)) {
        
//         document.getElementById('task3').innerHTML = "<h2>"+"Вы ввели НЕ целое число !!Error!!"+"</h2>";
//     }
//     else if (((one < 0)) || ((two < 0)) || ((three < 0))) {

//         document.getElementById('task3').innerHTML = "<h2>"+"Вы ввели отрицательное число !!Error!!"+"</h2>";
//     }
//     else if ((one == " ") || (two == " ") || (three == " ")) {
        
//         document.getElementById('task3').innerHTML = "<h2>"+"Вы НЕ ввели число или число равняется нулю !!Error!!"+"</h2>";
//     }
//     else {
//         return document.getElementById('task3').innerHTML = "<h2>" + "Вышло число: " + " " + one + two + three + "</h2>";
//     }
// }

// num(one, two, three);

// ------------------------------- Task 4 ----------------------------------

// var a = + prompt("Введи длину прямоугольника");
// var b = + prompt("Введите ширину прямоугольника");

// function multiplication(a, b) {

//     if ((isNaN(a)) || (isNaN(b))) {

//         document.getElementById('task4').innerHTML = "<h2>"+"Вы ввели НЕ число !!Error!!"+"</h2>";
//     }
//     else if ((a % 1 != 0) || (b % 1 != 0)) {

//         document.getElementById('task4').innerHTML = "<h2>"+"Вы ввели НЕ целое число !!Error!!"+"</h2>";
//     }
//     else if ((a < 0) || (b < 0)) {

//         document.getElementById('task4').innerHTML = "<h2>"+"Вы ввели отрицательное число !!Error!!"+"</h2>";
//     }
//     else if ((a == 0) || (b == 0) || (a == null) || (b == null) || (a == " ") || (b == " ")) {

//         if ((a == 0) || (a == null) || (a == " ")) {

//             return document.getElementById('task4').innerHTML = "<h2>" + "Площадь равна: " + (b * b) + "</h2>";
//         }
//         else if ((b == 0) || (b == null) || (b == " ")) {

//             return document.getElementById('task4').innerHTML = "<h2>" + "Площадь равна: " + (a * a) + "</h2>";
//         }
//     }
//     else {
    
//         return document.getElementById('task4').innerHTML = "<h2>" + "Площадь равна: " + " " + (a * b) + "</h2>";
//     }
// }

// multiplication(a, b);


// ------------------------------- Task 5 ----------------------------------

// var number = +prompt('Введите число');

// function isPerfect(number) {

//     if (isNaN(number)) {
//         document.getElementById('task5').innerHTML = "<h2>"+"Вы ввели НЕ число !!Error!!"+"</h2>";
//     }
//     else if (number % 1 != 0) {
//         document.getElementById('task5').innerHTML = "<h2>"+"Вы ввели НЕ целое число !!Error!!"+"</h2>";
//     }
//     else if (number < 0) {
//         document.getElementById('task5').innerHTML = "<h2>"+"Вы ввели отрицательное число !!Error!!"+"</h2>";
//     }
//     else if (number == " ") {
//         document.getElementById('task5').innerHTML = "<h2>"+"Вы НЕ ввели число или число равняется нулю !!Error!!"+"</h2>";
//     }
//     else {
//         var temp = 0;
//         for (var i = 1; i <= number / 2; i++) {
//             if (number % i === 0) temp += i;
//         }

//         (temp === number && temp !== 0)
//             ?
//             document.getElementById('task5').innerHTML = "<h2>" +  number + "  " + "Это Совершенное число!"+"</h2>"
//             :
//             document.getElementById('task5').innerHTML = "<h2>" +  number + "  " + "Это НЕ Совершенное число!"+"</h2>"
//     }
// }
// isPerfect(number);

// ------------------------------- Task 6 ----------------------------------

// var start = + prompt(`Введите начало диапазона больше нуля`);
// var end = + prompt(`Введите конец диапазона`);

// function numUser(start, end) {

//     let result = [];

//     if (start > end) {
//         let turn = start;
//         start = end;
//         end = turn;
//     }
//     if ((isNaN(start)) || (isNaN(end))) {

//         document.getElementById('task6').innerHTML = "<h2>"+"Вы ввели НЕ число !!Error!!"+"</h2>";
//     }
//     else if ((start % 1 != 0) || (end % 1 != 0)) {

//         document.getElementById('task6').innerHTML = "<h2>"+"Вы ввели НЕ целое число !!Error!!"+"</h2>";
//     }
//     else if ((start < 0) || (end < 0)) {

//         document.getElementById('task6').innerHTML = "<h2>"+"Вы ввели отрицательное число !!Error!!"+"</h2>";
//     }
//     else if ((start == " ") || (end == " ")) {
        
//         document.getElementById('task6').innerHTML = "<h2>"+"Вы НЕ ввели число или число равняется нулю !!Error!!"+"</h2>";
//     }
//     else {
//         for (let i = start; i < end; i++) {
//         sum = 0;
//             for (let n = 1; n <= i / 2; n++) {
//                 if (i % n === 0) sum += n;
//             }
//             if (i === sum) result.push(i);
//         }
//         return document.getElementById('task6').innerHTML = "<h2>" + "Все Совершенные числа из этого диапазона:  " + result + "</h2>";
//     }
    
// }

// numUser(start, end)

// ------------------------------- Task 7 ----------------------------------

// Написать функцию, которая принимает время (часы, мину-
// ты, секунды) и выводит его на экран в формате «чч:мм:сс»
// Если при вызове функции минуты и/или секунды не были
// переданы, то выводить их как 00.

// var hour = +prompt("Введичите час");
// var minut = +prompt("Введичите минуты");
// var second = +prompt("Введичите секунды");

// function time(h) {
//   return function minutes(m) {
//     return function seconds(s) {
//       return `${h}:${m}:${s}`
//     }
//   }
// }

// console.log(time(h));


// function timeStr(h,m,s){
//     if ( s == undefined) {
//         let str = `${h}:${m}:00`;
//         return str;
//     }
//     else if ( m == undefined) {
//         let str = `${h}:00:${0}`;
//         return str;
//     }
//     else {
//         let arr = [h, m, s];
//         let str = arr.join(':');
//         return str;
//     }
// }
// alert(timeStr(h,m,s));


// ------------------------------- Task 8 ----------------------------------

// var h = +prompt("Введичите час");
// var m = +prompt("Введичите минуты");
// var s = +prompt("Введичите секунды");

// function seconds(h, m, s) {

//     if ((isNaN(h)) || (isNaN(m)) || (isNaN(s))) {

//         document.getElementById('task8').innerHTML = "<h2>"+"Вы ввели НЕ число !!Error!!"+"</h2>";
//     }
//     else if ((h % 1 != 0) || (m % 1 != 0) || (s % 1 != 0)) {
        
//         document.getElementById('task8').innerHTML = "<h2>"+"Вы ввели НЕ целое число !!Error!!"+"</h2>";
//     }
//     else if (((h < 0)) || ((m < 0)) || ((s < 0))) {

//         document.getElementById('task8').innerHTML = "<h2>"+"Вы ввели отрицательное число !!Error!!"+"</h2>";
//     }
//     else {
//         var seconds = (h * 3600) + (m * 60) + s
//         document.getElementById('task8').innerHTML = "<h2>" + "Вышло: " + " " + seconds + " " + " секунд"+ "</h2>"
//     }
// }

// seconds(h, m, s)

// ------------------------------- Task 9 ----------------------------------

// var secondsUser = + prompt('Введите секунды')

// function form(secondsUser) {
 
//     if (isNaN(secondsUser)) {
//         document.getElementById('task9').innerHTML = "<h2>"+"Вы ввели НЕ число !!Error!!"+"</h2>";
//     }
//     else if (secondsUser % 1 != 0) {
//         document.getElementById('task9').innerHTML = "<h2>"+"Вы ввели НЕ целое число !!Error!!"+"</h2>";
//     }
//     else if (secondsUser < 0) {
//         document.getElementById('task9').innerHTML = "<h2>"+"Вы ввели отрицательное число !!Error!!"+"</h2>";
//     }
//     else if (secondsUser == " ") {
//         document.getElementById('task9').innerHTML = "<h2>"+"Вы НЕ ввели число или число равняется нулю !!Error!!"+"</h2>";
//     }
//     else {
//         let sec = (secondsUser % 60).toString();
//         let min = Math.floor(secondsUser / 60 % 60).toString();
//         let hou = Math.floor(secondsUser / 60 / 60 % 60).toString();

//         document.getElementById('task9').innerHTML = "Вышло" + "\n" + hou.padStart(2, '0') + ":" + min.padStart(2, '0') + ":" + sec.padStart(2, '0');
//     }
// }
//  form(secondsUser)


// ------------------------------- Task 10 ---------------------------------


// Написать функцию, которая считает разницу между време-
// нами. Функция принимает 6 параметров, которые описы-
// вают 2 времни, и возвращает результат в виде строки
// «чч:мм:сс». При выполнении задания используйте
// функции из предыдущих 2-х заданий: сначала оба
// времени переведите в секунды, узнайте разницу в
// секундах, а потом разницу переведите обратно в
// «чч:мм:сс».


