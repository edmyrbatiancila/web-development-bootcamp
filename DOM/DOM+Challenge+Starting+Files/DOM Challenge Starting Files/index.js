import characters from "./js/characters.js";

let currentAudio = null;

document.querySelector(".dark-mode").addEventListener("click", function() {
    document.querySelector("body").classList.add("testing");
    document.querySelector("body").style.color="white";
    document.querySelector("h1").style.color="silver";
});

document.querySelector(".light-mode").addEventListener("click", function() {
    document.querySelector("body").classList.remove("testing");
    document.querySelector("body").style.color="black";
    document.querySelector("h1").style.color="red";
});

document.querySelector(".checked").addEventListener("click", function() {
    document.querySelector(".modes").classList.toggle("invisible");
    document.querySelector("h1").classList.toggle("huge");
});

Object.keys(characters).forEach(buttonClass => {
    document.querySelector(`.${buttonClass}`).addEventListener("click", function() {
        const imgElement = document.querySelector(".pictures img");
        const nameElement = document.querySelector(".character-name");
        const buttonElement = document.querySelector(".transform");
        const character = characters[buttonClass].human;
        const characterAudio = new Audio(character.audio);

        if(currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }

        document.querySelectorAll(".menu-button button").forEach(btn => {
            btn.classList.remove("character-selected");
        });

        this.classList.add("character-selected");

        imgElement.setAttribute("src", character.src);
        nameElement.textContent = character.name;
        nameElement.style.color = character.color;
        characterAudio.play();
        currentAudio = characterAudio;
        buttonElement.textContent = "Transform";
    });
});

document.querySelector(".transform").addEventListener("click", function() {
    const imgElement = document.querySelector(".pictures img");
    const nameElement = document.querySelector(".character-name");
    const buttonElement = document.querySelector(".transform");

    const currentSrc = imgElement.getAttribute("src");
    let transformed = false;

    Object.keys(characters).forEach(buttonClass => {
        const character = characters[buttonClass];

        if(currentSrc === character.human.src) {
            imgElement.setAttribute("src", character.transformed.src);
            nameElement.textContent = character.transformed.name;
            nameElement.style.color = character.transformed.color;
            buttonElement.textContent = "Release";
            transformed = true;
        } else if(currentSrc === character.transformed.src) {
            imgElement.setAttribute("src", character.human.src);
            nameElement.textContent = character.human.name;
            nameElement.style.color = character.human.color;
            buttonElement.textContent = "Transform";
            transformed = true;
        }
    });

    if(!transformed) {
        buttonElement.textContent = "Transform";
    }
});