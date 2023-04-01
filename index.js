
// ------------------------------- Global function ----------------------------------


function checking(x) {
    var ret;
    if (x) {
        if (isNaN(x) || !x.trim()) {
            ret = false;
        }
        else if (x < 0) {
            ret = false;
        }
        else if (x % 1 != 0) {
            ret = false    
        }
        else {
            ret = true;
        }
    }
    else {
        ret = false;
    }
    return ret;
}


// ------------------------------- Task 1 ----------------------------------


// var x = 0;
// var y = 0;
// var textTask1 = "";

// x = prompt('Введи первое число');
// y = prompt('Введи второе число');

// function calculation(x, y) {
//     var res;
//     if (x > y) {
//         res = 1;
//     }
//     else if (x < y) {
//         res = -1;
//     }
//     else {
//         res = 0
//     }
//     return res
// }

// if (!checking(x) || !checking(y)) {
//     textTask1 += "<h2>" + "Что-то пошло не так, попробуйте еще раз \n🥺!!Error!!" + "</h2 > ";
// }
// else {
//     textTask1 += "<p>" + "Первое значение " + x + "  " + "<br>" + "Второе значение" + "  " + y + "  " + "<br>" + "Получилось :" + "  " + (calculation(x, y)) + "</p>";
// }

// document.getElementById('task1').innerHTML += text;


// ------------------------------- Task 2 ----------------------------------


// var nums = 0;
// var textTask2 = "";

// nums = prompt("Введите число");

// function factorial(nums) {
//     if (nums === 0) {
//         return 1;
//     }
//     return nums * factorial(nums - 1);
// }

// if (!checking(nums)) {
//     textTask2 += "<h2>" + "Что-то пошло не так, попробуйте еще раз \n🥺!!Error!!" + "</h2 > ";
// }
// else {
//     textTask2 = "<p>" + "Факториал числа" + " " + nums + "<br>" + " Будет: " + " " + factorial(nums) + "</p>";
// }

// document.getElementById('task2').innerHTML += textTask2;


// ------------------------------- Task 3 ----------------------------------


// var one = 0;
// var two = 0;
// var three = 0;
// var textTask3 = "";

// one = prompt('Введите первое число');
// two = prompt('Введите второе число');
// three = prompt('Введите третье число');


// function createNumber() {
//     let sum = [];
//     let sumNum = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         sum += parseInt(arguments[i]);
//     }
//     sumNum = parseInt(sum)
//     console.log(typeof(sumNum)) // Это ЧИСЛО и проверяла нолями
//     return sumNum;
// }

// if (!checking(one) || !checking(two) || !checking(three)) {
//     textTask3 += "<h2>" + "Что-то пошло не так, попробуйте еще раз \n🥺!!Error!!" + "</h2 > ";
// }
// else {
//     textTask3 += "<p>" + "Вышло число: " + createNumber(one, two, three) + "</p>";
// }

// document.getElementById('task3').innerHTML += textTask3;


// ------------------------------- Task 4 ----------------------------------


// var a = 0;
// var b = 0;
// var textTask4 = "";

// a = prompt("Введи длину прямоугольника (целое число)"); // 0 — целое число
// b = prompt("Введите ширину прямоугольника (целое число)");

// function square(x, y) {

//     let squareArea = 0;

//     if (x == 0) {
//         squareArea = y * y;
//     }
//     else if (y == 0) {
//         squareArea = x * x;
//     }
//     else {
//         squareArea = x * y;
//     }
//     return squareArea;
// }

// if (!checking(a) || !checking(b)) {
//     textTask4 += "<h2>" + "Что-то пошло не так, попробуйте еще раз \n🥺!!Error!!" + "</h2 > ";
// }
// else {
//     textTask4 += "<p>" + "Площадь прямоугольника будет: " + " " + square(a, b) + "</p>";
// }

// document.getElementById('task4').innerHTML += textTask4;


// ------------------------------- Task 5 ----------------------------------



// function perfect













// var number = 0;

// var textTask5 = "";

// number = prompt('Введите число');

// function isPerfect(number) {

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
//             document.getElementById('task5').innerHTML += "<h2>" + number + "</h2>" + "</br>" + "<p>" + "Это Совершенное число!" + "</p>"
//             :
//             document.getElementById('task5').innerHTML += "<h2>" +  number + "  " + "Это НЕ Совершенное число!"+"</h2>"
//     }
// }
// isPerfect(number);


// function isPerfect(number) {

//     var temp = 1;
//     for (var i = 2; i <= number / 2; i++) {

//         if (number % i === 0) temp += i;
//     }
//     if (temp === number && temp !== 0) {
//         return true
//     }
//     else {
//         return false;
//     }
    
// }

// var numberU = 0;

// numberU = prompt('Введите число');

// if (!checking(numberU) || numberU == 0) {
//     task5.innerHTML += "<h2>" + "Что-то пошло не так, попробуйте еще раз \n🥺!!Error!!" + "</h2 > ";
// }
// else if (isPerfect(numberU) && ) {
//     task5.innerHTML = numberU + "Это Совершенное число!";
// } else {
//     task5.innerHTML = numberU + "Это НЕ Совершенное число!";
// }


// document.getElementById('task5').innerHTML += textTask5;
//

// console.log(isPerfect(28));



// function IsPerfect(number) {

//     var temp = 0;
//     for (var i = 1; i <= number / 2; i++) {

//         if (number % i === 0) temp += i;
//     }
//     if (temp === number && temp !== 0) {
//         return true
//     }
//     else {
//         return false;
//     }
    
// }

// numberU = prompt('Введите число');

// if (!checking(numberU) || numberU == 0) {
//     task5.innerHTML += "<h2>" + "Что-то пошло не так, попробуйте еще раз \n🥺!!Error!!" + "</h2 > ";
//     if (IsPerfect(numberU)) {
//         task5.innerHTML = "Это Совершенное число!"
//     } else {
//         task5.innerHTML = "Это НЕ Совершенное число"
//     }
// }

// console.log(IsPerfect(28));


numberU = 0;

numberU = prompt('Введите число');

function perfectNumber(num) {
    let sums = 0 
    let text = ""
    let reminder;
    for (let i = 1; i < num - 1; i++){
        reminder = num % i;
        if (reminder === 0) {
            sums += i;
        }
    }
    
    if (!checking(num) || num == 0) {
        text = "<h2>" + "Что-то пошло не так, попробуйте еще раз \n🥺!!Error!!" + "</h2 > ";
    } else if (num === sums) {
        text = " Это Совершенное число!"
    } else {
        text = "Это НЕ Совершенное число!"
    }
}
task5.innerHTML = perfectNumber(numberU);




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

// var hour = +prompt("Введичите час");
// var minut = +prompt("Введичите минуты");
// var second = +prompt("Введичите секунды");

// function timeStr(hour, minut, second) {

    
//     if ((isNaN(hour)) || (isNaN(minut)) || (isNaN(second))) {
        
//         document.getElementById('task7').innerHTML = "<h2>" + "Вы ввели НЕ число !!Error!!" + "</h2>";
//     }
//     else if ((hour % 1 != 0) || (minut % 1 != 0) || (second % 1 != 0)) {
        
//         document.getElementById('task7').innerHTML = "<h2>" + "Вы ввели НЕ целое число !!Error!!" + "</h2>";
//     }
//     else if (((hour < 0)) || ((minut < 0)) || ((second < 0))) {

//         document.getElementById('task7').innerHTML = "<h2>" + "Вы ввели отрицательное число !!Error!!" + "</h2>";
//     }
//     else if ((hour == " ") || (minut == " ") || (second == " ")) {
        
//         document.getElementById('task7').innerHTML = "<h2>" + "Вы НЕ ввели число или число равняется нулю !!Error!!" + "</h2>";
//     }
//     else {
    
//         if (second == undefined) {
//             let str = `${hour}:${minut}:00`;
//             return str;
//         }
//         else if (minut == undefined) {
//             let str = `${hour}:00:${second}`;
//             return str;
//         }
//         else {
//             let arr = [hour, minut, second];
//             let str = arr.join(':');
//             return str;
//         }
//     }
// }
// document.getElementById('task7').innerHTML = "<h2>"+timeStr(hour,minut,second)+"</h2>";


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

//         document.getElementById('task9').innerHTML = "<h2>" + "Вышло" + "\n" + hou.padStart(2, '0') + ":" + min.padStart(2, '0') + ":" + sec.padStart(2, '0')+"<h2>";
//     }
// }
//  form(secondsUser)


// ------------------------------- Task 10 ---------------------------------

// Для того чтобы было взаимодействие с HTML оставила как есть
// Если нужно то переделаю на alert


// var oneH = +prompt("Введичите сколько часов Первого времени");
// var oneM = +prompt("Введичите сколько минут Первого времени");
// var oneS = +prompt("Введичите сколько секунд Первого времени");

// var twoH = +prompt("Введичите сколько часов Второго времени");
// var twoM = +prompt("Введичите сколько минут Второго времени");
// var twoS = +prompt("Введичите сколько секунд Второго времени");


// if ((isNaN(oneH)) || (isNaN(oneM)) || (isNaN(oneS)) || (isNaN(twoH)) || (isNaN(twoM)) || (isNaN(twoS))) {
    
//     document.getElementById('task10').innerHTML = "<h2>" + "Вы ввели НЕ число !!Error!!" + "</h2>";
// }
// else if ((oneH % 1 != 0) || (oneM % 1 != 0) || (oneS % 1 != 0) || (twoH % 1 != 0) || (twoM % 1 != 0) || (twoS % 1 != 0)) {
    
//     document.getElementById('task10').innerHTML = "<h2>" + "Вы ввели НЕ целое число !!Error!!" + "</h2>";
// }
// else if ((oneH < 0) || (oneM < 0) || (oneS < 0) || (twoH < 0) || (twoM < 0) || (twoS < 0)) {

//     document.getElementById('task10').innerHTML = "<h2>" + "Вы ввели отрицательное число !!Error!!" + "</h2>";
// }
// else {

//     function decoding(sec) {
//         let se = (sec % 60).toString();
//         let mi = Math.floor(sec / 60 % 60).toString();
//         let ho = Math.floor(sec / 60 / 60 % 60).toString();
//         return  (ho.padStart(2, '0') + ":" + mi.padStart(2, '0') + ":" + se.padStart(2, '0'))
//     }

//     function reduction(h, m, s) {
//         var secEnd = (h * 3600) + (m * 60) + s
//         return secEnd
//     }

//     var c = reduction(oneH, oneM, oneS);
//     var d = reduction(twoH, twoM, twoS);


//     function difference(c, d) {

//         if (c > d) {
//             var different = c - d;
//         }
//         else if (c < d) {
//             different = d - c;
//         }

        
//         var res = decoding(different);

//     return res
//     }

//     var oneTime = decoding(c);
//     var twoTime = decoding(d);

//     document.getElementById('task10').innerHTML = "<h2>"+ "Разница между:" +" "+ oneTime +" и " + twoTime + " "+ "Будет:" +" "+ difference(c, d) + "</h2>";
// }
