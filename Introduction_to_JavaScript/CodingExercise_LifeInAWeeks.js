function lifeInWeeks(age) {
    
/************Don't change the code above************/    
    
    //Write your code here.
    
    const days = Math.abs((365 * age) - (365 * 90));
    const weeks = Math.abs((52 * age) - (52 * 90));
    const months = Math.abs((12 * age) - (12 * 90))
    
    return console.log(`You have ${days} days, ${weeks} weeks, and ${months} months left.`);
    
/*************Don't change the code below**********/
}
let enteredAge = prompt("Enter your age:");
lifeInWeeks(enteredAge);
