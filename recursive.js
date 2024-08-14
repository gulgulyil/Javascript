function usluifade(taban, carpan){
    if( carpan=== 0){
        return 1;
    }else {
        return taban * usluifade(taban, carpan-1);
    }
}
//Kendi kendini cagiran 1de son bulan fonksiyor

console.log(usluifade(4,4));
