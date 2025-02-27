const bmiCalculator = (weight, height) => {
    const bmi = Math.round(weight / (height * height));
    
    return bmi;
}

const bmi = bmiCalculator(87, 1.77);
console.log(bmi);