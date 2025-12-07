// console.log(name,price)
// const name = 'Bangladesh';
// console.log(name);

// let price = 50;
// price += 100;
// console.log(price)

// function sum(num1 = 0, num2 = 0) {
//     const total = num1 + num2;
//     console.log(total);
//   }

//   sum(10, 20);

// function multiply (num1=1 , num2=1){
//     const total = num1 * num2;
//     console.log(total);
// }

// multiply(5,10)

// // template literal
// const temp = `i am learning web dev .
// i spend 5 hours everyday (multiple line )`

// // normal string :
// const str = 'i am learning web dev(single line)'

// function sum (num1 , num2){
//     const total = num1 + num2;
//     console.log(`total = ${total}`)//template string //
//     console.log('total =',total);//normal string //
// }

// sum(10,20)

// // function declaration
// function sum(num1, num2) {
//   return num1 + num2;
// }

// const result = sum(10, 20);
// console.log(result);

// // function expression
// const sum = function(num1, num2) {
//     return num1 + num2;
//   }

//   const result = sum(10, 20);
//   console.log(result);

// // arrow function

// const multiply = (num1, num2)=>{
//     return(num1+num2);
// }
// const result = multiply(10,20);
// console.log(result)

// anonymous function

// // spread operator

// const arr = [1,2,3,4,5,6];
// const arr2 = [...arr,7,8,9,10];
// console.log(arr,arr2)
// console.log(Math.max(...arr2))

// const person = {
//   name: "Shaon",
//   age: 23,
// };

// const employee = {
//   ...person,
//   designation: "Web Dev",
// };

// console.log(person);
// console.log(employee);

// const products = {
//     name : 'Shirt',
//     price : 500,
//     quantity : 7
// }

// const price = products.price

// const { name, price, quantity } = {
//   name: "Shirt",
//   price: 500,
//   quantity: 7,
// };
// console.log(name, price, quantity);

// const { name, price, quantity, tax = 10 } = {
//     name: "Shirt",
//     price: 500,
//     quantity: 7,
//   };
//   console.log(name, price, quantity, tax);

// const arr = [1,2,3,4,5];
// const [first , second ,third] = arr;
// console.log(first,second,third);

// const person = {
//   name: "shaon ",
//   age: 23,
//   isStudent: false,
//   profession: "Web dev",
// };

// const {
//   name: userName,
//   age: userAge,
//   isStudent,
//   profession: jobTitle,
// } = person;

// console.log(userName,userAge,isStudent,jobTitle)

// const employee = {
//     name: 'shaon',
//     age : 23 ,
//     profession : 'Web Dev',
//     experience : 1,
//     salary : 25000
// }

// const keys = Object.keys(employee);
// const values = Object.values(employee)
// const entries = Object.entries(employee)
// console.log(entries);

// delete employee.experience
//  employee.salary = 30000
// Object.freeze(employee)
// Object.seal(employee)
// console.log(employee)

// Object.freeze(employee)
// employee.name = 'Sajjat'
// console.log(keys,values)

const employee = {
  name: "shaon",
  age: 23,
  profession: "Web Dev",
  experience: 1,
  salary: 25000,
};

for (let props in employee) {
  console.log(props);
  console.log(employee[props]);
}
