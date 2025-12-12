// const name = 'Shaon';
// const number = 2342;
// const boolean = true;
// let notSetValue;
// let noValue = null;
// const arr = []
// const obj = {}
// console.log(typeof obj)

// truthy and falsy
// let data;
// data = 0;
// data = "";
// data = false;
// data = true;
// data = null;
// data = NaN;
// data = -0
// data = 0n
// console.log("Value of data", data);
// if (data) {
//   console.log("truthy");
// } else {
//   console.log(data, "falsy");
// }
// sum(10)

// function sum (num){
//     console.log(num)
// }

// function pakhiBhai(callMeBack, patro, patri) {
//   if (patri) {
//     callMeBack(patro);
//   } else {
//     console.log("tor kopale biye nai");
//   }
// }

// function callSomeOne(person) {
//   console.log(person);
// }

// pakhiBhai(callSomeOne, "jodu", "modu");

// pass by reference

// const person1 = {
//     name : 'manik',
//     balance : 40000
// }

// const person2 ={
//     name : 'roton',
//     balance : 30000
// }

// function money (person1,person2){
//     const manikBalance = person1.balance/2
//      person2.balance = 0
//     const total = person2.balance + manikBalance;
//     return total;
// }

// const result = money(person1,person2);
// console.log(result)
// console.log(person1,person2)

// function sum (a,b){
//     const params = [...arguments]
//     console.log(params)
// }

// sum(5,7,19,20)

// closure :

// function counter() {
//   let count = 10;
//   return function (user) {
//     count += 1;
//     console.log(user, count);
//   };
// }

// const rahimCounter = counter();
// rahimCounter("Rahim");
// rahimCounter("Rahim");
// rahimCounter("Rahim");
// rahimCounter("Rahim");
// console.log("------------------------");
// const sajjatCounter = counter();
// sajjatCounter("Sajjat");
// sajjatCounter("Sajjat");
// sajjatCounter("Sajjat");
// sajjatCounter("Sajjat");
// console.log("-----------------");
// rahimCounter("Rahim");
