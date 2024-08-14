const aylar =['Ocak', 'Mart', 'Nisan', 'Haziran'];
aylar.splice(1, 0 , 'Subat'); // splice(idex, silinecekSayisi, deger)
console.log(aylar);

aylar.splice(4, 1, 'Mayis'); //  4. indexe mayisi ekler, sayi 1 oldugu icin hairani siler
//ikinci sayi 0 olunca hic birseyi silmez. Ikinci sayi da sondan index silinecek sayinin
console.log(aylar);
aylar.push('Haziran'); //sondan siliyor
console.log(aylar);
