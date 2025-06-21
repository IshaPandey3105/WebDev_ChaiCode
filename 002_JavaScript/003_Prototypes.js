// prototypes
// prototypes are functions that can be called on an object
// prototypes are used to add methods to an object
// prototypes are used to add properties to an object
//Array.prototype() = arr__proto__

// --------------POLLYFILS------------------
// polyfills are functions that add functionality to older browsers
// if a browser does not support a certain function, a polyfill can be used to add that functionality

// --------------- for each -------------------
if (!Array.prototype.myforeach) {
  Array.prototype.myforeach = function (userfn) {
    const origninalarr = this;
    for (let i = 0; i < origninalarr.length; i++) {
      userfn(origninalarr[i], i);
    }
  };
}

let arr = [10, 11, 12, 13, 14];
arr.myforeach(function (value, index) {
  console.log(`value at index ${index} is ${value}`);
});

// ------------------map--------------------
// map is a function that creates a new array from an existing array (IT RETURNS NEW ARRAY)
if (!Array.prototype.mymap) {
  Array.prototype.mymap = function (userfn) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
      const value = userfn(this[i], i);
      result.push(value);
    }
    return result;
  };
}

let brr = [1, 2, 3, 4];
const n = brr.map(function (value, index) {
  return value * 2;
});
console.log(n);

// now if i want to use both value and index
let crr = [1, 200, 3, 4];
const n1 = crr.mymap((a, index) => (index == 1 ? a * 2 : a));
console.log(n1);

// --------------------filter----------------
// filter is a function that creates a new array from an existing array
// filter is used to filter out certain elements from an array

if (!Array.prototype.myfilter) {
  Array.prototype.myfilter = function (userfn) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
      if (userfn(this[i])) {
        result.push(this[i]);
      }
    }
    return result;
  };
}

let drr = [1, 2, 3, 4, 5, 6];
const n2 = drr.myfilter((e) => e % 2 == 0);
console.log(n2);

// -----------------Reduce----------------------
const eee = [1,2,3,4,5];

if(!Array.prototype.myReduce){
    Array.prototype.myReduce = function(userfn , initialValue = undefined){
      let accumulator = initialValue ?? this[0]; // nullish coalescing operator
      const startIndex = initialValue ? 0 : 1;
        for (let i = startIndex; i < this.length; i++){
        accumulator = userfn(accumulator,this[i],i);
      }
      return accumulator;
    }
} 
const n3 = eee.myReduce((accumulator, current) => accumulator + current ,5);
console.log(n3);


// -------------------Promise---------------------
// Promise is a function that returns an object that has a then method
// then method is used to handle the result of the promise
// Promise is used to handle asynchronous operations
// Promise is a class as P capital

class MyPromise{

  constructor(executerfn){
    this._state = 'pending';
    this._successCallbacks =[];
    this._errorCallbacks =[];
    this._finallyCallbacks =[];
    this._value = undefined;
    executerfn(this.resolverFn.bind(this), this.rejectorFn.bind(this));
  }

  then(cb){
    if( this._state == 'fulfilled'){
      console.log(" aapka promise pehele hi resolve ho gyaa ,run hi kar deta hun")
      cb(this.value);
      return this;
    }
   this._successCallbacks.push(cb);
   return this;
  }
 
  catch(cb){
    if( this._state == 'rejected'){
      console.log(" aapka promise pehele hi reject ho gyaa ,run hi kar deta hun")
      cb();
      return this;
    }
   this._errorCallbacks.push(cb);
   return this;
  }

  finally(cb){
   if( this._state !== 'pending'){ 
    cb();
    return this;
   } 
   this._finallyCallbacks.push(cb);
   return this;
  }

  resolverFn(value){
    this.value = value;
    this._state = 'fulfilled';
    this._successCallbacks.forEach((cb) => cb(value));
    this._finallyCallbacks.forEach((cb) => cb());
  }
  rejectorFn(){
    this._state = 'rejected';
    this._errorCallbacks.forEach((cb) => cb());
    this._finallyCallbacks.forEach((cb) => cb());
  }
}

function wait(seconds){
  const p= new MyPromise((resolve, reject) =>{
    setTimeout(() => resolve("Hehe") , seconds * 0);  // executer function
  });
  return p;
}


const p = wait(5);

p.then((data) => console.log("Then after 5 sec",data))
  .catch(() => console.log("Catch after 5 sec"))   // callback function
  .finally(() => console.log("Finally after 5 sec"));


p.then((data) => console.log("****Then after 5 sec",data))
  .catch(() => console.log("*****Catch after 5 sec"))   // callback function
  .finally(() => console.log("*****Finally after 5 sec"));









// interview questions
Function.prototype.describe = function () {
  console.log(`Function name is ${this.name} `);
};

function greet(name) {
  // here name is parameter
  return `hello ${name}`;
}

greet.describe(); // This will give output "Function name is greet"
console.log(greet('isha')); // This is a normal fn
greet.describe('isha'); // here isha is argument






// ____Different Functions___

// 1.function declaration
function add(a,b){
  return a+b;
}

// 2.function expression
const subtraction = function(a,b){
  return a-b;
}

// 3.Arrow function
const multiply = (a,b) => {a*b};

// 4.first class function
function fn(a,b,operation){
  return operation(a ,b)  ;
}
// passing function as argument
const result1 = fn(5,6,add);
const result2 = fn(5,6, (x,y) => x+y);

// 5.function as return value
function creatCounter(){ // this fn is called higher order function
  let count = 0;
  return function(){
    count++;
    return count;
  }
}
const counter = creatCounter(); // here counter is getting a function 
console.log(counter()); // 1
console.log(counter()); // 2

// example 2
console.log("__________________");
function Ex(){ // this fn is called higher order function
  console.log(arguments);
  console.log(arguments[0]);
  return function(){}
} 
Ex(1,2,3,4,5); 
Ex("hitesh",5);
console.log("__________________");

// call - apply - bind
// call is used to call a function with a given this value and arguments and return the result of the function 
// apply is used to call a function with a given this value and an array of arguments 
// bind is used to bind a function with a given this value and arguments and return the function




// 6.Immediately Invoked Function Expression (IIFE)  
(function(){
  console.log('I am isha');
})()

// 7.settimeout function
console.log('START');
setTimeout(() => console.log('T'),1000*5);
setTimeout(function(){console.log('I am isha');},3000); // here 3000 is in millisecond
console.log('END');
// agr object hota aur usme koi fn bana dete then use call karte with some time condition we have to use bind method .
// process kya hai iski: pehele call stack me sab jata hai , then agr settimeout hai toh browser ki memory me jata hai, 
//  then vo callback queue me jata hai , then event loop (checks 2 condition) 1. is call stack empty & 2. is callback queue me kuch hai,
//  if both condition true then vo callback queue se call stack me jata hai , then vo execute ho jata hai , then vo call stack se delete ho jata hai.

// 8.setinterval function
// setInterval(() => console.log('I am isha'),3000);// it will run after every 1 second
// // to stop it we use clearInterval function
// clearInterval() ; // it will stop the interval function after 

// 9.Function For Unlimited values
function myFunction() {
  let sum=0;
  for(let i =0; i<arguments.length;i++){
    console.log(arguments[i]);
    sum=sum+arguments[i];
  }
  return sum;
}
let result_1 = myFunction(1000,2000,3000,4000,5000,6000,7000,8000,9000);
console.log("Sum is ::::",result_1)

// or

function myFunction(...numbers) {
  let sum=0;
  for(let i =0; i<numbers.length;i++){
    console.log(numbers[i]);
    sum=sum+numbers[i];
  }
  return sum;
}
let result_2 = myFunction(1000,2000,3000,4000,5000,6000,7000,8000,9000);
console.log("Sum is ::::",result_2)

// but in arrow function we can't use arguments keyword we have to use spread operator
const myFunction_1 = (...nums) =>{
  console.log(nums)
} 
myFunction_1(1111,5555,7777)

// hoisting in js is a mechanism where we can use a variable before declaring it
// also we can use a function before declaring it
// but we can't use a variable value before declaring it
// hoisting is only applicable for var keyword not for let and const keyword
// hoisting not applicable for arrow function

// 10. this keyword
// this keyword is a reference to the current execution context
// BUT IN ARROW FUNCTION THIS KEYWORD IS NOT APPLICABLE
