//Hesaplama korelasyonu - Computing correlation

function hesap(deger){
    return(deger[3] * deger[0] - deger[2] * deger[1]) / Math.sqrt((deger[2]
        +deger[3]) * (deger[0] + deger[1]) * (deger[1] + deger[3]) * (deger[0] + deger[2]));
}
console.log(hesap([6,7,13,42,34,12,565,34,23]));
