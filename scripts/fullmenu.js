const burger = document.querySelector(".burger");
const menu = document.querySelector(".fullmenu-section");
const close = document.querySelector(".fullmenu__close");

burger.addEventListener("click", function(e) {
    e.preventDefault();

    menu.classList.add("active");
})

close.addEventListener("click", function(e){
    e.preventDefault();

    menu.classList.remove("active");
})