//ileri seviye diziler - further arrayology
let todoList = [];
function hatirla(nesne) {
    todoList.push(nesne)
}

function ilkiniSil(){
    return todoList.shift();
}

function geriEkle(nesne) {
     todoList.unshift(nesne);
}

hatirla("nesne1");
hatirla("nesne2");
hatirla("nesne3");
console.log(todoList);
ilkiniSil();
console.log(todoList);
geriEkle("sut");
console.log(todoList);
