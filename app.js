const btn = document.querySelector(".click")
const tel = document.querySelector(".value")

const btn2 = document.querySelector(".click2")
const tel2 = document.querySelector(".valuee")

// player 1
const TEL_NUMBERS = [
    "tosh",
    "qaychi",
    "qog'oz",
]

function randomTel() {
    btn.setAttribute("disabled", true)
    let interval = setInterval(() => {
        let randomNumber = Math.floor(Math.random() * TEL_NUMBERS.length)
        tel.innerHTML = TEL_NUMBERS[randomNumber]
    }, 100)
    setTimeout(() => {
        clearInterval(interval)
        btn.removeAttribute("disabled")

    }, 700)
}


// player 2
const TEL_NUMBER = [
    "tosh",
    "qaychi",
    "qog'oz",
]

function randomTell() {
    btn2.setAttribute("disabled", true)
    let interval = setInterval(() => {
        let randomNumber = Math.floor(Math.random() * TEL_NUMBER.length)
        tel2.innerHTML = TEL_NUMBER[randomNumber]
    }, 100)
    setTimeout(() => {
        clearInterval(interval)
        btn2.removeAttribute("disabled")

    }, 700)
}