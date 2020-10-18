
let sum = 0;

for (let i = 0; i < 36; i++) {
    if (fibonacci(i) % 2 == 0)
        sum += fibonacci(i);
        console.log(fibonacci(i), sum);
}

function fibonacci(i) {
    let a = ((1 + Math.sqrt(5)) / 2);
    let b = ((1 - Math.sqrt(5)) / 2);
    return Math.round(1 / Math.sqrt(5) * ((a ** i) - (b ** i)))
}

