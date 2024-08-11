//Maps, haritalama
let yas = {
    Baris: 39,
    Leyla: 22,
    Hulya: 62
};

console.log("Hulya", yas["Hulya"], "yasinda.");
console.log("Osman" in yas); // False
console.log("toString" in yas); // True
console.log(typeof yas.Baris);
