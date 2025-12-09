// const student = {
//   name: "Shaon",
//   age: 23,
//   marks: 90,
// };
// // const studentAge = student['age']
// const studentAge = "age";
// console.log(student[studentAge]);

// const student = {
//     name : 'shaon',
//     age : 23,
//     family : {
//         title: 'Hagi',
//         mother : {
//             name : 'Shafali Begum',
//             age : 45
//         }
//     }
// }

// console.log(student.family.mother?.age)//error

// map method
// const nums = [1,2,3,4,5,6,7,8,9];
// nums.map((number,index,nums)=>{
//     console.log(number,index,nums)
// })

// const numbers = [2,3,4,5,6,7,8,9];
// const dubbled = [];
// numbers.map((num)=> {
//     dubbled.push(num*2)
// } )
// console.log(dubbled)

// const friends = ["shaon", "poddo", "sujon", "faysal", "roman"];

// const nameLength = friends.map((name) => console.log(name.length));

// // forEach
// const numbers = [1,2,3,4,5,6,7];
//  numbers.forEach(num => console.log(num*2))

// filter

// const numbers = [23, 232, 12, 42, 3, 1246, 46, 74, 324];
// const greaterThan50 = numbers.filter((num) => num > 50);
// console.log(greaterThan50);


// const numbers = [1,2,3,423,23,,34,23,35,56,75,230]
// const result = numbers.find((num,ind)=>{
//     if(num > 100){
//         return num * ind
//     }
// })
 
// console.log(result)

// const students = [
//     {id:1, name: 'abul' , marks: 60},
//     {id:2, name: 'sabul' , marks: 34},
//     {id:3, name: 'babul' , marks: 86},
//     {id:4, name: 'nabul' , marks: 90},
//     {id:5, name: 'dabul' , marks: 32}
// ]

// const names = students.map(student => student.name)
// console.log(names)
// const marks = students.map(student => student.marks)
// console.log(marks)
// const goodStudent = students.filter(student => student.marks > 80);
// console.log(goodStudent)

// const numbers = [1,2,3,4,5,6,7,8,9];
// const total = numbers.reduce((acc,crr)=>{
//     return acc+crr
// })
// console.log(total)

//  class Person {
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//         this.location = 'Bangladesh'
//     }
//     result (){
//         console.log('This person got A+')
//     }
//  }
//  const person1 = new Person('Shaon',23);
//  console.log(person1 instanceof Person)
//  person1.result()
//  console.log(person1)


// class Animal {
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     eat(){
//         console.log(`${this.name} is eating`)
//     }
// }

// class Dog extends Animal {
//     constructor(name,breed,age){
//         super(name,age)
//         this.breed = breed;
//     }
//     bark(){
//         console.log(`${this.name} is barking`)
//     }
// }
// const dog1 = new Dog('deshi','coffee',5)
// dog1.eat()
// // dog1.bark()
// console.log(dog1)

// class Cat {
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//         this.color = 'White';
//     }

//     eat(){
//         console.log(`${this.name} is eating`)
//     }

//     meomeo(){
//         console.log(`${this.name} is calling meo meo`)
//     }
// }

// const cat1 = new Cat
// ('bideshi',5)
// console.log(cat1)


// class Vehicle {
//     #tin;
//     constructor(type,brand,price){
//         this.type = type;
//         this.brand = brand;
//         this.price = price;
//         this.#tin = '123456'
//     }
//     getPrice (){
//         return this.price
//     }
//     getTin (){
//         return this.#tin;
//     }
//     giveTin (){
//         console.log(this.#tin)
//     }
// }
// const car = new Vehicle('car','Honda',500000);
// const car2 = new Vehicle('car','toyota',1000000)
// // console.log(car.getPrice())
// // console.log(car2.getPrice()
// // )
// // console.log(car2.getTin());
// car2.giveTin()

// console.log(car)

// const player = {
//     name : 'Tamim Iqbal',
//     score : 10000,
//     getScore : function(){
//         console.log(this)
//     }
// }
// player.getScore()

