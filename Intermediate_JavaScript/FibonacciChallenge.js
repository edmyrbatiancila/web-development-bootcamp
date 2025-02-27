const fibonacciGenerator = (number) => {
    let output = [];
    if(number === 1) {
        output.push(0);
    }else if(number === 2) {
        output.push(0, 1);
    } else if(number > 2) {
        output.push(0, 1);
        for(let i = 2; i < number; i++) {
            output.push(output[i-2] + output[i-1]);
        }
    }

    console.log(output);
}

fibonacciGenerator(2);