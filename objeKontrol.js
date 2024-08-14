let birObje = {
    sol: 1,
    sag: 2
};
if("sol" in birObje){
    //buraya bir islem yazilabilir eger dogru ise
}
console.log(birObje.sol);
delete birObje.sol;
console.log(birObje.sol);
console.log("sol" in birObje); //sol diye bir objenin olup olmadigini kontrol eder birObje icinde
