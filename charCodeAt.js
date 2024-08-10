//Diziler ve karakter kodlari - Strings and character code

let emojiler= "🍰😄"; //https://emojipedia.org/
console.log(emojiler.length);
console.log(emojiler[0]);
console.log(emojiler.charCodeAt(0));
console.log(emojiler.codePointAt(0));
for (let char of emojiler){
    console.log(char);
}
