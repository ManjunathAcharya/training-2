function Hello(){
    console.log("Hello");
}
Hello();
console.log(typeof Hello);

const x = function(){
    console.log("anonymous");
    return 100;
}

console.log(x(), typeof x);

const y = (num1,num2) =>{
    return num1+num2;
}

console.log(y(1,2));

function innerFunc(increnent){
    return function(args){
        return args+increnent;
    }
}
console.log(innerFunc(5)(3));

const z = increnent => args => increnent+args;
console.log(z(5)(3));


