
//calling two separate functions
// function f1() {
//     console.log("Function 1 called");
// }
// function f2() {
//     console.log("Function 2 called");
// }
// f2();
// f1();

// function myDisplayer(calcsum) {
//     console.log(calcsum);
// }
// function myCalculator(num1,num2) {
//     let sum = num1 + num2;
//     return sum;
// }
// myDisplayer(myCalculator(5,5));


// function f1(answer) {
//     console.log(answer);
// }
// function f2(num1, num2) {
//     return num1*num2;
// }
// let result = f2(5,5);

// f1(result);

//usign callback function
// function f1(something) {
//     console.log(something);
// }
// function f2(num1,num2, myCallback ) {
//     let result = num1* num2;
//     myCallback(result);
// }
// f2(5,5, f1);


// callback function
// function f1(num1,num2,callback,str) {
//     let sum = num1 + num2;
//     callback(sum,str);
// }

// function f2(element,str) {
//     console.log(element,str);
// }
// f1(5,5,f2,"Hello!");


//asynchronous function
// setTimeout()
const a =setTimeout(myFunction,3000);
function myFunction() {
    console.log("Hi!");
}
function toStop() {
    clearTimeout(a);
}



//setInterval()
// const a = setInterval(myFunction,1000);
// function myFunction() {
//     console.log("Hello!");
// }
// function toStop() {
//     clearInterval(a);
// }



