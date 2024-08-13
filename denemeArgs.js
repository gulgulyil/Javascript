function deneme(f) {
    return (...args) => {console.log("cagrilan", args); // ... rest, dinlenme parametresi
    let sonuc = f(...args);
    console.log("cagrildi", args, ", donen", sonuc);
    return sonuc;    
    };
}
deneme(Math.min)(3,2,1);
deneme(Math,max)(10, 13, 56);
// cagrilan [3,2,1]
//cagrildi [3,2,1], donen 1
