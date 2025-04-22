const myArray = [3, 5, 7, 9, 2, 1, 9, 4, 6, 8, 0];

//TODO: forEach polyfill

Array.prototype.myForEachPollyFill = function (cb) {
    if (typeof cb !== 'function') {
        throw new TypeError(cb + ' is not a function');
    }
    if (!Array.isArray(this)) {
        throw new TypeError("iterable val should be an array");
    }

    for (let i = 0; i < this.length; i++) {
        cb(this[i], i, this);
    }
};  // put semicolon for finish the statement of prototype

// myArray.myForEachPollyFill((element, index, array) => {
//     console.log(`Element: ${element}, Index: ${index}`);
// })

//TODO: map polyfill

Array.prototype.myMapPollyFill = function (cb) {
    if (typeof cb !== 'function') {
        throw new TypeError(cb + ' is not a function');
    }
    if (!Array.isArray(this)) {
        throw new TypeError("iterable val should be an array");
    }
    let arr = []
    for (let i = 0; i < this.length; i++) {
        const modifyVal = cb(this[i], i, this);
        arr.push(modifyVal)
    }
    return arr
};
// let arrVal=myArray.myMapPollyFill((element, index, array) => {
//     return element*2
// })

//TODO: reduce polyfill

Array.prototype.myReducePollyFill = function (cb, initialVal = {}) {
    if (typeof cb !== 'function') {
        throw new TypeError(cb + ' is not a function');
    }
    if (!Array.isArray(this)) {
        throw new TypeError("iterable val should be an array");
    }
    let accumulator = initialVal
    for (let i = 0; i < this.length; i++) {
        accumulator = cb(accumulator, this[i], i, this) || this[i];

    }
    return accumulator
};
// let arrVal=myArray.myReducePollyFill((acc,val) => {
//     acc+=val
//     return acc
// },0)

//TODO: flat polyfill


Array.prototype.myFlatPolyfill = function (depth = 1) {
    if (!Array.isArray(this)) {
        throw new TypeError("This is not an array");
    }

    let flatedArr = [];

    const flatten = (arr, currentDepth) => {
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i]) && currentDepth < depth) {
                flatten(arr[i], currentDepth + 1);
            } else {
                flatedArr.push(arr[i]);
            }
        }
    };

    flatten(this, 0);

    return flatedArr;
};

//TODO: call  polyfill

Function.prototype.myCall = function (context = globalThis, ...args) {
    if (typeof context !== "function") {
        throw new TypeError(context + " should be function")
    }
    let fn = this
    context.fn = fn   
    // context.fn(...args)
    if (!Array.isArray(args)) {
        throw new TypeError(args + " must be array")
    }
    context.fn(...args)
}
// TODO: apply polyfill

myArray.call({},)
Function.prototype.myApply = function (context = globalThis, args) {
    if (typeof context !== "function") {
        throw new TypeError(context + " should be function")
    }
    let fn = this
    context.fn = fn

    if (!Array.isArray(args)) {
        throw new TypeError(args + " must be array")
    }
    context.fn(...args)
}

// TODO: bind polyfill
Function.prototype.myBind = function (context = globalThis, ...args1) {
    if (typeof context !== "function") {
        throw new TypeError(context + " should be function")
    }
    let fn = this
    context.fn = fn
    return function (...arg2) {
        return context.fn(...args1, ...arg2)
    }
}

// globalThis is ECMA script 2020 feature 
/*
if (typeof globalThis === 'undefined') {
// Check for the various possible global objects
if (typeof self !== 'undefined') {
globalThis = self;  // In web workers or browsers, 'self' refers to the global object
} else if (typeof global !== 'undefined') {
globalThis = global;  // In Node.js, 'global' refers to the global object
} else if (typeof window !== 'undefined') {
globalThis = window;  // In browsers, 'window' is the global object
} else {
// If none of these are found, throw an error, as there’s no global object
throw new Error('Unable to determine the global object');
}
}
*/ 

