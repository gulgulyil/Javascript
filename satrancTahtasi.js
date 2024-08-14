var boyut = 8;
var tahta = "";

for(var y=0; y < boyut; y++){
    for(var x=0; x < boyut; x++){
        if((x + y) % 2 === 0) tahta += "  ";
        else tahta += "#";
    }
    tahta += "\n";
}
console.log(tahta);

// Bitwise ile satranc tahtasi

console.log((new Array(65).join().split("")).map(function(v,i){
    return((i/8 >> 0) % 2 ? (i%2 ? " " : "#") : (i%2 ? "#" : " ")) //? isaretleri if else yapisini temsil eder
    +((i+1) % 8 ? " " : "\n");}).join(""));
