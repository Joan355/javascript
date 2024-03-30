class User{}

//const newUser = new User();

class user{
    //metodos 
    greeting(){
        return "Hello";
    }
}

const gndx = new user();
console.log(gndx.greeting());
const bebeloper = new user();
console.log(console.bebeloper.greeting());

class user{
    constructor(){
        console.log("Nuevo usuario");
    }

    greeting(){
        return "Hello";
    }
}
const david = new user();


//this 


class user{
    constructor(name, age){
        this.name= name;
        this.age = age;
    }

    speak(){
        return "hello"
    }

    greeting(){
        return `${this.speak()} ${this.name}`;
    }

    get uAge(){
        return this.age
    }
    set uAge(n){
        this.age = n
    }
}

const ana = new user("Ana",12);
console.log(ana.greeting());
console.log(ana.uAge = 20);
console.log(ana.uAge);