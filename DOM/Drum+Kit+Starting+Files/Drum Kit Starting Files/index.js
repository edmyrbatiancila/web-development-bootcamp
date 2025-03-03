const numberOfdrums = document.querySelectorAll(".drum").length;

for(let i = 0; i < numberOfdrums; i++) {
    const drumElements = document.querySelectorAll(".drum");

    drumElements[i].addEventListener("click", function() {
        const buttonTextContent = this.textContent;
        
        makeSound(buttonTextContent);
    });
}

document.addEventListener("keypress", function(event) {
    const keyboard = event.key;

    makeSound(keyboard);
});

function makeSound(key) {
    switch (key) {
        case "r":
            const drumSoundTom1 = new Audio('sounds/tom-1.mp3');
            drumSoundTom1.play();
            break;

        case "u":
            const drumSoundTom2 = new Audio('sounds/tom-2.mp3');
            drumSoundTom2.play();
            break;

        case "i":
            const drumSoundTom3 = new Audio('sounds/tom-3.mp3');
            drumSoundTom3.play();
            break;

        case "t":
            const drumSoundTom4 = new Audio('sounds/tom-4.mp3');
            drumSoundTom4.play();
            break;

        case "f":
            const drumSoundSnare = new Audio('sounds/snare.mp3');
            drumSoundSnare.play();
            break;

        case "y":
            const drumSoundCrash = new Audio('sounds/crash.mp3');
            drumSoundCrash.play();
            break;

        case "v":
            const drumSoundKick = new Audio('sounds/kick-bass.mp3');
            drumSoundKick.play();
            break;

        case "h":
            const drumSoundOpenHiHat = new Audio('sounds/open_hihat.mp3');
            drumSoundOpenHiHat.play();
            break;

        case "j":
            const drumSoundCloseHiHat = new Audio('sounds/close-hihat.mp3');
            drumSoundCloseHiHat.play();
            break;

        case "n":
            const drumSoundRide = new Audio('sounds/ride_cymbals.mp3');
            drumSoundRide.play();
            break;

        default:
            console.log(buttonTextContent);
            break;
    }
}


