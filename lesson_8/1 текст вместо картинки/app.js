'use strict';
// 1. получите все кнопки и сохраните в переменную

let buttonElems = document.querySelectorAll("button");

// 1.1 затем проитерируйтесь по кнопкам и каждой из
// них добавьте обработчик клика - функцию handleClick

buttonElems.forEach(el => {
    el.addEventListener("click", handleClick);
});

/**
 * Функция обрабатывает клик по кнопке в карточке товара и попеременно вызывает
 * функции для показа или скрытия текста о товаре.
 * @param {MouseEvent} clickedButtonEvent 
 */
function handleClick(clickedButtonEvent) {
    // 2. из объекта события получите ссылку на .product и
    // сохраните в переменную:
    const cardNode = clickedButtonEvent.currentTarget.parentNode;

    // 3. создайте литерал объекта со следующими свойствами:
    const card = {
        wrap: cardNode, // здесь элемент с классом .product
        img: cardNode.querySelector("img"), // здесь картинка внутри .product
        productName: cardNode.querySelector(".productName"), // здесь .productName, который внутри .product
        button: cardNode.querySelector("button"), // здесь button, который внутри .product
    };

    // 4. получаем текст на кнопке, которая внутри .product
    if ("Подробнее" == card.button.innerText) { // 4.1 проверяем равняется ли этот текст строке "Подробнее"
        // 4.2 если да, то передаем объект card в функцию showMoreText
        showMoreText(card);
    } else if ("Отмена" == card.button.innerText) { // 4.3 проверяем равняется ли текст на кнопке строке "Отмена"
        // 4.4 если да, то передаем объект card в функцию hideMoreText
        hideMoreText(card);
    }
}

/**
 * Функция скрывает текст с описанием товара.
 * @param {Object} card 
 * @param {HTMLDivElement} card.wrap
 * @param {HTMLImageElement} card.img
 * @param {HTMLDivElement} card.productName
 * @param {HTMLButtonElement} card.button
 */
function hideMoreText(card) {
    // 5. картинке внутри .product ставим стиль display: block
    card.wrap.style.display = "block";

    // 5.1 внутри .product находим элемент с классом .desc и удаляем его
    card.wrap.removeChild(card.wrap.querySelector(".desc"));

    // 5.2 кнопке, которая внутри .product ставим текст "Подробнее"
    card.button.innerText = "Подробнее";

    // Верну картинку
    let tempImg = document.createElement("img");
    tempImg.setAttribute("src", "http://unsplash.it/150/150?random&gravity=center");
    tempImg.setAttribute("alt", "Some alternate text");
    card.productName.insertAdjacentElement("afterend", tempImg);
}

/**
 * Функция показывает текст с описанием товара.
 * @param {Object} card 
 * @param {HTMLDivElement} card.wrap
 * @param {HTMLImageElement} card.img
 * @param {HTMLDivElement} card.productName
 * @param {HTMLButtonElement} card.button 
 */
function showMoreText(card) {
    // 6. картинке внутри .product ставим display: none
    card.img.style.display = "none";

    // 6.1 сохраняем произвольный текст в переменную
    let frivolousText = "Lorem ipsum dolor set amet. Lorem ipsum dolor set amet. Lorem ipsum dolor set amet."

    // Добавим элемент, к нему класс и текст.
    let tempDiv = document.createElement("div");
    tempDiv.classList.add("desc");
    tempDiv.innerText = frivolousText;
    tempDiv.style.fontSize = "22px";

    // 6.2 внутри .product есть .productName, после него вставляем div.desc и текстом из переменной из п. 6.1
    card.productName.insertAdjacentElement("afterend", tempDiv);

    // 6.3 внутри .product у кнопки текст ставим "Отмена"
    card.button.innerText = "Отмена";
}