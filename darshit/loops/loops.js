console.log("loops");

//for loop
// for (let i=1; i<=10; i++) {
//     console.log(i);
// }

//while loop
// let a=1;
// while(a<10) {
//     console.log(a);
//     a++;
// }

//do while loop
// let a=1;
// do{
//     console.log(a);
//     a++;
// } while(a<=10);

//for each loop
// const arr = [0,1,2,3,4,5,6];
// arr.forEach(element => {
//     console.log(arr[element]);
// });

//for each using function
// function myFunction(){
//     console.log(arr[1]);
// }
// arr.forEach(myFunction);

//for in loop(key and value)
let car = {brand:"Audi", color:"white", type:"Sedan"};

// for (const key in car) {
//     console.log(car[key]);
// }

//for of loop(using array)
let cars = ["Audi", "BMW", "Mercedes"];
for (const key in cars) {
    console.log(cars[key]);
}