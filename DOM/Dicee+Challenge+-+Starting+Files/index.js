const rollDice = () => {
    const randomNumber1 = Math.floor(Math.random() * 6) + 1;
    const randomNumber2 = Math.floor(Math.random() * 6) + 1;

    const diceElement1 = document.querySelector(".img1");
    const diceElement2 = document.querySelector(".img2");
    const titleElement = document.querySelector("h1");

    diceElement1.setAttribute("src", `images/dice${randomNumber1}.png`);
    diceElement2.setAttribute("src", `images/dice${randomNumber2}.png`);

    if(randomNumber1 > randomNumber2) {
        titleElement.textContent = "🚩Player 1 Wins!";
    } else if(randomNumber2 > randomNumber1) {
        titleElement.textContent = "Player 2 Wins!🚩";
    } else {
        titleElement.textContent = "Draw!";
    }
};

document.addEventListener("DOMContentLoaded", rollDice);