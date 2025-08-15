const buttonOpenBurgerElements = document.querySelector("[data-js-button-burger]")
const burgerMenuElement = document.querySelector("[data-js-burger-menu]")
const buttonCloseBurgerElement = document.querySelector("[data-js-button-burger-close]")

let isVisible = false

const openBurgerMenu = () => {
    isVisible = !isVisible
    burgerMenuElement.classList.toggle("hidden", !isVisible)
    burgerMenuElement.classList.toggle("flex", isVisible)
    buttonOpenBurgerElements.classList.toggle("hidden", isVisible)
}

const closeBurgerMenu = () => {
    isVisible = !isVisible
    burgerMenuElement.classList.toggle("hidden", !isVisible)
    burgerMenuElement.classList.toggle("flex", isVisible)
    buttonOpenBurgerElements.classList.toggle("hidden", isVisible)
}


const hideBurgerMenu = (event) => {
    if (!event.target.classList.contains("burger")) {
        isVisible = false
        burgerMenuElement.classList.add("hidden")
        burgerMenuElement.classList.remove("flex")
        buttonOpenBurgerElements.classList.remove("hidden")
    }
}


buttonOpenBurgerElements.addEventListener("click", (event) => {
    event.stopPropagation()
    openBurgerMenu()
})

buttonCloseBurgerElement.addEventListener("click", (event) => {
    event.stopPropagation()
    closeBurgerMenu()
})

document.addEventListener("click", hideBurgerMenu)