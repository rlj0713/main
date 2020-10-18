
for (let i = 0; i < 40; i++) {
    console.log(fibonacci(i));
}

function fibonacci(i) {
    let a = ((1 + Math.sqrt(5)) / 2);
    let b = ((1 - Math.sqrt(5)) / 2);
    return Math.round(1 / Math.sqrt(5) * ((a ** i) - (b ** i)))
}
