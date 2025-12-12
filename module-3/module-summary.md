primitive and non-primitive : 
data type : 
1. string (""/'') : quotation এর মাধ্যমে কিছু লিখলে সেটি string।
const name = 'Shaon';
console.log(typeof name)

2. number : নাম্বার লিখা হয় quotation ছাড়া।
const number = 2342;
console.log(typeof number)

3. boolean (true/false) : boolean ডাটা এর value সব সময় true/ false হবে।
const boolean = true;
console.log(typeof boolean)

4. undefined : যে ভ্যারিয়েবল এর ভ্যালু set করা না হয়। 
let notSetValue;
console.log(typeof notSetValue);

5. null : je variable value ইচ্ছা করে খালি রাখা হয়। 
let noValue = null;
console.log(typeof noValue)
তবে null কে js টাইপ চেক করার সময় object দেখায়।

6. array [] : এখানে একাধিক ডাটা রাখা যায়. তবে এটি এরে হলেও এর টাইপ হচ্ছে object
const arr = []
console.log(typeof arr)

7. object {} : এখানে কোনও একটি বিষয় বা বস্তুর একাধিক info রাখা যায়। এইটি হচ্ছে object 
const obj = {}
console.log(typeof obj)

তবে এইগুলার মধ্যেও ২ ধরনের data type আছে।
1. primitive data type  
    string,number,boolean,undefined,null,symbol
2. non-primitive data type 
    object{}, array[], function 


undefined : 
1. function এ parameter এর value না পেলে undefined দিবে।
2. function থেকে কিছু return না করলে undefined দিবে 
3. return এর পরে কিছু না লিখলে undefined রিটার্ন করবে।
4. object এর properties খুঁজে না পেলে undefined দিবে 
5. array এর ভ্যালু খুঁজে না পেলে undefined দিবে 

note : ইচ্ছা করে কিছুর মান undefined set করব না। যদি লাগে null সেট করা যেতে পারে। 

what is the difference between null and undefined ?
=> 	•	undefined → automatic, JavaScript বলে “value নাই”
	•	null → manual, তুমি বলো “এখানে আমি value দিইনি ইচ্ছা করে”


truthy and falsy 
undefined falsy value 
0 is falsy value 
empty string is falsy value 
string with white space is truthy value 
false is falsy value 
null is falsy value 
এইগুলো ব্যতীত বাকি যা আছে সব truthy value। 


double equal (==) and triple equal (===)

double eqaul (==): এইটা দিয়ে ২ বা ততোধিক variable এর ভ্যালু compare করা হয়। 

আবার, 

triple equal (===): এইটা দিয়ে ২ বা ততোধিক variable এর value এবং value type চেক করে। 
check type first then value 

implicit conversion : এইখানে যদি double eqaul  (==) দিয়ে ২টা ভ্যারিয়েবল এর মধ্যে কমপেয়ার করা হয় তখন ২টা variable এর মধ্যে প্রথম ভ্যালু কে ঠিক রেখে দ্বিতীয় ভ্যারিয়েবল কে প্রথম ভ্যালু এর ন্যায় convert করে compare করে। তখন ২ টা ভ্যারিয়েবল সেম হয়ে যায়। 


block scope : block এর ভিতরের কিছু ব্লক এর বাহিরে পাওয়া যাবে না। 

global scope : যে কোনও জায়গা থেকে access কড়া যাবে। 

function scope : function এর ভিতরের জিনিস বাহিরে পাওয়া যাবে না।
তবে চাইলে কোনও ভ্যালু return কড়া যায় 


hoisting : hoist মানে উপরে উঠিয়ে ফেলা।let , const দিয়ে কিছু declare করে তা ডিক্লেয়ার এর আগে access করা যায় না । temporal dead zone এইটাকে উপরে উঠতে দেয় না । তবে var দিয়ে declare করলে declare এর আগে এক্সেস করা যায়।

normal function চাইলে আগে access কড়া যায় 

callback function : 

function pakhiBhai(callMeBack, patro, patri) {
  if (patri) {
    callMeBack(patro);
  } else {
    console.log("tor kopale biye nai");
  }
}

function callSomeOne(person) {
  console.log(person);
}

pakhiBhai(callSomeOne, "jodu", "modu");


pass by reference and pass by value : array and object এর ভ্যালু রেফারেন্স অনুসারে পাঠানো হয় এইগুলো primitive data আর non-primitive ডাটা এর ক্ষেত্রে শুধু ভ্যালু পাঠানো হয় 

arguments : মাঝে মধ্যে যদি ফাঙ্কশন call করার সময় parameter এর চেয়ে বেশি arguments দেওয়া হয় তবে যত গুলো parameter আছে ততটা argument নিয়ে কাজ করবে বাকি গুলো silent থাকবে। তবে যদি ওই বাকি আর্গুমেন্ট গুলো access করতে চাই তবে তা কড়া যাবে 

function sum (a,b){
    const argument = arguments;
    console.log(argument);
    console.log(a+b);
}
sum(5,7,19,20);

এইটা একটা array like object দিবে। 
তবে চাইলে arguments গুলোকে একটা variable এর মধ্যে spread করে array বানানো যায়।

function sum (a,b){
    const params = [...arguments];
    console.log(params);
}
sum(5,7,19,20);


closure : এখানে প্রতিবার কল করার সময় function এর ভিতরের ভ্যালু কে চেঞ্জ করা এবং আলাদা আলাদা ভাবে কল করে ওই ভ্যালু কে প্রতিটা আলাদা ভ্যারিয়েবল এর জন্য আলাদা একটা closure রেখে দেয়।


function counter() {
  let count = 10;
  return function (user) {
    count += 1;
    console.log(user, count);
  };
}

const rahimCounter = counter();
rahimCounter("Rahim");
rahimCounter("Rahim");
rahimCounter("Rahim");
rahimCounter("Rahim");
console.log("------------------------");
const sajjatCounter = counter();
sajjatCounter("Sajjat");
sajjatCounter("Sajjat");
sajjatCounter("Sajjat");
sajjatCounter("Sajjat");
console.log("-----------------");
rahimCounter("Rahim");
