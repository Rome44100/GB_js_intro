'use strict';

// задания в обратном порядке

// Задание № 3

let quest_3 = function questToConsole() {

    let result = 10 + 10 + "10";
    console.log(result);

    result = 10 + "10" + 10;
    console.log(result);

    result = 10 + 10 + +"10";
    console.log(result);

    result = 10 / -"";
    console.log(result);

    result = 10 / +"2,5";
    console.log(result);
}

/*
1. Сначала складываем 10 и 10, получаем результат 20 и конкатенируем с строкой 10. 
   result = 2010
2. Из-за строки в середине выражения происходит конкатенация значений слева и справа. 
   result = 101010
3. В конце выражения срабатывает унарный плюс, который преобразует строку "10" в число 10 и затем сложение трех чисел.
   result = 30
4. Унарный минус пустую строку превращает в ноль, а деление на минус ноль дает минус бесконечность.
   result = -Infinity 
5. Унарному плюсу не удается преобразовать строку, содержащую символ запятой в числе, что сразу дает NaN и, соответственно, деление тоже NaN.
   result = NaN
*/

// Задание № 2

let quest_2 = function varsToConsole() {
    
    // создать две переменные
    let name = null;
    let admin = null;

    // присвоить пеперенной name значение 'Василий'
    name = 'Василий';

    // скопировать значение из name в admin
    admin = name;

    // выввести в консоль значение admin
    console.log(admin);
}

// Задание № 1

function celsToFahr(val = 20) {
    let cels = Number(val);
    let fahr = 120;

    fahr = (9 / 5) * cels + 32;

    return Math.trunc(fahr);
}

function onChangeField() {
    document.getElementById("take_celsius").addEventListener("change", function() {
        document.getElementById("put_fahrenheit").textContent = celsToFahr(this.value);
    });
}

function displayVal() {
    document.getElementById("alertVal").addEventListener("click", function() {
        alert(document.getElementById("take_celsius").value + 
              " градусов Цельсия равно " + 
              celsToFahr(document.getElementById("take_celsius").value) + 
              " градусов по Фаренгейту.");
    });
}

onChangeField();

displayVal();

window.addEventListener("load", function() {
    document.getElementById("put_fahrenheit").textContent = celsToFahr(document.getElementById("take_celsius").value);
});