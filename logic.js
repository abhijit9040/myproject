let attempt = 0;
let attemptData = document.getElementById("Attempts");
let userinp = document.getElementById("inp");
let subBtn = document.getElementById("submit");
let resBtn = document.getElementById("resBtn");
let message = document.getElementById("msg");

let cnum = Math.floor(Math.random() * 100) + 1;

function check() {
    let usernum = parseInt(userinp.value);

    if (cnum === usernum) {
        message.innerHTML = "Congratulations! You guessed the number.";
        message.style.color = "green";
        resBtn.style.display = "block";
    } else if (cnum < usernum) {
        message.innerHTML = "Too high! Try again.";
        message.style.color = "red";
    } else {
        message.innerHTML = "Too low! Try again.";
        message.style.color = "white";
    }
    attempt++;
    attemptData.innerHTML = attempt;

    setTimeout(() => {
        userinp.value = '';
        message.innerHTML = '';
    }, 1000);
}

function restart() {
    cnum = Math.floor(Math.random() * 100) + 1;
    attempt = 0;
    attemptData.innerHTML = attempt;
    message.innerHTML = '';
    userinp.value = '';
    resBtn.style.display = "none";
}

subBtn.addEventListener("click", check);
resBtn.addEventListener("click", restart);