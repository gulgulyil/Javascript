
function konus(hat){
    console.log(this.type, "tavsan diyor ki:", hat);
}

let beyazTavsan = {
    type: "Beyaz", konus
};
let acTavsan = {
    type: "Ac", konus
};
beyazTavsan.konus("Kulaklarim ve biyiklarim askina, " + "be kadar gec oluyor");
acTavsan.konus("Su an havuc yiyebilirdim");
konus.call(acTavsan, "cokkkkk acimmmmm :(");
