"use strict";

/* burger-menu */
function addBurger(command) {
    const burgerMenu = document.querySelector(".menu"),
        burgerButton = document.querySelector(".burger-button"),
        burgerLine = document.querySelector(".burger-button__line");

    if (command == "run") {
        burgerButton.addEventListener("click", () => {
            burgerLine.classList.toggle("burger-button__line--active");
            burgerMenu.classList.toggle("menu--open");
            document.body.classList.toggle("body--hidden");
        })
    }
};
// running
addBurger("run");