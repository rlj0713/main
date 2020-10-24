
// Get Composite Numbers
function isComposite(a) {
    for (let i = (a - 1); i > 1; i--) {
        if (a % i == 0) {
            return true
        }
    }
}

// Print all Primes between 2 numbers
function printPrimes(low, high) {
    for (let i = low; i < high; i++) {
        if (isComposite(i) !== true)
            console.log(i);
    }
}

printPrimes(2, 100);

