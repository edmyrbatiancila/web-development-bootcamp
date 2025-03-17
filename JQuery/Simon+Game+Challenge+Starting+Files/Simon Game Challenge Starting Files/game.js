// Varuabke Deckarations:
let buttonColors = [
    "red",
    "blue",
    "green",
    "yellow"
];

let gamePattern = [];
let userClickedPattern = [];

let gameStarted = false;
let level = 0;

$(document).keypress(function() {
    if(!gameStarted) {
        $("#level-title").text("Level " + level);
        nextSequence();
        gameStarted = true;
    }
});

$(".btn").on("click", function() {
    let userChosenColor = $(this).attr("id");
    if(gameStarted) {
        userClickedPattern.push(userChosenColor);
        playSound(userChosenColor);
        buttonAnimation(userChosenColor);
        checkAnswer(userClickedPattern.length - 1);
    }
    
});

function checkAnswer(currentLevel) {
    // console.log(currentLevel);
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        if(userClickedPattern.length === gamePattern.length) {
            setTimeout(function() {
                nextSequence();
            }, 1000);
        }
    } else {
        console.log("wrong");
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function() {
            $("body").removeClass("game-over");
        }, 200);

        $("#level-title").text("Game Over, Press Any Key to Restart");
        startOver();
    }
}

function nextSequence() {
    userClickedPattern = [];

    level++;
    $("#level-title").text(`Level ${level}`);

    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    buttonAnimation(randomChosenColor);
    playSound(randomChosenColor);
}

function playSound(currentButton) {
    const audio = new Audio("sounds/" + currentButton + ".mp3");
    audio.play();
}

function buttonAnimation(currentKey) {
    const activeButton = $(`#${currentKey}`);

    activeButton.addClass("pressed");

    setTimeout(function() {
        activeButton.removeClass("pressed");
    }, 100);
}

function startOver() {
    level = 0;
    gamePattern = [];
    gameStarted = false;
}
