function normalize(){
    console.log(this.koordinasyon.map(n => n / this.length));
}
normalize.call({koordinasyon: [0, 2, 3], length : 5});
