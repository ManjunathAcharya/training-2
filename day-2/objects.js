const x =  Object.create(null);
//console.log(x);

const animal = {
    speak : () =>{
        console.log("woof");
    }
};
//console.log(animal.speak());

const cat = Object.create(animal);

//console.log(cat.speak());

const persiancat = Object.create(cat,{color:{value:"white"}})

console.log(persiancat.color)