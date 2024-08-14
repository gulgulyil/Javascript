// Opsiyonel Argumanlar
function cikarma(a, b){
    if( b === undefined ) return -a;
    else return a-b;
}
console.log(cikarma(10));
console.log(cikarma(10, 5));
