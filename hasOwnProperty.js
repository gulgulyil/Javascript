console.log({x:1}.hasOwnProperty("x")); //True
console.log({x:1}.hasOwnProperty("toString")); //False
console.log({asd:1}.hasOwnProperty("sdf")); // False "sdf"nin asdnin icinde bir yeri konumu var mi onu kontrol ediyor
