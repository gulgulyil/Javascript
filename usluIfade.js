function usluIfade(taban, ust = 2){
    let sonuc = 1;
    for (let x = 0; x < ust; x++){
        sonuc *= taban;
    }
    return sonuc;
}

console.log(usluIfade(4));
console.log(usluIfade(2,6));
