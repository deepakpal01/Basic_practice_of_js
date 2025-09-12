// user se input lena in node js

// const { conforms } = require("lodash");




//     function c(){
//         console.log(a);
//     };
//     return c;
// }
// let v=b();
// console.log(v());

// const { forIn, indexOf, findKey } = require("lodash")


// debugger
// a =10;
// b=20;
// console.log(a);
// console.log(b);
// console.log("hillo i am deepak");


// reverse an array
// let arr = [1,2,3,4,5];
// let n = arr.length;
// for(let i=0;i<=Math.floor(arr.length/2);i++){
//     let temp = arr[i];
//     arr[i]= arr[n-1-i];
//     arr[n-1-i]=temp;
// }
// console.log(arr);

// print the number which is divishval by 5
// let a=1;
// let count=0
// while (a<=100) {
//     if(a%5==0){
//         count++;
//     }
//     a++;
// }
// console.log(count);

// to find the value of divisval by 5 in range of 1 to 100
// let num=1;
// while(num<101){
//     if(num%5==0) {console.log(num);}
//     num++;
// }

// let obj = {
//     firstName:"deepak",
//     lastName:"kumar",
//     age:21,
// }
// for(let key in obj) console.log(keys.indexOf(key));

// object in js

// let obj = {
//     name1:"deepak",
//     boo:true,
//     num1:1,
//     num2:0,
//     obj1:[1,2,3,4,5,6],
//     "is here":"hello",
//     obj2:function(){
//         return this.obj1;
//     },
// }

// console.log(obj.obj2);
// console.log(obj[this.obj1]);
// console.log(obj["obj2"]);


// let obj = {
//     name1: "deepak",
//     details: {
//         age: 25,
//         address: {
//             city: "Delhi",
//             pin: 110001
//         }
//     },
//     tags: ["a", "b"]
// };

// console.log(obj.find(25));


// asyncronous fun

// const obj ={
//     name1:"deepak kumar",
//     fun:function (){
//         return ("function is run by using obj");
//     },
//     hello(){
//         return "i am lkjlklkiuuyfuyfytfuyfytfdeepak";

//     },
//     ji:()=>{
// console.log("ji sdlkfjds");

//     },

// }
// console.log(obj.fun());
// console.log(obj);
// function dee(){
//     console.log("i am deepak");
// }
// dee();
// function hello(){
//     console.log("i am lkljkl");

// }
// hello();

// how many types to create an obj
// 1. obj literal
// let obj = {
//     naem:"deepak",
// };

// 2. using new obj()
// let obj1 = new Object();
// obj1.name="deepak";
// obj1.age=21;
// console.log(obj1);

// 3. using constructor
// function obj(name,age,city){
//     this.name=name,
//     this.age=age,
//     this.city=city
// }
// let ovj = new obj("deepak",22,"moradabad");
// console.log(ovj);

// 4. using object.create method
// let person = {
//     greet: function(){
//         return "hello i am deepak",
//     }
// }



// compute property in js
// let readlineSync = require("readline-sync");
// let key = readlineSync.question("what is your name ");
// let obj = {
//     naam:"deepak",
// };
// obj.age=21;
// obj.city="delhi";
// console.log(obj["city"]);
// console.log(obj[key]);


// object sorthand 

// function deepak(name,age){
//     return{
//         name,
//         age
//     }
// };
// let person = deepak("deepadkfjshdf",21);
// console.log(person);

// let name="deepak";
// let age=21;
// console.log({name,age});



// for(let val in person){
//     console.log(val,person[val]);

// }
// let person = {
//     name:"deepak",
//     age:21,
//     address:{
//         city:"moradabad",
//     }
// }
// let person1 = Object.assign({},person); //it is a sello copy
// console.log(person);
// console.log(person1);

// let arr = [1,2,3,4,5,6];
// let arr1 = [arr];
// arr1.push(7);
// console.log(arr);

// console.log("helllo");

// let obj = {
//     first:{
//         name:"depak",
//         nes:{
//             ksdkfs:"skdjf0",
//         },
//     },
//     sec:{
//         hell:"sdkfjoij",
//     },
// hehiehf:"djfksdj"
// }
// let {first:{name}} = obj;
// console.log(name);
// let obs = Object.values(obj);
// console.log(obs);

// .contain and .innerhtml me difference
// let h1 = document.querySelector(".h");
// // h1.innerText = "hello i am deepak";
// // h1.innerHTML = "text will be change";
// h1.addEventListener('mouseover',()=>{
//     h1.innerText="haa ab aapne hober kiya h"
// })
// h1.addEventListener("mouseleave",()=>{
//     h1.innerText="thoiasfihsdfiashoidfhs";
// })

// let readlineSync = require("readline-sync");
// let user = readlineSync.question("enter any string")
// console.log(user);
// console.log(typeof(user));


// pure function 
// function duble(num){
//     return num*2;
// }

// console.log(duble(6))

// high order function
// function multiply(){
//     console.log("muletiplay the two number");

// }
// function second(fu){
//     return (fu());

// }
// second(multiply)


// function first() {
//     return function () {
//         console.log("hello i am deepak ");

//     }
// }

// let newfun = first()
// newfun()

// function agr(){
//     return arguments;
// }
// console.log(agr(1,2,3,4,5));

// default paramiter 
// debugger
// function def(a=11){
//     console.log(a);

//     a=100;
//     console.log(a);
//     //     arguments[0]=223;
//     // console.log(arguments);
//     arguments[0]=22;
//     console.log(arguments);
//     console.log(a);  
// }
// def(1)
// let readlineSync = require("readline-sync");
// let user = readlineSync.question("enter any number ");
// let num = Number(user);
//  function fac(num) {
//     if (num === 1) {
//         return 1;
//     }
//     return num*fac(num-1);
// }
// console.log(fac(num));

// console.log(typeof {});
// console.log({}+{});
// let sum = {}+{};
// console.log(typeof {}+{});
// console.log(typeof sum);

// var a=2;
//  a=30;
// console.log(a);
// let a =33;

// console.log(null + null);
