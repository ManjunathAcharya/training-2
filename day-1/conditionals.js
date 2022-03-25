let x= 100;

if(x>0){
    console.log(x+' greater than 0');
}else{
    console.log(x+' less than or equa to 0');
}
(x>0) ? console.log(x+' greater than 0') : console.log(x+' less than or equa to 0');

//Flasey values : false, 0, undefined, null, ''

x = [false,0,-1,1,undefined,null,'','xyz',{name:"Manju"},{},[1,2,3],[]];

for(let item of x){
    (item) ? console.log(item+' is true') : console.log(item+' is false');
}

let obj={name:"Manju",missing:{name:"DL"}}
func(obj)
 obj={name:"Manju",missing:{name:null}}
func(obj)
 obj={name:"Manju",missing:{}}
func(obj)
 obj={name:"Manju"}
func(obj)

function func(arg){
    let ar = arg || 20;
    console.log(arg?.missing?.name);
}
let foo = null ?? 'default';
console.log(foo);
 foo = null || 'default';
console.log(foo);
foo = 0 || 4;
console.log(foo);
foo = 0 ?? 4;
console.log(foo);

let z=5;
if(z==5)
console.log("is equal");

if(z=="5"){
    console.log("is equal");
}

if(z==="5"){
    console.log("is equal");
}else{
    console.log("is not equal");
}

if(true == 'true'){
console.log("is equal");
}else{
    console.log("is not equal");
}

let obj1=obj2={};
if(obj1==obj2){
    console.log("is equal");
    }else{
        console.log("is not equal");
    }

    if(obj1===obj2){
        console.log("is equal");
        }else{
            console.log("is not equal");
        }

        //Deeply compare object & reference compare objects