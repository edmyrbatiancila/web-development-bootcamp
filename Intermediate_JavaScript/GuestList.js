const guestList = (name) => {
    const guestLists = ['Angela', 'Jack', 'Pam', 'James', 'Lara', 'Jason'];
    if (guestLists.includes(name)) {
        return "Welcome!";
    } else {
        return "Sorry, maybe next time";
    }
}

let enteredName = prompt("Enter your name:");
guestList(enteredName);