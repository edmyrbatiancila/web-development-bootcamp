const buttonColors = [
    "red",
    "blue",
    "green",
    "yellow"
];

const gamePattern = [];
const colorButtons = $(".btn").length;



function nextSequence() {
    const randomNumber = Math.floor(Math.random() * 4);
    const randomChosenColor = buttonColors[randomNumber];

    const sequence = gamePattern.push(randomChosenColor);

    return sequence;
    
}

for(let i = 0; i < colorButtons; i ++) {
    const item = $(".btn")[i];

    console.log(item);
}