// console.log("Callback function in JavaScript");

//example 1
const person1 = function (friend,callfriend) {
    document.getElementById("demo").innerHTML = `I will call you back ${friend}`;
    callfriend();
}

const person2 = function() {
    document.getElementById("demo1").innerHTML =`I called you back.`;
}

person1("DB", person2);

//example 2
// const fun1 = function f1(num1,num2,callback,str) {
//     let sum = num1 + num2;
//     callback(sum,str);
// }

// const fun2 = function f2(element,str) {
//     console.log(element,str);
// }
// fun1(5,5,fun2,"Hi!");
