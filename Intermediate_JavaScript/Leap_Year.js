const leapYear = (year) => {
    if(year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
        return alert("Leap year.");
    } else {
        return alert("Not leap year.");
    }
}
enteredYear = prompt("Enter a Year: ");
leapYear(enteredYear);