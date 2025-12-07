const : const দিয়ে variable ডিক্লেয়ার করলে তা update করা যায় না। এটার ভ্যালু ফিক্সড।

const name = 'Bangladesh';
console.log(name);

let : let দিয়ে ভ্যারিয়েবল ডিক্লেয়ার করলে তা আপডেট করা যায়।

let price = 50;
price += 100;
console.log(price)

const and let দিয়ে ভ্যারিয়েবল ডিক্লেয়ার করে তা ডিক্লেয়ার এর আগে এক্সেস কড়া যায় না। তবে var এর ক্ষেত্রে সম্ভব।

console.log(name,price)
const name = 'Bangladesh';

let price = 50;
price += 100;
console.log(name,price)

তবে const দিয়ে ডিক্লেয়ার করা array বা object এর value/key কে change করা যাবে কিন্তু সম্পূর্ণ array বা object কে change বা reassign করা যাবে না।

default parameter : function এর মধ্যে error ignore করতে default value দিয়ে দেওয়া হয়ে থাকে যদি কোনও একটা parameter এর ভ্যালু খুঁজে না পাওয়া যায় তবে default value parameter হিসাবে কাজ করবে যাতে error handle করা যায়। result will return NaN

with parameter value :
function sum(num1, num2) {
const total = num1 + num2;
console.log(total);
}

sum(10);

without parameter value :

function sum(num1 = 0, num2 = 0) {
const total = num1 + num2;
console.log(total);
}

sum(10);

template string (``) : এখানে চাইলে একাধিক লাইনে string লিখা যায়।

// template literal
const temp = `i am learning web dev .
i spend 5 hours everyday (multiple line )`

// normal string :
const str = 'i am learning web dev(single line)'

function sum (num1 , num2){
const total = num1 + num2;
//template string //
console.log(`total = ${total}`)
//normal string //
console.log('total =',total);
}

sum(10,20)

function declaration : এইটা হলো function কিওয়ার্ড এর পরে ফাঙ্কশন এর নাম দিয়ে ফাঙ্কশন ডিক্লেয়ার করে কাজ কড়া হয়।

function sum(num1, num2) {
return num1 + num2;
}

const result = sum(10, 20);
console.log(result);

function expression : এইটা হলো নামহীন একটা ফাঙ্কশন কে কোনও একটা ভ্যারিয়েবল এর মধ্যে স্টোর করে ওই ভ্যারিয়েবল কে ফাঙ্কশন হিসাবে use করা।
// function expression
const sum = function(num1, num2) {
return num1 + num2;
}

const result = sum(10, 20);
console.log(result);

// arrow function: arrow function এ সিঙ্গেল লাইন এ লিখলে রিটার্ন কিওয়ার্ড করা লাগে না তবে multiple লাইনে লিখলে return কিওয়ার্ড লাগে। 


single line : 
const multiply = (num1,num2)=> num1*num2;

multiple line : 
const multiply = (num1, num2)=>{
return(num1+num2);
}
const result = multiply(10,20);
console.log(result)


anonymous function : 
নামহীন ফাঙ্কশন কে anonymous ফাঙ্কশন বলা হয়। 
()=>{
    console.log('hello')
}


what is the difference between arrow function and normal function ?
=> arrow function নিজস্ব this নাই regular function এ আছে।
=> arrow function এ constructor use করা যায় না regular function এ যায়।
=> regular function object method এর জন্য best আর arrow function callbacks, array methods এর জন্য best।


spread operator [...] : array এর reference কপি না করে সরাসরি array কে কপি করতে use করা হয়। যার ফলে copy করা এরে এর মধ্যে কিছু চেঞ্জ করলে মেইন array এর মধ্যে কোনও পরিবর্তন হয় না। 

// spread operator 

array copy 
const arr = [1,2,3,4,5,6];
const arr2 = [...arr,7,8,9,10];
console.log(arr,arr2)
console.log(Math.max(...arr2))

এখানে math.max এর মাধ্যমে এরে মধ্যে থেকে বড় সংখ্যা টা বের করা হয়েছে। 

object copy 
const person = {
  name: "Shaon",
  age: 23,
};

const employee = {
  ...person,
  designation: "Web Dev",
};

console.log(person);
console.log(employee);


destructuring : array and object এর ভ্যালু এবং parameter কে ভ্যারিয়েবল এর মতো এক্সেস করা। 

regular way to access object properties 
const products = {
    name : 'Shirt',
    price : 500,
    quantity : 7
}

const price = products.price;

destructuring 
const { name, price, quantity } = {
  name: "Shirt",
  price: 500,
  quantity: 7,
};
console.log(name, price, quantity);

set default value as tax 
const { name, price, quantity, tax = 10 } = {
    name: "Shirt",
    price: 500,
    quantity: 7,
  };
  console.log(name, price, quantity, tax);

array destructuring : 

const arr = [1,2,3,4,5];
const [first , second ,third] = arr;
console.log(first,second,third); 

alias : object er properties এর পরিবর্তন করে অন্য নাম দিয়ে use করা হয় 


const {
  name: userName,
  age: userAge,
  isStudent,
  profession: jobTitle,
} = person;

console.log(userName,userAge,isStudent,jobTitle)




const employee = {
    name: 'shaon',
    age : 23 , 
    profession : 'Web Dev',
    experience : 1
}

keys/values : object er keys/values gula ekta array diye paoya 


const keys = Object.keys(employee);
const values = Object.values(employee)
console.log(keys,values)


entries : object এর মধ্যে যত ভ্যালু আছে সব গুল কে জোড়ায় জোড়ায় দিবে। 

const entries = Object.entries(employee)
console.log(entries);


delete : object theke kono ekta properties ke delete kore deoya 

delete employee.experience
console.log(employee)

update properties : 
 employee.salary = 30000
console.log(employee)

freeze : object ke modify , add , remove kono kichu kora jabe na , 

Object.freeze(employee)
console.log(employee)

seal : seal maddome shudhu object er properties ke modify korte parbo kintu add ba delete kora jabe na 

Object.seal(employee)
console.log(employee)

loop through : 

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
