
//TODO: check palindrome

let str="abcdedcba1"
let start=0;
let end=str.length-1
let isPalindrome=true
while(start<=end){
    if(str[start]!==str[end]){
    isPalindrome =false
    break
    }
    start++
    end--
}
// console.log(isPalindrome)

let str1="abcde"
let str2="bacpd"
let mySet=new Set([...str1])
if(str1.length===str2.length){
for(let val of str2){
    if(mySet.has(val)){
        mySet.delete(val)
    }
}
}

// console.log(mySet.size)

let colorStr="0123456789ABCDEF"
let color="#"

for(let i=0;i<6;i++){

const randomIndx=Math.floor(Math.random()*colorStr.length)
color+=colorStr[randomIndx]
}
// console.log(color)


//TODO: reverse string using recursion 

// let myString="abcdefg"

// function strReverse(str){
//     if(!str.length){
//         return ""
//     }
//    return strReverse(str.slice(1)) + str.charAt(0)
// }

// console.log(strReverse(myString))