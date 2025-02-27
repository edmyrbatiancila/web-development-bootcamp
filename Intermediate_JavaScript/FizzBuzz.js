let output = [];
let newItem = 1;
const fizzBuzz = () => {

    if(newItem % 3 === 0 && newItem % 5 === 0) {
        output.push("FizzBuzz");
    } else if(newItem % 3 === 0) {
        output.push("Fizz");
    } else if(newItem % 5 === 0) {
        output.push("Buzz");
    } else {
        output.push(newItem);
    }
    newItem++;
    console.log(output);
}


fizzBuzz();
fizzBuzz();
fizzBuzz();