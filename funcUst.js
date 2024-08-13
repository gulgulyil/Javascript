console.log(Math.pow(2,5));

const ust = function(taban, ust){
    let sonuc = 1;
    for(let x = 0; x< ust; x++){
        sonuc*= taban;
    }

    return sonuc;
};
console.log(ust(4, 4));
