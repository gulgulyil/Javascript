var module = {
    x:42,
    getX:function(){
        return this.x;
    }
};
const unboundGetX = module.getX;
const boundGetX = unboundGetX.bind(module);
console.log(boundGetX());
