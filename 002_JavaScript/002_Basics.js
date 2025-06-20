let person = {
  name: "Isha",
  age: 20,
  // ismarried: false,
  // city:"delhi",
  // favclass: "chai-code",
  // skills:["html",'css',"Javascript"],
  address: {
    street: "street1",
    Country: "India",
    state: "delhi",
    pincode: 110001,
  },
  greet: function() {
    console.log(`Hello ${this.name}`)
  },
};

let person2 ={ 
  name: "Ravi",
}

// call and bind method 

person.greet(); // Hello Isha
person.greet.call(person2);  // call will change the context of this to person2  
person.greet.call({name :"Bob"}); // // call will change the context of this
let newfn=person.greet.bind(person2);  // bind will return a new function
newfn();  // this will call the function with person2 as context


console.log(person.name);
console.log(person.skills);
console.log(person.address);
console.log(person.address.Country);

let p1 = person;
console.log(p1.name);
p1.age = 15;
console.log(person.age);

let p2 = {
  ...p1,       // spread operator
};

// stack- stores primitive values 
// heap- stores objects,arrays {non -primitive values}

p2.name = "yash";
p2.address.state = "MP";
console.log(p2.name, p2.age, p2.address.state);
console.log(p1.name, p1.age, p1.address.state);

const p3 = JSON.stringify(p1); // convert object to string
console.log(p3);
let p4 = JSON.parse(p3); // convert string to object
console.log(p4);

// shallow copy - pass by reference  and deep copy - pass by value

console.log("JavaSript")
// type conversions 
let num="42";
let convertednum = Number(num);
// let convertednum = +num;
// let convertednum = parseInt(num);
console.log(typeof convertednum);


console.log(Math.max(5,10));
console.log(Math.min(5,10));
console.log(Math.random());  // returns a random number between 0 and 1
console.log(Math.floor(Math.random()*6)+1);  // returns a random number between 1 and 6

let myname="isha";
let intro=`hello ${myname}`;
console.log(myname);
console.log(intro);

