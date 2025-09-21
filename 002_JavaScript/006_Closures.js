// Lexial Scoping
// global execution context has 2 parts : memory and code 
// function execution context is present inside GEC

// Lexical scoping is a convention that determines how variables are accessible in a block of code
// Clouser function (functions binded by its lexial scope)
// Closure is a fn that has access to its outer fn even when the outer fn is no longer in execution
function createCounter(){
    let count = 0;

    function increment(){   // cLOSURE FN :  a fn returning a fn with its lexical scope binded.
        count++;
        return count;
    };
    return increment;
};

let C1 = createCounter(); // here createCounter is called and it returns a function
let C2 = createCounter(); // returned fn only contain the variable count soo no effect of initial count value

console.log(C1());
console.log(C1());
console.log(C2());   
console.log(C2());
console.log(C1());

// it has memory leak because it is not garbage collected
C1 = null;  
C2 = null;
console.log(C1());  // error because C1 is now null


// debaounce function
function debounce(func, delay) {
    let timeoutId = null;
    return function () {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(func, delay);
        // timeoutId = setTimeout(() =>func.apply(this, args), delay);
    };
};

// function to be debounced
function sayHello(name) {
    console.log(`Hello ${name}!`);
}

// debounced function
const debouncedHello = debounce(sayHello, 3000);
debouncedHello('isha'); // will not log anything



