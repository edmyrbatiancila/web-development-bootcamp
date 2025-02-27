const loveGenerator = (yourName, yourCrushName) => {
    const love = Math.floor(Math.random() * 100) + 1;
    const string = `You got ${love}% meter of loveness`

    if(love === 100) {
        return console.log(`${string}. Wow you are perfect Match! ${yourName} and ${yourCrushName} forever!`);
    } else if(love >= 90) {
        return console.log(`${string}. This is it! You are meant to be together with ${yourCrushName}!`);
    } else if(love >= 80) {
        return console.log(`${string}. You and ${yourCrushName} are so close to perfection!`);
    } else if(love >= 70) {
        return console.log(`${string}. Oh.. Better luck next time!`);
    } else {
        return console.log(`${string}. This is not going to work out! Move on!`);
    }
}

let enteredNames = prompt("Enter your name and your crush name separated by comma: ");
let names = enteredNames.split(",").map(name => name.trim());
let yourName = names[0];
let yourCrushName = names[1];

loveGenerator(yourName, yourCrushName);