// ------------------------------- Task 1 ----------------------------------

// var x = + prompt('Введи первое число');
// var y = + prompt('Введи второе число');

function calculation(x, y) {

    if ((isNaN(x)) || (isNaN(y))) {

        document.getElementById('task1').innerHTML = "<h2>"+"Вы ввели НЕ число !!Error!!"+"</h2>";
    }
    else if ((x % 1 != 0) || (y % 1 != 0)) {

        document.getElementById('task1').innerHTML = "<h2>"+"Вы ввели НЕ целое число !!Error!!"+"</h2>";
    }
    else if ((x < 0) || (y < 0)) {

        document.getElementById('task1').innerHTML = "<h2>"+"Вы ввели отрицательное число !!Error!!"+"</h2>";
    }
    else if ((x == " ") || (y    == " ")) {
        
        document.getElementById('task1').innerHTML = "<h2>"+"Вы НЕ ввели число или число равняется нулю !!Error!!"+"</h2>";
    }
    else {
        if (x < y) {
            document.getElementById('task1').innerHTML = "<h2>" + "Так как " + x + "  " + "<" + "  " + y + "  " + "Получилось :" + "  " + "-1" + "</h2>";
        }
        else if (x > y) {
            document.getElementById('task1').innerHTML = "<h2>" + "Так как " + x + "  " + ">" + "  " + y + "  " + "Получилось :" + "  " + "1" + "</h2>";
        }
        else {
            document.getElementById('task1').innerHTML = "<h2>" + "Так как " + x + "  " + "=" + "  " + y + "  " + "Получилось :" + "  " + "0" + "</h2>";
        }
    }
}

// calculation(x, y);

// ------------------------------- Task 2 ----------------------------------

// var nums = +prompt("Введите число");

function factorial(nums) {

    if (isNaN(nums)) {
        document.getElementById('task2').innerHTML = "<h2>" + "Вы ввели НЕ число !!Error!!" + "</h2>";
    }
    else if (nums % 1 != 0) {
        document.getElementById('task2').innerHTML = "<h2>" + "Вы ввели НЕ целое число !!Error!!" + "</h2>";
    }
    else if (nums < 0) {
        document.getElementById('task2').innerHTML = "<h2>" + "Вы ввели отрицательное число !!Error!!" + "</h2>";
    }
    else {
        if (nums === 0) {
            return 1;
        }
        return nums * factorial(nums - 1);
    }
}

// document.getElementById('task2').innerHTML = "<h2>" + "Факториал числа" + " " + nums + " Будет: " + " " + factorial(nums) + "</h2>"


// ------------------------------- Task 3 ----------------------------------

// var one = + prompt('Введите первое число');
// var two = + prompt('Введите второе число');
// var three = + prompt('Введите третье число');


function num(one, two, three) {

    if ((isNaN(one)) || (isNaN(two)) || (isNaN(three))) {
        
        document.getElementById('task3').innerHTML = "<h2>"+"Вы ввели НЕ число !!Error!!"+"</h2>";
    }
    else if ((one % 1 != 0) || (two % 1 != 0) || (three % 1 != 0)) {
        
        document.getElementById('task3').innerHTML = "<h2>"+"Вы ввели НЕ целое число !!Error!!"+"</h2>";
    }
    else if (((one < 0)) || ((two < 0)) || ((three < 0))) {

        document.getElementById('task3').innerHTML = "<h2>"+"Вы ввели отрицательное число !!Error!!"+"</h2>";
    }
    else if ((one == " ") || (two == " ") || (three == " ")) {
        
        document.getElementById('task3').innerHTML = "<h2>"+"Вы НЕ ввели число или число равняется нулю !!Error!!"+"</h2>";
    }
    else {
        return document.getElementById('task3').innerHTML = "<h2>" + "Вышло число: " + " " + one + two + three + "</h2>";
    }
}

// num(one, two, three);

// ------------------------------- Task 4 ----------------------------------

// var a = + prompt("Введи длину прямоугольника");
// var b = + prompt("Введите ширину прямоугольника");

function multiplication(a, b) {

    if ((isNaN(a)) || (isNaN(b))) {

        document.getElementById('task4').innerHTML = "<h2>"+"Вы ввели НЕ число !!Error!!"+"</h2>";
    }
    else if ((a % 1 != 0) || (b % 1 != 0)) {

        document.getElementById('task4').innerHTML = "<h2>"+"Вы ввели НЕ целое число !!Error!!"+"</h2>";
    }
    else if ((a < 0) || (b < 0)) {

        document.getElementById('task4').innerHTML = "<h2>"+"Вы ввели отрицательное число !!Error!!"+"</h2>";
    }
    else if ((a == 0) || (b == 0) || (a == null) || (b == null) || (a == " ") || (b == " ")) {

        if ((a == 0) || (a == null) || (a == " ")) {

            return document.getElementById('task4').innerHTML = "<h2>" + "Площадь равна: " + (b * b) + "</h2>";
        }
        else if ((b == 0) || (b == null) || (b == " ")) {

            return document.getElementById('task4').innerHTML = "<h2>" + "Площадь равна: " + (a * a) + "</h2>";
        }
    }
    else {
    
        return document.getElementById('task4').innerHTML = "<h2>" + "Площадь равна: " + " " + (a * b) + "</h2>";
    }
}

// multiplication(a, b);


// ------------------------------- Task 5 ----------------------------------

// var number = +prompt('Введите число');

function isPerfect(number) {

    if (isNaN(number)) {
        document.getElementById('task5').innerHTML = "<h2>"+"Вы ввели НЕ число !!Error!!"+"</h2>";
    }
    else if (number % 1 != 0) {
        document.getElementById('task5').innerHTML = "<h2>"+"Вы ввели НЕ целое число !!Error!!"+"</h2>";
    }
    else if (number < 0) {
        document.getElementById('task5').innerHTML = "<h2>"+"Вы ввели отрицательное число !!Error!!"+"</h2>";
    }
    else if (number == " ") {
        document.getElementById('task5').innerHTML = "<h2>"+"Вы НЕ ввели число или число равняется нулю !!Error!!"+"</h2>";
    }
    else {
        var temp = 0;
        for (var i = 1; i <= number / 2; i++) {
            if (number % i === 0) temp += i;
        }

        (temp === number && temp !== 0)
            ?
            document.getElementById('task5').innerHTML = "<h2>" +  number + "  " + "Это Совершенное число!"+"</h2>"
            :
            document.getElementById('task5').innerHTML = "<h2>" +  number + "  " + "Это НЕ Совершенное число!"+"</h2>"
    }
}
// isPerfect(number);

// ------------------------------- Task 6 ----------------------------------

// var start = + prompt(`Введите начало диапазона больше нуля`);
// var end = + prompt(`Введите конец диапазона`);

function numUser(start, end) {

    let result = [];

    if (start > end) {
        let turn = start;
        start = end;
        end = turn;
    }
    if ((isNaN(start)) || (isNaN(end))) {

        document.getElementById('task6').innerHTML = "<h2>"+"Вы ввели НЕ число !!Error!!"+"</h2>";
    }
    else if ((start % 1 != 0) || (end % 1 != 0)) {

        document.getElementById('task6').innerHTML = "<h2>"+"Вы ввели НЕ целое число !!Error!!"+"</h2>";
    }
    else if ((start < 0) || (end < 0)) {

        document.getElementById('task6').innerHTML = "<h2>"+"Вы ввели отрицательное число !!Error!!"+"</h2>";
    }
    else if ((start == " ") || (end == " ")) {
        
        document.getElementById('task6').innerHTML = "<h2>"+"Вы НЕ ввели число или число равняется нулю !!Error!!"+"</h2>";
    }
    else {
        for (let i = start; i < end; i++) {
        sum = 0;
            for (let n = 1; n <= i / 2; n++) {
                if (i % n === 0) sum += n;
            }
            if (i === sum) result.push(i);
        }
        return document.getElementById('task6').innerHTML = "<h2>" + "Все Совершенные числа из этого диапазона:  " + result + "</h2>";
    }
    
}

// numUser(start, end)

// ------------------------------- Task 7 ----------------------------------

// var hour = +prompt("Введичите час");
// var minut = +prompt("Введичите минуты");
// var second = +prompt("Введичите секунды");

function timeStr(hour, minut, second) {

    
    if ((isNaN(hour)) || (isNaN(minut)) || (isNaN(second))) {
        
        document.getElementById('task7').innerHTML = "<h2>" + "Вы ввели НЕ число !!Error!!" + "</h2>";
    }
    else if ((hour % 1 != 0) || (minut % 1 != 0) || (second % 1 != 0)) {
        
        document.getElementById('task7').innerHTML = "<h2>" + "Вы ввели НЕ целое число !!Error!!" + "</h2>";
    }
    else if (((hour < 0)) || ((minut < 0)) || ((second < 0))) {

        document.getElementById('task7').innerHTML = "<h2>" + "Вы ввели отрицательное число !!Error!!" + "</h2>";
    }
    else if ((hour == " ") || (minut == " ") || (second == " ")) {
        
        document.getElementById('task7').innerHTML = "<h2>" + "Вы НЕ ввели число или число равняется нулю !!Error!!" + "</h2>";
    }
    else {
    
        if (second == undefined) {
            let str = `${hour}:${minut}:00`;
            return str;
        }
        else if (minut == undefined) {
            let str = `${hour}:00:${second}`;
            return str;
        }
        else {
            let arr = [hour, minut, second];
            let str = arr.join(':');
            return str;
        }
    }
}
// document.getElementById('task7').innerHTML = "<h2>"+timeStr(hour,minut,second)+"</h2>";


// ------------------------------- Task 8 ----------------------------------

// var h = +prompt("Введичите час");
// var m = +prompt("Введичите минуты");
// var s = +prompt("Введичите секунды");

function seconds(h, m, s) {

    if ((isNaN(h)) || (isNaN(m)) || (isNaN(s))) {

        document.getElementById('task8').innerHTML = "<h2>"+"Вы ввели НЕ число !!Error!!"+"</h2>";
    }
    else if ((h % 1 != 0) || (m % 1 != 0) || (s % 1 != 0)) {
        
        document.getElementById('task8').innerHTML = "<h2>"+"Вы ввели НЕ целое число !!Error!!"+"</h2>";
    }
    else if (((h < 0)) || ((m < 0)) || ((s < 0))) {

        document.getElementById('task8').innerHTML = "<h2>"+"Вы ввели отрицательное число !!Error!!"+"</h2>";
    }
    else {
        var seconds = (h * 3600) + (m * 60) + s
        document.getElementById('task8').innerHTML = "<h2>" + "Вышло: " + " " + seconds + " " + " секунд"+ "</h2>"
    }
}


// seconds(h, m, s)

// ------------------------------- Task 9 ----------------------------------

// var secondsUser = + prompt('Введите секунды')

function form(secondsUser) {
 
    if (isNaN(secondsUser)) {
        document.getElementById('task9').innerHTML = "<h2>"+"Вы ввели НЕ число !!Error!!"+"</h2>";
    }
    else if (secondsUser % 1 != 0) {
        document.getElementById('task9').innerHTML = "<h2>"+"Вы ввели НЕ целое число !!Error!!"+"</h2>";
    }
    else if (secondsUser < 0) {
        document.getElementById('task9').innerHTML = "<h2>"+"Вы ввели отрицательное число !!Error!!"+"</h2>";
    }
    else if (secondsUser == " ") {
        document.getElementById('task9').innerHTML = "<h2>"+"Вы НЕ ввели число или число равняется нулю !!Error!!"+"</h2>";
    }
    else {
        let sec = (secondsUser % 60).toString();
        let min = Math.floor(secondsUser / 60 % 60).toString();
        let hou = Math.floor(secondsUser / 60 / 60 % 60).toString();

        document.getElementById('task9').innerHTML = "<h2>" + "Вышло" + "\n" + hou.padStart(2, '0') + ":" + min.padStart(2, '0') + ":" + sec.padStart(2, '0')+"<h2>";
    }
}
//  form(secondsUser)


// ------------------------------- Task 10 ---------------------------------

// Для того чтобы было взаимодействие с HTML оставила как есть
// Если нужно то переделаю на alert


var oneH = +prompt("Введичите сколько часов Первого времени");
var oneM = +prompt("Введичите сколько минут Первого времени");
var oneS = +prompt("Введичите сколько секунд Первого времени");

var twoH = +prompt("Введичите сколько часов Второго времени");
var twoM = +prompt("Введичите сколько минут Второго времени");
var twoS = +prompt("Введичите сколько секунд Второго времени");


if ((isNaN(oneH)) || (isNaN(oneM)) || (isNaN(oneS)) || (isNaN(twoH)) || (isNaN(twoM)) || (isNaN(twoS))) {
    
    document.getElementById('task10').innerHTML = "<h2>" + "Вы ввели НЕ число !!Error!!" + "</h2>";
}
else if ((oneH % 1 != 0) || (oneM % 1 != 0) || (oneS % 1 != 0) || (twoH % 1 != 0) || (twoM % 1 != 0) || (twoS % 1 != 0)) {
    
    document.getElementById('task10').innerHTML = "<h2>" + "Вы ввели НЕ целое число !!Error!!" + "</h2>";
}
else if ((oneH < 0) || (oneM < 0) || (oneS < 0) || (twoH < 0) || (twoM < 0) || (twoS < 0)) {

    document.getElementById('task10').innerHTML = "<h2>" + "Вы ввели отрицательное число !!Error!!" + "</h2>";
}
else {

    function decoding(sec) {
        let se = (sec % 60).toString();
        let mi = Math.floor(sec / 60 % 60).toString();
        let ho = Math.floor(sec / 60 / 60 % 60).toString();
        return  (ho.padStart(2, '0') + ":" + mi.padStart(2, '0') + ":" + se.padStart(2, '0'))
    }

    function reduction(h, m, s) {
        var secEnd = (h * 3600) + (m * 60) + s
        return secEnd
    }

    var c = reduction(oneH, oneM, oneS);
    var d = reduction(twoH, twoM, twoS);


    function difference(c, d) {

        if (c > d) {
            var different = c - d;
        }
        else if (c < d) {
            different = d - c;
        }

        
        var res = decoding(different);

    return res
    }

    var oneTime = decoding(c);
    var twoTime = decoding(d);

    document.getElementById('task10').innerHTML = "<h2>"+ "Разница между:" +" "+ oneTime +" и " + twoTime + " "+ "Будет:" +" "+ difference(c, d) + "</h2>";
}
