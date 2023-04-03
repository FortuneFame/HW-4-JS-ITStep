
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


function timeForm(h, m, s) {
    h = parseInt(h)
    m = parseInt(m)
    s = parseInt(s)
    return ((h < 10 ? "0" + h : h) + " : " + (m < 10 ? "0" + m : m) + " : " + (s < 10 ? "0" + s : s));
}


// ------------------------------- Task 1 ----------------------------------


var x = 0;
var y = 0;
var textTask1 = "";

x = prompt('Введи первое число');
y = prompt('Введи второе число');

function calculation(x, y) {
    var res;
    if (x > y) {
        res = 1;
    }
    else if (x < y) {
        res = -1;
    }
    else {
        res = 0
    }
    return res
}

if (!checking(x) || !checking(y)) {
    task1.innerHTML = "<h2>" + "Что-то пошло не так, попробуйте еще раз \n🥺!!Error!!" + "</h2> ";
}
else {
    task1.innerHTML = "<p>" + "Первое значение " + x + "  " + "<br>" + "Второе значение" + "  " + y + "  " + "<br>" + "Получилось :" + "  " + (calculation(x, y)) + "</p>";
}



// ------------------------------- Task 2 ----------------------------------


var nums = 0;
var textTask2 = "";

nums = prompt("Введите число");

function factorial(nums) {
    if (nums === 0) {
        return 1;
    }
    return nums * factorial(nums - 1);
}

if (!checking(nums)) {
    task2.innerHTML = "<h2>" + "Что-то пошло не так, попробуйте еще раз \n🥺!!Error!!" + "</h2> ";
}
else {
    task2.innerHTML = "<p>" + "Факториал числа" + " " + nums + "<br>" + " Будет: " + " " + factorial(nums) + "</p>";
}


// ------------------------------- Task 3 ----------------------------------


var one = 0;
var two = 0;
var three = 0;
var textTask3 = "";

one = prompt('Введите первое число');
two = prompt('Введите второе число');
three = prompt('Введите третье число');


function createNumber() {
    let sum = [];
    let sumNum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += parseInt(arguments[i]);
    }
    sumNum = parseInt(sum)
    console.log(typeof(sumNum)) // Это ЧИСЛО и проверяла нолями
    return sumNum;
}

if (!checking(one) || !checking(two) || !checking(three)) {
    task3.innerHTML = "<h2>" + "Что-то пошло не так, попробуйте еще раз \n🥺!!Error!!" + "</h2> ";
}
else {
    task3.innerHTML = "<p>" + "Вышло число: " + createNumber(one, two, three) + "</p>";
}


// ------------------------------- Task 4 ----------------------------------


var a = 0;
var b = 0;
var textTask4 = "";

a = prompt("Введи длину прямоугольника (целое число)"); 
b = prompt("Введите ширину прямоугольника (целое число)");

function square(x, y) {

    let squareArea = 0;

    if (x == 0) {
        squareArea = y * y;
    }
    else if (y == 0) {
        squareArea = x * x;
    }
    else {
        squareArea = x * y;
    }
    return squareArea;
}

if (!checking(a) || !checking(b)) {
    task4.innerHTML = "<h2>" + "Что-то пошло не так, попробуйте еще раз \n🥺!!Error!!" + "</h2> ";
}
else {
    task4.innerHTML = "<p>" + "Площадь прямоугольника будет: " + " " + square(a, b) + "</p>";
}


// ------------------------------- Task 5 ----------------------------------


function isPerfect(number) {
	var temp = 0;
	for (var i = 1; i <= number / 2; i++) {
		if (number % i === 0) temp += i;
	}
    if (temp == number && temp != 0) {
        return true
    }
    else {
        return false;
    }
}

var numberU = 0;

numberU = prompt('Введите число');

if (!checking(numberU) || numberU == 0) {
    task5.innerHTML = "<h2>" + "Что-то пошло не так, попробуйте еще раз \n🥺!!Error!!" + "</h2> ";
}
else {
    if (isPerfect(+numberU)) {
        task5.innerHTML = "<h2> " + numberU + "</h2> " + "</br>" + "<p>" + "Это Совершенное число!" + "</p> ";
    }
    else {
        task5.innerHTML = "<h2> " + numberU + "</h2> " + "</br>" + "<p>" + "Это НЕ Совершенное число!" + "</p> ";
    }
}


// ------------------------------- Task 6 ----------------------------------


var start = 0;
var end = 0;

function perfectNumFromRange(start, end) {

    start = prompt(`Введите начало диапазона больше нуля`);
    end = prompt(`Введите конец диапазона`);

    let result = [];

    if (start > end) {
        let turn = start;
        start = end;
        end = turn;
    }

    if (!checking(start) || !checking(end) || start == 0 || end == 0) {
        task6.innerHTML = "<h2>" + "Что-то пошло не так, попробуйте еще раз \n🥺!!Error!!" + "</h2> "
    }
    else {
        for (i = start; i <= end; i++) {
            if (isPerfect(i)) {
                result.push(i);
                task6.innerHTML = "<p>" + "Все Совершенные числа из этого диапазона: " + result.join(", ") + "</p>"
            }
        }
    }
}

perfectNumFromRange(start, end)


// ------------------------------- Task 7 ----------------------------------


var hour = 0;
var minut = 0;
var second = 0;

hour = prompt("Введичите часы");
minut = prompt("Введичите минуты");
second = prompt("Введичите секунды");


function time(hour, minut, second) {

    hour = +hour;
    minut = +minut;
    second = +second;

    minut = minut + (second - second % 60) / 60;
    second = second % 60;
    hour = hour + (minut - minut % 60) / 60;
    minut = minut % 60;

    return timeForm(hour, minut, second);

}

if (!checking(hour) || !checking(minut) || !checking(second)) {
    task7.innerHTML = "<h2>" + "Что-то пошло не так, попробуйте еще раз \n🥺!!Error!!" + "</h2> "
}
else {
     task7.innerHTML = "<p>" + time(hour, minut, second) + "</p>"
}
    

// ------------------------------- Task 8 ----------------------------------


var h = 0;
var m = 0;
var s = 0;

function timeIsSeconds(h, m, s) {
   
    return ((h * 60) * 60 + (m * 60) + s)   //(h * 3600) + (m * 60) + s
}

h = prompt("Введичите час");
m = prompt("Введичите минуты");
s = prompt("Введичите секунды");

if (!checking(h) || !checking(m) || !checking(s)) {
    task8.innerHTML = "<h2>" + "Что-то пошло не так, попробуйте еще раз \n🥺!!Error!!" + "</h2> "
}
else {
    task8.innerHTML = "<p>" + "Из " + " " + parseInt(h) + " : " + parseInt(m) + " : " + parseInt(s) + "</br>" + "Вышло: " + " " + timeIsSeconds(h, m, s) + " " + " секунд" + "</p>"
}


// ------------------------------- Task 9 ----------------------------------


var secondsUser = 0;

secondsUser = prompt('Введите секунды')

function secondsToTime(seconds) {

    var sec = 0;
    var min = 0;
    var hou = 0;

    min = Math.floor(seconds / 60);
    sec = seconds % 60
    hou = Math.floor(min / 60);
    min = min % 60;

    return timeForm(hou, min, sec)

}

if (!checking(secondsUser)) {
    task9.innerHTML = "<h2>" + "Что-то пошло не так, попробуйте еще раз \n🥺!!Error!!" + "</h2> "
}
else {
    task9.innerHTML = "<p>" + "Из " + " " + parseInt(secondsUser) + " " + "секунд" + "</br>" + "Вышло " + " " + secondsToTime(secondsUser) + "</p>";
}


// ------------------------------- Task 10 ---------------------------------


var oneH = 0;
var oneM = 0;
var oneS = 0;

var twoH = 0;
var twoM = 0;
var twoS = 0;

    oneH = prompt("Введичите сколько часов Первого времени");
    oneM = prompt("Введичите сколько минут Первого времени");
    oneS = prompt("Введичите сколько секунд Первого времени");

    twoH = prompt("Введичите сколько часов Второго времени");
    twoM = prompt("Введичите сколько минут Второго времени");
    twoS = prompt("Введичите сколько секунд Второго времени");

    function difference(c, d) {
        if (c > d) {
            var different = c - d;
        }
        else if (c < d) {
            different = d - c;
        }
        return different;
    }

function simileTwoTime(oneH, oneM, oneS, twoH, twoM, twoS) {

    var oneTimeSec = timeIsSeconds(+oneH, +oneM, +oneS);    // спасибо большое за помощь
    var twoTimeSec = timeIsSeconds(+twoH, +twoM, +twoS);    // я поняла что мне нужно будет 
                                                            // хорошенько проработать этот "+"
    var resultDiff = difference(+oneTimeSec, +twoTimeSec);
    return resultDiff;
}

var resultTimeDiff = simileTwoTime(+oneH, +oneM, +oneS, +twoH, +twoM, +twoS);
var resultTask = secondsToTime(+resultTimeDiff)

    var timeOne = time(oneH, oneM, oneS);
    var timeTwo = time(twoH, twoM, twoS);

if (!checking(oneH) || !checking(oneM) || !checking(oneS) || !checking(twoH) || !checking(twoM) || !checking(twoS)) {
    task10.innerHTML = "<h2>" + "Что-то пошло не так, попробуйте еще раз \n🥺!!Error!!" + "</h2> ";
}
else {
    task10.innerHTML = "<p>" + "Разница между " + " " + timeOne + " " + "и " + timeTwo + "</br>" + "Вышло " + " " + resultTask + "</p>";
}
