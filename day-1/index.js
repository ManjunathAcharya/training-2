console.log("hello world");

let x=100;
x=250;
const y=200;

var z=300;
z=500;

console.log(x,y,z);

var obj = {name:"Manju", name: "DL"};
console.log(obj.name);

var nestedObj = {name: {firstname : "Manju", lastName:"DL"}};

console.log(nestedObj.name.firstname+" "+nestedObj.name.lastName);

var arr = [100,200,300];

for(let i =0;i<arr.length;i++)
{
    console.log(arr[i]);
}

console.log(typeof arr)
console.log(Array.isArray(arr))


