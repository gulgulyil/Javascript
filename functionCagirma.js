//Mozilla development network
x = 9;
var module = {
    x:81,
    getX: function () {
        return this.x;
    }
};
console.log(module.getX()); //81
var getX = module.getX;
console.log(getX());
var boundGetX = getX.bind(module); //return this.x = 9
console.log(boundGetX());
