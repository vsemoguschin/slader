const arrows = document.querySelectorAll(".slider__arrow"); //переменная для стрелочек
const itemsCount = document.querySelectorAll(".slider__item").length; //колличество слайдов (через querySelectorAll массив)
const slider = document.querySelector(".slider__list"); //слайдер
let startIndex = 0; // индекс элемента с которого начинать
const width = document.querySelector(".slider__item").clientWidth; //ширина слайда
console.log(width);
arrows.forEach((arrow) => { //цикл. для каждой стрелки
    arrow.addEventListener("click", function (e) { //прослушивание события клик
        e.preventDefault(); //отмена действий по умолчанию(не обновлялась страница)
        const width = document.querySelector(".slider__item").clientWidth; //определить ширину слайда при клике
        if (arrow.classList.contains(".arrow__left")) { //если у стрелки есть класс arrow__left
            if (startIndex !== itemsCount - 1) { // если стартиндекс не равен колличеству слайдов тогда
                startIndex++;//увеличеть на один индекс(слайд)
            } else {
                startIndex = 0;//сбрасываем на первый слайд
            }
        } else {
            if (startIndex > 0) { //наоборот для правой стрелки
                startIndex--;
            } else {
                startIndex = itemsCount - 1;
            }
        }
        slider.style.left = "-" + startIndex * width + "px"; //в значение left добавляем минус прибовляем индекс умноженный на ширину и прибавляем значение px
    });
});

//не работает с тремя элементами