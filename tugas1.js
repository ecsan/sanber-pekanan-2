const prompt = require('prompt-sync')({ sigint: true });

//
function akarPangkatDua(x) {
    if (x < 0) {
        return "Tidak bisa input bilangan negatif";
    } else if (x % 2 !== 0) {
        return "Tidak bisa input bilangan ganjil";
    } else {
        return Math.sqrt(x);
    }
}

// Contoh penggunaan
const num1 = prompt('Enter a Number: ');
const result = akarPangkatDua(num1);
console.log(result);