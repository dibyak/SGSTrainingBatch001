console.log("Arrays in Js");
// let cars=["Audi", "Mercedes", "BMW"];
// console.log(cars);

// let names = [];
// //adding elements to last of array
// names.push("Darshit");
// names.push("Raj");
// names.push("Aman");
// console.log(names);

// //removes last element from array
// names.pop();
// console.log(names);

// //adding element as first element of array
// names.unshift("Abhay");
// console.log(names);

// //removing first element
// names.shift();
// console.log(names);


// //creating an array metho-2
// let arr = new Array("Fiat", "Suzuki", "Ford");
// console.log(arr);
// let car = arr[0];
// console.log(car);

// //arrays are objects
// console.log(typeof arr);

// //creating an array object
// const person = {firstname:"Darshit", lastname:"Bhatt", age:24};
// console.log(person);
// console.log("Name :" +person.firstname);
// console.log("Surname :" +person.lastname);
// console.log("Age :" +person.age);


//for loop through an array
// let arr = new Array("Fiat", "Suzuki", "Ford");
// let element = "<ul>";
// for (let i = 0; i < arr.length; i++) {
//     element+= "<li>" + arr[i] + "</li>"; // element = element + ("<li>" + arr[i] + "</li>")
//     //console.log(element);
// }
// element+="</ul>"; // element = element + "</ul>"
// document.getElementById("demo").innerHTML = element;


//for each loop through an array
let arr = new Array("Fiat", "Suzuki", "Ford");
element = "<ul>";
arr.forEach(myFunction);
function myFunction =
