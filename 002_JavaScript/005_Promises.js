                  //---------Impotant Deep Js Topics-----------

// settimeout 
console.log('START');
setTimeout(() => console.log('T'),1000*5);
setTimeout(function(){console.log('I am isha');},3000); // here 3000 is in millisecond
console.log('END');
// agr object hota aur usme koi fn bana dete then use call karte with some time condition we have to use bind method .
// process kya hai iski: pehele call stack me sab jata hai , then agr settimeout hai toh browser ki memory me jata hai, 
//  then vo callback queue me jata hai , then event loop (checks 2 condition) 1. is call stack empty & 2. is callback queue me kuch hai,
//  if both condition true then vo callback queue se call stack me jata hai , then vo execute ho jata hai , then vo call stack se delete ho jata hai.

// setinterval function
// setInterval(() => console.log('I am isha'),3000);// it will run after every 1 second
// // to stop it we use clearInterval function
// clearInterval() ; // it will stop the interval function after 


// Promises

console.log("Hi");
setTimeout(() => console.log("Hello after 0s"),0);
setTimeout(() => console.log("Hello after 3000ms"),3000);

Promise.resolve().then(() => {
    console.log("Promise Resolved")

    Promise.resolve().then(() => {
        console.log("Promise Resolved")

        Promise.resolve().then(() => {
            console.log("Promise Resolved")
        });
        // starvation can occure her if we repeat this process many times.
        // as micro task queue run karta jayega but task queue ki bari nahi aayegi
    });

});
console.log("Bye");

// promise has 3 states
// 1. pending is the initial state of a promise
// 2. fulfilled is the state of a promise that has successfully completed
// 3. rejected is the state of a promise that has failed to complete
// (4. settled is the state of a promise that has either fulfilled or rejected)

// promise has 3 functions
// 1. then() - used to handle the fulfilled promise
// 2. catch() - used to handle the rejected promise
// 3. finally() - used to handle both fulfilled and rejected promise(har bar run hoga)



// Hoisting
// var is hoisted and initialized as undefined.
console.log(a); // undefined
var a = 10;

// console.log(b); // ❌ ReferenceError
// let b = 20;
// let (and const) are hoisted but not initialized.
// This creates something called the "Temporal Dead Zone" (TDZ) — the time between hoisting and initialization.


// Proxy 

const user={
    name:'Isha',
    age:20,
    password:'123'
}

const proxyUser = new Proxy(user,{
    get(target,prop){
        console.log(prop);
        if(prop=="password"){
            throw new Error("Password is not accessible");
        }
        return target[prop];
    },
    set(target,prop,value){
        if(prop=="password"){
            throw new Error("Password is not accessible");
        }
        return target[prop]=value;
    }   
})
console.log(proxyUser.name); // name
console.log(proxyUser.age); // age
// console.log(proxyUser.password); // ❌ Error: Password is not accessible
// proxyUser.password = '123'; // ❌ Error: Password is not accessible
proxyUser.age = '40'; 
console.log(proxyUser.age); 
console.log(user);

// Negative Indexing through proxy

const arr=[1,2,3,4,5]

function negativeIndex(arr){
    return new Proxy(arr,{
        get(target,prop){
            const index = Number(prop);
            if(index < 0){
                return target[target.length + index];
            }
            return target[prop];
        },
        set(target,prop,value){
            const index = Number(prop);
            if(index < 0){
                target[target.length + index] = value;
            }
            return target[prop]=value;
        }
    })
}
console.log(arr[-1]); // undefined
let newArr=negativeIndex(arr);
console.log(newArr[-1]); // 5
newArr[-1]=100;
console.log(newArr); 
console.log(arr); 

// when promises was not their (we used callbacks) but now  we can use them to handle asynchronous operations.
// callback hell : callback hell is a situation where a function is called and 
// it calls another function and that function calls another. (forms a triangle)


// now to convert legacy code into modern code we use custom promises

// Promisification ( converting legacy code into modern code)

const fs = require('fs');

console.log("START Promise");

function readFileWithPromise(filePath,encoding){
    return new Promise ((resolve,reject) =>{
        fs.readFile(filePath,encoding,(err , content) =>{
           if(err){
                reject(err);
           }else{
            resolve(content);
           }
        });
    });
}

function writeFileWithPromise(filePath,encoding){
    return new Promise ((resolve,reject) =>{
        fs.writeFile(filePath,content,function(err ) {
           if(err){
                reject(err);
           }else{
                resolve(content);
           }
        });
    });
}

function unlinkWithPromise(filePath){
    return new Promise ((resolve,reject) =>{
        fs.unlink(filePath ,function(err ) {
            if(err){
                 reject(err);
            }else{
                 resolve(content);
            }
         });
    });
}

// multiple Async code is running in Sync fashion
readFileWithPromise('./hello.txt','utf-8')
 .then((content) => writeFileWithPromise('./backup.txt',content))
 .then(() => unlinkWithPromise('./hello.txt'))
 .catch((e) => console.log(e))
 .finally(() => console.log('done'));

 //-------------Or-----------------

// now to convert legacy code into modern code we use async/await
// async function is a function that returns Promise and it can be used with await keyword
// await keyword is used to pause the execution of the code until the promise is resolved or rejected
// this will make the code look like synchronous code
// ---------SYNTACTIC SUGAR--------------
async function doTask(){
    try{
        const fileContent = await readFileWithPromise('./hello.txt','utf-8');
        await writeFileWithPromise('./backup.txt',fileContent);
        // await wait(10) // this will pause the execution for 10 seconds
        await unlinkWithPromise('./hello.txt');
    } catch(e) {
        console.log(e);
    } finally {
        console.log('OK Done');
    }
}

// now if i want to unlink file after 10 seconds
function wait(seconds){
    return new Promise((resolve,reject) =>{
    setTimeout(() => resolve, (seconds * 1000));
    });
}
doTask().then(() => console.log('Task Done'))

console.log("ENDInNG"); // this will print first because it is not inside any promise or async function

 