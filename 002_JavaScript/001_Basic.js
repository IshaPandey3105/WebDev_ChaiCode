// Basic
console.log("Hello");

function Chocolate(num) {
  console.log(`Chocolate ${num}th was delicious`);
}
function Addition(a, b) {
  return a + b;
}
Chocolate(5);
console.log(Addition(5, 7));

// DataTypes
let name = "ram"; // string
let age = 25; // number
let ispaid = false; // boolean
let city; // undefined(baad me batayenge)
let favclass = null; // khali
console.log(favclass);

let skills = ["html", "css", "Javascript"]; // array
console.log(skills[0]);
console.log(typeof skills); // object

let StudentProfile = {
  name: "ram",
  age: 25,
  ispaid: true,
  city: "delhi",
  favclass: null,
  skills: ["html", "css", "Javascript"],
};
// primitive - string, number, boolean, null, undefined
// non-primitive - object, array, function

// conditionals
let Age;
function checkAge(Age) {
  if (Age > 18) {
    console.log("You are adult you can vote");
  } else if (Age === 18) {
    console.log("You turned 18,you can vote");
  } else {
    console.log("You are not adult");
  }
}
checkAge(18);
console.log(Age === 20);

// Arrays
let fruits = ["apple", "banana", "cherry"];
let intfruits = new Array("kiwi", "Avocado", "Dragon fruit");
fruits[3] = "Mango";
console.log(fruits);

//length
console.log(fruits.length);

// findingindex
console.log(fruits.indexOf("banana")); // 1

// slicing
let index = fruits.indexOf("banana")
if (index !== -1) {
  fruits.slice(0, 2)
}
// console.log(fruits.slice(0, 2)); 
console.log(fruits);

fruits.forEach((fruit , index) => {
  console.log(`${index } : ${fruits[index]}`);
});

// concatenation
let name1 = "ram";
let name2 = "shyam";
console.log(name1 + " " + name2);

// catenation of 2 arrays
let name3 = ["ram", "shyam"];
let name4 = ["kumar", "sharma"];
console.log(name3.concat(name4)); 

// other way
let name5 = [...name3, ...name4];
console.log(name5);

// push 
intfruits.push("plums");
console.log(intfruits);

// intfruits.unshift("Blue-Berry");

// pop
let elem=intfruits.pop();
console.log(elem);
console.log(intfruits);

// sort
intfruits.sort();
console.log(intfruits);
console.log(intfruits.length);

// loops

let number = [1, 2, 3, 4, 5];
function sum(array) {
  let a = 0;
  for (let i = 0; i < number.length; i++) {
    a = a + number[i];
    // a+=number[i];
  }
  return a;
}
let result = sum(number);
console.log(result);

const person = {
  name: "Isha",
  age: 20,
  ismarried: false,
  city: "delhi",
  favclass: "chai-code",
  skills: ["html", "css", "Javascript"],
  address: {
    street: "street1",
    Country: "India",
    state: "delhi",
    pincode: 110001,
  },
  instruction : "near rohini"
};
console.log(person.instruction);
console.log(person.name);
console.log(person.skills[1]);
console.log(person.address);
console.log(person.address.Country);

// lets update the person object

let updatedPerson ={
  ...person,
  name: "yash",
  instruction : "near rohini west"
}
console.log(updatedPerson);


let p1=person;
console.log(p1.name);
p1.age=15;
console.log(person.age);

// let p2={
//   name:person.name,
//   age:person.age
// } 
let p2={
  ...p1  // spread operator

}
p2.name="yash"
p2.address.state="MP"
console.log(p2.name,p2.age,p2.address.state) 
console.log(p1.name,p1.age,p1.address.state)

const p3= JSON.stringify(p1)  // convert object to string
console.log(p3);
let p4=JSON.parse(p3)  // convert string to object
console.log(p4)


// function
function check(val){
  if(val){
    console.log("value is true");
  }
  else{
    console.log("value is false");
    }
}
check(true);
check(1);
check("hello");
check(" ");
check(false);
check(0);
check([]);
check([1,2,3]);
 


// reduce
let num1=[1,2,3,4,5];
let sum1=num1.reduce((acc,cur)=>acc+cur,0);
console.log(sum1);

let sales =[
  {name:"apple",price:100},
  {name:"banana",price:200},
  {name:"orange",price:300},
]
let total=sales.reduce((acc,cur)=>acc+cur.price,0);
console.log(total);

// finding most active user using reduce
let users=[
  {user:"Isha" , activity:10},
  {user:"Yash" , activity:20},
  {user:"Annu" , activity:30},
]
let mostActiveUser=users.reduce((acc,cur)=>{
  if(acc.activity>cur.activity){
    return acc;
  }
  else{
    return cur;
  }
});
console.log(mostActiveUser);

// map
let num2=[1,2,3,4,5];
let doubleNumbers=num2.map((num)=>num*2);
console.log(doubleNumbers);

// filter
let num3=[1,2,3,4,5];
let evenNumbers=num3.filter((num)=>num%2==0);
console.log(evenNumbers);

//using filter lets find amount<50
let products=[
  {name:"apple",price:100},
  {name:"banana",price:20},
  {name:"orange",price:300},
  {name:"grapes",price:40},
]

let productsUnder50=products.filter((item)=>item.price<50);
console.log(productsUnder50);

// or
let productsUnder50_1=products.filter((item)=>{
   return item.price<=50;
});
console.log(productsUnder50_1);

