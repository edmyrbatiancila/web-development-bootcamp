import characters from "./characters";

export function sideMenuButtonClickHandle(buttonClass) {
    const imgElement = document.querySelector(".pictures img");
    const nameElement = document.querySelector(".character-name");
    const buttonElement = document.querySelector(".transform");
    const character = characters[buttonClass].human;

    document.querySelectorAll(".menu-button button").forEach(btn => {
        btn.classList.remove("character-selected");
    });

    this.classList.add("character-selected");

    imgElement.setAttribute("src", character.src);
    nameElement.textContent = character.name;
    nameElement.style.color = character.color;
    buttonElement.textContent = "Transform";
}