// json data

// const person = {
//     name : 'Selim',
//     fruit : 'Dalim',
//     dish : 'halim',
//     friends : ['alim','kolim','lamim'],
//     isRich : false,
//     money : 30000
// }
// const jsonStr = JSON.stringify(person)
// console.log(jsonStr)
// const obj = JSON.parse(jsonStr)
// console.log(obj)

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(data => console.log(data))

// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(res => res.json())
// .then(data => console.log(data))

// function loadData(){
//     fetch('https://jsonplaceholder.typicode.com/posts')
// .then(res => res.json())
// .then(data => console.log(data))
// }

// function loadPosts() {
//   fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((res) => res.json())
//     .then((data) => console.log(data));
// }

// function loadToDo() {
//   fetch("https://jsonplaceholder.typicode.com/todos")
//     .then((res) => res.json())
//     .then((toDos) => showToDo(toDos));
// }

// {
//     "userId": 1,
//     "id": 1,
//     "title": "delectus aut autem",
//     "completed": false
// }

// const showToDo = (toDos)=>{
//   const div = document.getElementById("post-container");
//   div.innerHTML = '';
//   toDos.map((toDo) => {
//     const p = document.createElement('p');
//     p.innerHTML = `<div id="toDo-card">
//         <div id="toDo-id">
//             <p class="para">${toDo.userId}</p>
//             <p class="para">${toDo.id}</p>
//         </div>
//         <h2>${toDo.title}</h2>
//         <p class="para" id="completed">${toDo.completed === true ? '<i class="fa-solid fa-square-check"></i> Completed': '<i class="fa-solid fa-square-xmark"></i> Not Complete'}</p>
//     </div>`
//     div.append(p);
//   });
//   console.log(toDos[0])
// }




// function loadToDo() {
//     fetch("https://jsonplaceholder.typicode.com/todos")
//       .then((res) => res.json())
//       .then((toDos) => console.log(toDos));
//   }
// loadToDo()

// const loadToDo = async ()=>{
//     const url = "https://jsonplaceholder.typicode.com/todos";
//     const res = await fetch(url);
//     const data = await res.json();
//     showToDo(data)
// }

// // loadData()
// const showToDo = (toDos)=>{
//     toDos.forEach(toDo => console.log(toDo));
// }