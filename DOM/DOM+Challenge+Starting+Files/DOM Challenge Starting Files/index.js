

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

