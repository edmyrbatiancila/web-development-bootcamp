document.querySelector('h1').style.color = 'red';

// Exercise:
const houseKeeper1 = {
    name: "Lilia Cantapay",
    age: 30,
    skills: [
        "cleaning",
        "laundery",
        "cooking"
    ]
}

// Example of Constructor Function:
function BellBoy(name, age, hasWorkPermit, languages ) {
    this.name - name;
    this.age = age;
    this.hasWorkPermit = hasWorkPermit;
    this.languages = languages;
}

function HouseKeeper(yearsOfExperience, name, cleaningRepertoire, skills) {
    this.yearsOfExperience = yearsOfExperience;
    this.name = name;
    this.cleaningRepertoire = cleaningRepertoire;
    this.skills = skills;
    this.clean = function() {
        alert("Cleaning in progress...");
    }
}

const houseKeeper2 = new HouseKeeper(10, "Bob", ["lobby", "kitchen", "chair"]);

houseKeeper2.clean();

