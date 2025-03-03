const numberOfdrums = document.querySelectorAll(".drum").length;

for(let i = 0; i < numberOfdrums; i++) {
    const drumElements = document.querySelectorAll(".drum");

    drumElements[i].addEventListener("click", function() {
        const buttonTextContent = this.textContent;
        const drumBorder = this.style.border = "2px solid yellow";
        console.log(drumBorder);
        
        switch (buttonTextContent) {
            case "w":
                const drumSoundTom1 = new Audio('sounds/tom-1.mp3');
                drumSoundTom1.play();
                drumBorder;
                break;

            case "a":
                const drumSoundTom2 = new Audio('sounds/tom-2.mp3');
                drumSoundTom2.play();
                break;

            case "s":
                const drumSoundTom3 = new Audio('sounds/tom-3.mp3');
                drumSoundTom3.play();
                break;

            case "d":
                const drumSoundTom4 = new Audio('sounds/tom-4.mp3');
                drumSoundTom4.play();
                break;

            case "j":
                const drumSoundSnare = new Audio('sounds/snare.mp3');
                drumSoundSnare.play();
                break;

            case "k":
                const drumSoundCrash = new Audio('sounds/crash.mp3');
                drumSoundCrash.play();
                break;

            case "l":
                const drumSoundKick = new Audio('sounds/kick-bass.mp3');
                drumSoundKick.play();
                break;

            default:
                console.log(buttonTextContent);
                break;
        }
    });
}


// const drumSoundTom1 = new Audio('sounds/tom-1.mp3');
//         drumSoundTom1.play();



