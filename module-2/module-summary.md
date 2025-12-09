dot notation : object er key ke access korar ekti way . 

const student = {
  name: "Shaon",
  age: 23,
  marks: 90,
};
const studentName = student.name;
console.log(studentName);

bracket notation : object er keys ke access korar another way .

const student = {
  name: "Shaon",
  age: 23,
  marks: 90,
};
// const studentAge = student['age']
const studentAge = "age";
console.log(student[studentAge]);

here is 2 different ways to access object properties .


optional chaining ?: এখানে যদি কোনও অবজেক্ট এর property খুঁজে পাওয়া না যায় তখন error handle করার জন্য optional chaining ব্যবহার করা হয়।

const student = {
    name : 'shaon',
    age : 23, 
    family : {
        title: 'Hagi',
        // mother : {
        //     name : 'Shafali Begum',
        //     age : 42
        // }
    }
}

console.log(student.family.mother?.age)//undefined

এখানে mother প্রপার্টিজ comment করার কারণে optional chaining undefined দিবে। optional chaining ব্যবহার না করলে error দিতো। 
const student = {
    name : 'shaon',
    age : 23, 
    family : {
        title: 'Hagi',
         mother : {
             name : 'Shafali Begum',
             age : 45
        }
    }
}

console.log(student.family.mother.age)//error


const student = {
    name : 'shaon',
    age : 23, 
    family : {
        title: 'Hagi',
        mother : {
            name : 'Shafali Begum',
            age : 45
        }
    }
}

console.log(student.family.mother?.age)//45



map method : 
syntax : const nums = [1,2,3,4,5,6,7,8,9];
nums.map((number,index,nums)=>{
    console.log(number,index,nums)
})

এখানে প্রথমে array এর মধ্যে map method apply করে তারপর এখানে callback ফাঙ্কশন এর মধ্যে ৩ তা জিনিস পাস করতে পারি। ১- array কে loop kore প্রতিবার যেই এলেমেন্ট তা পাব, ২- element index নাম্বার, ৩- main এরে ।

map করার পরে অবশ্যই রিটার্ন করতে হবে যদি ভ্যালু তা কোনও একটা ভ্যারিয়েবল এ স্টোর kora লাগে। 
 
map কখন use করবো যখন এরে কে loop করে পাওয়া এলিমেন্ট return করে সেই এলিমেন্ট কে নিয়ে বাহিরে কোনও কাজ কড়া হবে তখন। 

const numbers = [2,3,4,5,6,7,8,9];
const dubbled = [];
numbers.map((num)=> {
    dubbled.push(num*2)
} )
console.log(dubbled)

length of names 
const friends = ["shaon", "poddo", "sujon", "faysal", "roman"];

const nameLength = friends.map((name) => console.log(name.length));


forEach :  forEach use করে কোনও একটা কাজ করার পর তার রেজাল্ট টা কোথাও রাখা লাগে না। শুধু কোনও একটা কাজ সম্পন্ন করে। foreach কিছু রিটার্ন করে না. 
syntax : 
array.forEach((value,index,array)=>{
    do some work 
})


// forEach 
const numbers = [1,2,3,4,5,6,7];
 numbers.forEach(num => console.log(num*2))

filter : এরে এর মধ্যে থাকা এলিমেন্ট গুলোর মধ্যে থেকে ফিল্টার করে কিছু এলিমেন্ট নেওয়া। filter শর্ত অনুসারে এলিমেন্ট দিয়ে থাকে । ফিল্টার এলিমেন্ট return করে। 

syntax : 

array.filter((value,index,array)=>{
    do some work
})


const numbers = [23, 232, 12, 42, 3, 1246, 46, 74, 324];
const greaterThan50 = numbers.filter((num) => num > 50);
console.log(greaterThan50);


find : শর্ত অনুসারে মিলে এমন প্রথম এলিমেন্ট কে রিটার্ন করে। এইটা একটা সিঙ্গেল এলিমেন্ট রিটার্ন করে।  

syntax : 
array.find((value,index,Obj)=>{
    do some work 
})




const students = [
    {id:1, name: 'abul' , marks: 60},
    {id:2, name: 'sabul' , marks: 34},
    {id:3, name: 'babul' , marks: 86},
    {id:4, name: 'nabul' , marks: 90},
    {id:5, name: 'dabul' , marks: 32}
]

const names = students.map(student => student.name)
console.log(names)
const marks = students.map(student => student.marks)
console.log(marks)
const goodStudent = students.filter(student => student.marks > 80);
console.log(goodStudent)


reduce : একটি number এরে কে রিডিউস করে একটা ভ্যালু টি কনভেট করে দেয় ।

const numbers = [1,2,3,4,5,6,7,8,9];
const total = numbers.reduce((acc,crr)=>{
    return acc+crr
})
console.log(total)


class and object : 
calss use করে একাধিক অবজেক্ট বানানো যায়। তবে এই ক্লাস use করে প্রতিটা অবজেক্ট এর মধ্যে যে বিষয় গুলা মিল আছে সেই গুলা আগে থেকেই দেওয়া থাকে শুধু ক্লাস থেকে import করা হয়। 

syntax : class Person {} // an empty class

create object from class : 
 class Person {}
 const person1 = new Person()[calling constructor];
 console.log(person1)

class এ ২ ধরনের ভ্যালু আছে। 
1. properties 
2. methods (a special type of function without the function keyword)


use class method : 
class Person {
    result (){
        console.log('This person got A+')
    }
 }
 const person1 = new Person();
 person1.result()

 constructor :constructor method ব্যবহার কড়া হয় object এর প্রপার্টিজ বানানোর জন্য।  

class Person {
    constructor(name,age){
        this.name = name;
        this.age = age;
        this.location = 'Bangladesh'
    }
    result (){
        console.log('This person got A+')
    }
 }
 const person1 = new Person('Shaon',23);
 person1.result()
 console.log(person1)

 person1 কি Person ক্লাস Use করে হয়েছে কিনা তা জানার জন্য instanceof use করা হয়। 

 const person1 = new Person('Shaon',23);
 console.log(person1 instanceof Person)


inheritance and prototypical inheritance : 
inheritance এর মাধ্যমে parent class থেকে এলিমেন্ট নিয়ে child class এ use করে নতুন object বানানো যায়। এক্ষেত্রে parent class এ common properties আর method declare করে then child এর মধ্যে extands করে তারপর super () এর মাধ্যমে সেই গুলা child এ use করা যায়। 


class Animal {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    eat(){
        console.log(`${this.name} is eating`)
    }
}

class Dog extends Animal {
    constructor(name,breed,age){
        super(name,age)
        this.breed = breed;
    }
    bark(){
        console.log(`${this.name} is barking`)
    }
}
const dog1 = new Dog('deshi','coffee',5)
dog1.eat()
// dog1.bark()
console.log(dog1)


encapsulation and this keyword: 
কোনও একটা ক্লাস দিয়ে যদি কোনও object বানানো হয় তবে this দিয়ে ওই অবজেক্ট কে বুঝায় 
class Vehicle {
    constructor(type,brand,price){
        this.type = type;
        this.brand = brand;
        this.price = price;
    }
    getPrice (){
        return this.price
    }
}
const car = new Vehicle('car','Honda',500000);
const car2 = new Vehicle('car','toyota',1000000)
console.log(car.getPrice())
console.log(car2.getPrice()
)


আবার কোনও একটা অবজেক্ট এর মধ্যে যদি normal function  থাকে তবে ওই function এর মধ্যে this মানে সেই অবজেক্ট কে বুঝায়। 
তবে arrow function এর ক্ষেত্রে this থাকে না.
আবার event handle করার সময় this মানে যেই element এ event হয়েছে সেই element কে বুঝায়.
normally this console করলে window object কে বুঝায়. 


encapsulation : এর মানে হলো কোনও জিনিস সব জায়গায় expose করতে না চাওয়া. secret রাখা. 
syntax : 
constructor এর বাহিরে #variableName 

class Vehicle {
    #carNumber ; 
    constructor(){
        this.#carNumber = '123456sjkd';
    }
    getCarNumber (){
        return this.carNumber;
    }
}

encapsulate variable টা class এর ভিতরে access কড়া যাবে তবে বাহিরে পাওয়া যাবে না।



task 

✅ Dot & Bracket Notation
	1.	একটি object বানাও product নামে (name, price, color).
dot notation দিয়ে তিনটি value আলাদা আলাদা variable এ স্টোর করো।
	2.	bracket notation দিয়ে object এর একটি key dynamically access করো (key টা string হিসেবে variable এ থাকবে)।

⸻

✅ Optional Chaining
	3.	nested object বানাও user → address → city।
তারপর এমন একটি property access করো যা থাকবে না—optional chaining ছাড়া error হবে।
	4.	optional chaining ব্যবহার করে এমন nested property access করো যা object এর deep level-এ আছে।

⸻

✅ map()
	5.	একটি number array থেকে map ব্যবহার করে প্রতিটি সংখ্যা 5 করে বাড়িয়ে নতুন একটি array তৈরি করো।
	6.	friends নামের array থেকে প্রত্যেক বন্ধুর নামের প্রথম অক্ষর নিয়ে একটি নতুন array বানাও map দিয়ে।

⸻

✅ forEach()
	7.	একটি array loop করে প্রতিটি value 10 গুণ করে console এ print করো।
কিছু return করবে না।
	8.	একটি array loop করে প্রতিটি index console এ print করো।

⸻

✅ filter()
	9.	number array থেকে কেবল even number গুলো filter করে বের করো।
	10.	student list থেকে যাদের marks ≥ 80 তাদের filter করে নতুন array বানাও।

⸻

✅ find()
	11.	student list থেকে যার id 3 তার object খুঁজে বের করো find দিয়ে।
	12.	কোনও array থেকে প্রথম এমন element খুঁজো যেটা 50 এর বড়।

⸻

✅ reduce()
	13.	number array এর যোগফল বের করতে reduce ব্যবহার করো।
	14.	number array এর largest value বের করতে reduce ব্যবহার করবে।

⸻

✅ Class & Object
	15.	একটি class বানাও: Person (properties: name, age, country).
৩ জনের object বানাও।
	16.	class এ একটি method যোগ করো যেটা person’s info print করবে।
তারপর object থেকে method call করো।

⸻

✅ Constructor
	17.	constructor এ ৩টি property set করবে এবং object create করে console এ object দেখাবে।

⸻

✅ Inheritance
	18.	Parent class Animal → child class Cat বানাও।
parent এ একটি method, child এ আরেকটি method। object বানিয়ে দুটো method call করো।
	19.	Vehicle → Car class বানাও। Car will extend Vehicle and add one extra property।

⸻

✅ Encapsulation & this keyword
	20.	class এর ভিতরে একটি private variable (#secretCode) বানাও এবং method দিয়ে সেটি return করার চেষ্টা করো।
	21.	একটি normal function object এর ভিতরে this কী বোঝায়—তা test করার জন্য console এ this print করবে।
	22.	arrow function এর ভিতরে this কী আসে তা console এ print করো।