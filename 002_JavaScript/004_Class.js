// class in js
// classes are used to create blueprints for objects
// classes are used to create objects that share the same properties and methods

// constructor is a special method that is called when an object is created from a class
// this keyword is used to refer to the current object
// Types of constructos are : Default ,Parameterized ,Copy, Static, Private, Protected, Friend constructor

class Person {
    constructor(name,age){
        this.name=name;
        this.age=age;
        // console.log(this.get());
    }
    get(){
        return `${this.name} ${this.age}`;
    }
} 
 
// basically it is syntatical sugar for function constructor
// p1__proto__= Person.prototype;

const p1=new Person('John',30);
const p2=new Person('bob',20);

console.log(p1.get());
console.log(p2.get());


// Inheritance
// Inheritance is a mechanism in which one class can inherit 
// the properties and methods of another class.

class A {
    Asetdata(){
        console.log('data set in A');
    }
}

class B extends A {
    Bsetdata(){
        console.log('data set in B');
    }
}

const b=new B();
b.Bsetdata();
b.Asetdata();