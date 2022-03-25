function outer(){
const variable = 100;
    return function inner(){
        console.log(variable);
    }
}

outer()();