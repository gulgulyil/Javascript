const json = '{"sonuc":true, "sayma":42}';
const obj = JSON.parse(json);//JSON objesini javascripte kullanilir haale getiriyor

console.log(obj.sayma);
console.log(obj.sonuc);
