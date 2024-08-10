function tekrar(n, aksiyon) {
    for (let i=0; i<n; i++) {
        aksiyon(i);
    }
}   //5 + (10 * 1) =15

tekrar(6, console.log); // 

let etiket = [];
tekrar (6, i => { // arrow function
i++;
etiket.push("Javascript "+i);    
});
console.log(etiket); //
