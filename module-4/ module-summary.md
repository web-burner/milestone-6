1. What is JSON?
=> Javascript object notation 
এইটা একটা object লাইক ডাটা কিন্তু object না। 
কেন ব্যবহার হয় ?
server-client ডাটা আদান প্রদান 
api response 
configuration file 

json data : 
{
    "name":"Selim",
    "fruit":"Dalim",
    "dish":"halim",
    "friends":["alim","kolim","lamim"],"isRich":false,
    "money":30000
    }

এখানে key value সব notation এর মধ্যে থাকে তবে নাম্বার এবং boolean ভ্যালু নোটেশন এর মধ্যে থাকে না।


normal object to json data : 
const person = {
    name : 'Selim',
    fruit : 'Dalim',
    dish : 'halim',
    friends : ['alim','kolim','lamim'],
    isRich : false,
    money : 30000
}
const jsonStr = JSON.stringify(person)
console.log(jsonStr)

json data to normal object : 
const person = {
    name : 'Selim',
    fruit : 'Dalim',
    dish : 'halim',
    friends : ['alim','kolim','lamim'],
    isRich : false,
    money : 30000
}
const obj = JSON.parse(jsonStr)
console.log(obj)


type of json data : 
const person = {
    name : 'Selim',
    fruit : 'Dalim',
    dish : 'halim',
    friends : ['alim','kolim','lamim'],
    isRich : false,
    money : 30000
}
const jsonStr = JSON.stringify(person)
console.log(typeof jsonStr)

json কেন প্রয়োজন?
বিভিন্ন system ভিন্ন ভিন্ন ল্যাঙ্গুয়েজ দিয়ে বানানো হতে পরে তাই এই ভিন্ন সিস্টেম এর সাথে সহজে ডাটা আদান প্রদান করার জন্য json প্রয়োজন।
load json data using fetch function : 

fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(data => console.log(data))

এখানে fetch রেসপন্স করে এবং প্রমিস দেয় । তারপর যেই রেসপন্স করে সেটি json এ দেওয়ার রিকোয়েস্ট কড়া হয় then ওই রেসপন্স থেকে যেই ডাটা পাওয়া যাবে তাঁকে ডাটা নামের ভ্যারিয়েবল এ দেওয়া রিকোয়েস্ট কড়া হয় । আমরা যেমন কনসোল.লগ করে ডাটা দেখতে পাড়ি আবার কোনও একটা ফাঙ্কশন এর মধ্যেও পাস করে কার করতে পাড়ি . 
আবার চাইলে ui টি দেখতে পাড়ি . 


fetch('https://jsonplaceholder.typicode.com/posts')
.then(res => res.json())
.then(data => console.log(data))

load data and show in user interface .


Api থেকে পাওয়া ডাটা কে লুপ করে প্রতি তা ডাটা এর জন্য একটা করে এলিমেন্ট ক্রিয়েট করে তা প্যারেন্ট এলিমেন্ট এ অ্যাপেন্ড করা যায় 
const url = "https://jsonplaceholder.typicode.com/posts";


function loadData() {
 fetch(url)
   .then((res) => res.json())
   .then((data) => loadPosts(data));
}


const loadPosts = (posts) => {
 const postContainer = document.getElementById("post-container");
 posts.forEach((post) => {
   const div = document.createElement("div");
   div.innerHTML = `
   <p>${post.title}</p>
   <p>${post.body}</p>
   `;
   postContainer.append(div);
 });
};



const url = "https://jsonplaceholder.typicode.com/todos";
const loadToDo = () => {
 fetch(url)
   .then((res) => res.json())
   .then((data) => checkToDo(data));
};


const checkToDo = (toDos) => {
 // console.log(toDos);
 const toDoContainer = document.getElementById("todo-container");
 toDos.forEach((todo) => {
   console.log(todo);
   const div = document.createElement("div");
   div.innerHTML = `
   <span>${todo.completed ? "completed" : "Not yet"}</span>
   <p>${todo.title}</p>
  
   `;
   toDoContainer.append(div);
 });
};



ROUTES (GET,POST,PATCH,PUT,DELETE)

GET: get method দিয়ে আমড়া server side থেকে client side এ data দিয়ে আসি।
এইটা হতে পারে একটা সিঙ্গেল ডাটা আবার multiple ডাটা। মূলত fetch method এর মাধ্যমে আমড়া এই ডাটা পেয়ে থাকি। 


function loadToDo() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((toDos) => console.log(toDos));
  }
loadToDo()

POST: Post method এর মাধ্যমে আমড়া চাইলে নতুন একটা ডাটা client side থেকে server এ পাঠাতে পাড়ি। 
এর জন্য প্রয়োজন server url then একটা object এর মধ্যে একটা method আর একটা headers দিয়ে দিতে হয়। object body তে client থেকে পাওয়া ডাটা কে json ডাটায় convert করে server এ পাঠানো হয়। 

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));


  DELETE: delete method এর মাধ্যমে একটা সিঙ্গেল data কে id এর মাধ্যমে এক্সেস করে ডিলিট কড়া যায়। এখানে শুধু method delete বলে দেওয়া লাগে। 

  fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE',
}); 


PATCH: patch method এর মাধ্যমে একটা নির্দিষ্ট ডাটা কে edit কড়া যায় id এর মাধ্যমে ওই data কে এক্সেস করে data কোন জায়গায় edit কড়া হবে তা object body তে বলে দিতে হয়। তবে যেই ডাটা তা পাঠানো হবে তা json এ convert করে পাঠাতে হবে। 

tch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PATCH',
  body: JSON.stringify({
    title: 'foo',
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

PUT: put method দিয়ে কোনও একটা ডাটা কে edit কড়া যায় তবে put method দিয়ে কোনও ডাটা find কড়া হলে তা খুঁজে পাওয়া না গেলে add করে দিবে আর পাওয়া গেলে তা edit করে দিবে। 

fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PUT',
  body: JSON.stringify({
    id: 1,
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));


async await : এইটা একটা ফাঙ্কশন যেখানে async function এর মধ্যে await দিয়ে বলা হয় যতক্ষণ এই কাজ তা শেষ না হবে ততক্ষণ বাকি কাজ গুলা wait করো।

const loadToDo = async ()=>{
    const url = "https://jsonplaceholder.typicode.com/todos";
    const res = await fetch(url);
    const data = await res.json();
    console.log(data)
    // showToDo(data)
}