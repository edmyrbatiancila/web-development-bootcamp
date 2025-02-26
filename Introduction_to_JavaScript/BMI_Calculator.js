const bmiCalculator = (weight, height) => {
    const bmi = Math.round(weight / (height * height));
    
    return bmi;
}

const bmi = bmiCalculator(65, 1.8);
console.log(bmi);