const bmiCalculator = (weight, height) => {
    const bmi = weight / Math.pow(height, 2);

    if(bmi > 24.9) {
        return alert(`Your BMI is ${bmi}, so you are overweight`);
    } else if(bmi > 18.5 && bmi < 24.9) {
        return alert(`Your BMI is ${bmi}, so you have a normal weight.`);
    } else {
        return alert(`Your BMI is ${bmi}, so you are underweight`);
    }
}

let enteredWeight = prompt("What is your weight in kg?");
let enteredHeight = prompt("What is your height in meters?");
bmiCalculator(enteredWeight, enteredHeight);