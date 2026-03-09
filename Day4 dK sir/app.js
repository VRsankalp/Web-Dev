


// const add = (a,b)=>a+b;
// let rs  = add(1,4);
// console.log(rs)
// add1(add)
// function add1(add){
//     console.log("hello");
//     console.log(add())
// }

// //--------------------------------------------------------------\\
// const add=(a,b)=>a+b
// const minus=(a,b)=>a-b
// const opt = (a , b , operation)=>operation(a , b);
// // const a=parseInt(prompt("Enter val1"))
// // const b=parseInt(prompt("Enter val2"))
// const jk =prompt("enter the opertaion")
// const st = opt(30 , 50 ,jk=="+"?add:minus)
// // const st2 = opt(a,b,minus)
// console.log(st)
// // console.log('st2', st2)
//---------------------------------ARRAYs------------------------------\\
const a = new Array(1,23)
const b = [1,23]
console.log(a==b);
a.push(32);
b.push(23)

// const check=(a)=>a%2==0?"even":"odd"
// console.log(check(25))
a.unshift(232);
a.shift();
a.pop();
a.push(2322);
console.log(a , b);