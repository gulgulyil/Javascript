const ust = (taban, carpan) => {
    let sonuc = 1;
    for (let sayim = 0; sayim < carpan; sayim++){
        sonuc *= taban;
    }
    return taban+" in "+carpan+"inci ustu = " + sonuc;
};
//constu kullaninca islemi ; ile kapatmak grekiyor, 

console.log(ust(4,6));
