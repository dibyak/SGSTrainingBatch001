console.log("objects in JavaScript");

//creating objects using object literal
// const person = { firstName:"Darshit", lastName:"Bhatt", age:24};
// console.log(person);

//creating object using new keyword
// const person = new Object();
// person.firstName = "Darshit";
// person.lastName = "Bhatt";
// person.age = 24;
// console.log(person);

//for..in loop
// const person = { firstName:"Darshit", lastName:"Bhatt", age:24};

// for (let element in person) {
//     console.log(person[element]);
// }

//adding property to object
// person.nationality="Indian";

//deleting property from object
// delete person.nationality;
// console.log(person);

//nested objects
// const myobj = {
//     firstName:"Darshit",
//     lastName:"Bhatt",
//     cars: {
//         car1:"Audi",
//         car2:"BMW",
//         car3:"Ferrari"
//     }
// }
// console.log(myobj);

//accessing properties of nested object
// console.log(myobj.cars.car1);

//or
// console.log(myobj.cars["car2"]);

//or
// console.log(myobj["cars"]["car3"]);


//nested arrays and objets
// const myobj = {
//     firstName:"Darshit",
//     lastName:"Bhatt",
//     cars: [
//       {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
//       {name:"BMW", models:["320", "X3", "X5"]},
//       {name:"Fiat", models:["500", "Panda"]}
//     ]
//   }
// console.log(myobj);

//objet methods
// const person = {
//     firstName: "Darshit",
//     lastName: "Bhatt",
//     fullName: function() {
//       return this.firstName + " " + this.lastName;
//     }
//   };
//   console.log(person.fullName());

//object constructors
function person(firstName, lastName,age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}
const a = new person("Darshit","Bhatt",24);
console.log(a);


