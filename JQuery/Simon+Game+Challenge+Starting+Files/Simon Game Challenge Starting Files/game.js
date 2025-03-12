// Varuabke Deckarations:
const buttonColors = [
    "red",
    "blue",
    "green",
    "yellow"
];

const gamePattern = [];
const userClickedPattern = [];
const colorButtons = $(".btn").length;
let gameStarted = false;
let level = 0;

// Functions:

function nextSequence() {
    const randomNumber = Math.floor(Math.random() * 4);
    const randomChosenColor = buttonColors[randomNumber];

    const sequence = gamePattern.push(randomChosenColor);

    buttonAnimation(randomChosenColor);
    playSound(randomChosenColor);
    $("#level-title").text(`Level ${level}`);
    level++;
}

function buttonAnimation(currentKey) {
    const activeButton = $(`#${currentKey}`);

    activeButton.addClass("pressed");

    setTimeout(function() {
        activeButton.removeClass("pressed");
    }, 150);
}

function playSound(currentButton) {
    const audio = new Audio("sounds/" + currentButton + ".mp3");

    audio.play();
}

function checkAnswer(currentLevel) {

}

// Main page:
for(let i = 0; i < colorButtons; i ++) {

    $(`#${buttonColors[i]}`).on("click", function() {
        const userChosenColor = $(this).attr("id");
        userClickedPattern.push(userChosenColor);

        console.log(userClickedPattern);
        buttonAnimation(userChosenColor);
        playSound(userChosenColor);
        checkAnswer(userChosenColor);
    });
}

$(document).keypress(function() {
        if(!gameStarted) {
            nextSequence();
            gameStarted = true;
        }
});