
let sum = 0;

for (let i = 0; i < 36; i++) {
    if (fibonacci(i) % 2 == 0)
        sum += fibonacci(i);
        console.log(fibonacci(i), sum);
}

function fibonacci(i) {
    x = Math.sqrt(5);
    let a = ((1 + x) / 2);
    let b = ((1 - x) / 2);
    return Math.round(1 / x * ((a ** i) - (b ** i)))
}

