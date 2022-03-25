class Person{
    constructor(name){
        this.name=name;
    }
    introduce(){
        console.log(this.name);
    }
}

class Potter extends Person{
    constructor(name){
        super(name);
    }
    
}

class Employee{
    constructor(Person){
        this.person = new Person("Xyz");
    }
    display=()=>{
        console.log(this.person.name);
    }
}

var cls = new Potter('DL');
cls.introduce();

var cls1 = new Employee(Person);
cls1.display();