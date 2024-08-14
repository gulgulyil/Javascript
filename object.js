let gun1 = {
    sincap : false,
    events : ["calisma", "agaca sarilma", "pizza yeme", "kosma"]
};
console.log(gun1.sincap); //false
console.log(gun1.kurt); //undefined
gun1.kurt = false; //kurtu gun1e eklenir
console.log(gun1.kurt); // false
console.log(typeof gun1); //object
