// Task 1
console.log("Task 1");
//      Создаем массив от 1 до 100
var arr = [];
var end = 1;
while (end < 100) {
    end++;
    arr.push(end);
}
//      Удаляем все четные цифры
var a = 2;
var b = 2;
while (a <= 100) {
    a += b;
    arr.splice(arr.indexOf(a), 1);
}
//      Удаляет все цифры которые деляться на нечетные до 10
a = 4;
b = 3;
while (a < 100) {
    if (a % b === 0 && arr.indexOf(a) !== -1) {
        arr.splice(arr.indexOf(a), 1);
    } else {
        a++;
    }
}

a = 6;
b = 5;
while (a < 100) {
    if (a % b === 0 && arr.indexOf(a) !== -1) {
        arr.splice(arr.indexOf(a), 1);
    } else {
        a++;
    }
}

a = 8;
b = 7;
while (a < 100) {
    if (a % b === 0 && arr.indexOf(a) !== -1) {
        arr.splice(arr.indexOf(a), 1);
    } else {
        a++;
    }
}

console.log(arr);


// Task 2


console.log("Task 2");

var a = -1;
do {
    a++;
    if (a === 0) {
        console.log(a, "- это ноль");
    } else if (a % 2 === 0) {
        console.log(a, "- это четное число");
    } else {
        console.log(a, "- это нечетное число");
    }
} while (a < 10);

//Task 3

console.log("Task 3");

var i;
for (i = 0; i <= 9; i++) {
    console.log(i);
}