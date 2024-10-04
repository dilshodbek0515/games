const btn = document.querySelector(".click");
const tel = document.querySelector(".value");

const btn2 = document.querySelector(".click2");
const tel2 = document.querySelector(".valuee");

const result = document.querySelector(".result");

// player 1
const TEL_NUMBERS = ["tosh", "qaychi", "qog'oz"];


function randomTel() {
    btn.setAttribute("disabled", true);
    let interval = setInterval(() => {
        let randomNumber = Math.floor(Math.random() * TEL_NUMBERS.length);
        tel.innerHTML = TEL_NUMBERS[randomNumber];
    }, 100);

    setTimeout(() => {
        clearInterval(interval);
        btn.removeAttribute("disabled");

        checkWinner();
    }, 700);
}

// player 2
const TEL_NUMBER = ["tosh", "qaychi", "qog'oz"];
function randomTell() {
    btn2.setAttribute("disabled", true);
    let interval = setInterval(() => {
        let randomNumber = Math.floor(Math.random() * TEL_NUMBER.length);
        tel2.innerHTML = TEL_NUMBER[randomNumber];
    }, 100);

    setTimeout(() => {
        clearInterval(interval);
        btn2.removeAttribute("disabled");

        checkWinner();
    }, 700);
}

function checkWinner() {
    const player1 = tel.innerHTML;
    const player2 = tel2.innerHTML;

    if (player1 && player2) {
        if (player1 === player2) {
            result.innerHTML = "Bu durang!";
        } else if (
            (player1 === "tosh" && player2 === "qaychi") ||
            (player1 === "qaychi" && player2 === "qog'oz") ||
            (player1 === "qog'oz" && player2 === "tosh")
        ) {
            result.innerHTML = "Player 1 yutdi! 👈";
        } else {
            result.innerHTML = "Player 2 yutdi! 👉";
        }
    }
}

