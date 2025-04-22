let calc={
    total:0,
    add(a){
    this.total+=a
    return this
    },
    multiply(b){
    this.total*=b
    return this
    },
    subtract(c){
        this.total-=c
        return this
    }
}
const result=calc.add(10).multiply(4).subtract(5).add(4)
// console.log(result.total)


// TODO: match the condition if(a==1 && a==2 && a==3)

let myObj={
    a:0,

    toString(){
        this.a+=1
        return this.a
    },

    // OR

    valueOf(){
        this.a+=1
        return this.a
    }
}
// if(myObj==1 && myObj==2 && myObj==3){
// console.log("meet")
// }

//TODO: infinite curring fn 


function parent(initialValue) {
    let myVal = initialValue;

    function firstChild(val1) {
        if (val1) {
            myVal += val1;
            return parent(myVal);
        }
        return myVal;
    }

    return firstChild;
}

const myFun=parent(10)(20)(3)()
console.log(myFun)

//TODO: object comparison

let obj1 = { a: 4, b: { a: { b: 2 } } }
let boj2 = { a: 4, b: { a: { b: 2 } }, }

const objComp = (obj1, obj2) => {
    if (obj1 === null || obj2 === null || typeof obj1 !== 'object' || typeof obj2 !== 'object') {
        return obj1 === obj2;
    }
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) {
        return false;
    }
    for (let key of keys1) {
        if (!obj2.hasOwnProperty(key)) {
            return false;
        }
        if (!objComp(obj1[key], obj2[key])) {
            return false;
        }
    }
    return true;
};

// console.log(objComp(obj1, boj2))

//TODO: random hex color