// Yuksek duzey fonksiyonlar / Higher - order functions

function buyuktur(n) {
    return m => m > n;
}
let buyuktur10 = buyuktur(10);
console.log(buyuktur10(11));
buyuktur(10);
