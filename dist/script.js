
let GettingStarted=[];
let Important=[];
let MyDay=[];
let array=[];
let ListNames=[];
var i = 0;
var txt = 'Created By Aditya Sharma';
var speed = 250;
if (localStorage.getItem("added-items") === null) {
  MyDay.push({Task: "Welcome to To Do List", date: "07-07-2023", flag: 0, importance: 0});
  MyDay.push({Task: "<-- click this to mark any task as done !!!", date: "07-07-2023", flag: 0, importance: 0});
  MyDay.push({Task: "Click on the + button to add a new task", date: "07-07-2023", flag: 0, importance: 0});
  MyDay.push({Task: "Click on the Add list to Add a list", date: "07-07-2023", flag: 0, importance: 0});
  MyDay.push({Task: "that button will automatically add this task to important list --> ", date: "07-07-2023", flag: 0, importance: 0});
  MyDay.push({Task: "You Can Also add the date with the task !!!! any task with today's date will be added to my day !!!", date: "07-07-2023", flag: 0, importance: 0});
  MyDay.push({Task: "Don't worry all your data actually does get saved !!!!!!!", date: "07-07-2023", flag: 0, importance: 0});
  MyDay.push({Task: "Hehe can't remove my name tho :)", date: "07-07-2023", flag: 0, importance: 0});  
  array.push(GettingStarted);
  array.push(Important);
  array.push(MyDay);
  console.log ("arraynorthern");
  localStorage.setItem('added-items', JSON.stringify(array));
  
}
else{
  array=JSON.parse(localStorage.getItem('added-items'));
  console.log (array);
}
if (localStorage.getItem("added-lists") === null) {
  ListNames.push("My Day");
  ListNames.push("Important");
  ListNames.push("Getting Started");
  console.log ("aledisac");
}
else{
  ListNames=JSON.parse(localStorage.getItem('added-lists'));
  console.log (ListNames);
}
if(ListNames.length>3){
  let list=document.getElementsByClassName("lists")[0];
  for(let i=3;i<ListNames.length;i++){
    list.innerHTML+=`<div class="item" id="${i+1}" onclick="LoadList(this.id)">
    <span>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="blue" fill-opacity="75%" class="bi bi-list" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                      </svg></span>
    <span>${ListNames[i]}</span>
</div>`
  }
}
// typeWriter();

let count=0;
document.onkeypress = keyPress;
let id=3;
let idlist=3;
function addTask(){
    let button= document.getElementsByTagName("button")[0];
    button.onclick=null;
    button.style.display="grid";
    button.innerHTML='<form class="form-container" name="myForm" id="myForm1" onsubmit="Submit()" ></form>'
    button=document.getElementById('myForm1');
    button.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" class="bi bi-circle" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/></svg>';
    let input= document.createElement("input");
    input.type="text";
    input.id="Task";
    input.placeholder="Try adding some tasks";
    input.classList.add("inputTask");
    button.appendChild(input);
    let calender='<input type="date" id="Date" onfocus="this.showPicker()">';
    button.innerHTML+=calender;
    localStorage.setItem('added-items', JSON.stringify(array));
}
function Submit(){
  let flag=0;
  let importance=0;
    event.preventDefault();
    console.log("hi");
    let Task = document.getElementById("Task").value;
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = dd  + '-' + mm + '-' + yyyy;
    date = document.getElementById("Date").value;
    if(date==""){
        date=today;
    }
    else{
        date=date.split("-");
        date=date[2]+"-"+date[1]+"-"+date[0];
    }
    console.log(date);
    let newobj={Task, date, flag, importance};
  newobj.Task=Task;
  newobj.date=date;
  newobj.flag=0;
  newobj.importance=0;
  if(id==2){
    newobj.importance=1;
  }

  if(newobj.date==today&&id!=1){
    array[0].unshift(newobj);
  }
  array[id-1].unshift(newobj);
  LoadList(id);
    let button= document.getElementsByTagName("button")[0];
    button.onclick=addTask;
    button.style.display="flex";
    button.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><title>plus</title><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg>Add a Task'
    localStorage.setItem('added-items', JSON.stringify(array));
}
function LoadList(ids){
  console.log(ids);
  id=ids;
  for(let i=0;i<array[id-1].length;i++){
    if(array[id-1][i].flag==1){
      let temp=array[id-1][i];
      array[id-1].splice(i,1);
      array[id-1].push(temp);
    }
  }
  let Title=document.getElementsByClassName("Title")[0];
  Title.innerHTML=ListNames[id-1];
  let taskele=document.getElementsByClassName("addTask")[0];
  taskele.innerHTML="";
  if(id==1){
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = dd  + '-' + mm + '-' + yyyy;
    console.log(today);
    for(let i=0; i<array[0].length;i++){
      if(array[0][i].date==today){
        if(array[id-1][i].flag==0&&array[id-1][i].importance==0){
          taskele.innerHTML+=`<div class="task">
          <svg xmlns="http://www.w3.org/2000/svg" onclick="taskDone();" width="21" height="21" fill="currentColor" class="bi bi-circle" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/></svg> 
          <div class="tas"><div class="taskName">${array[id-1][i].Task}</div><div class="taskDate"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-calendar4-event" viewBox="0 0 16 16">
                               <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1H2zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5z"/>
                               <path d="M11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>
                             </svg>${array[id-1][i].date}</div></div>
                               <div class="important" onclick="addImportant(this);"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-star" viewBox="0 0 16 16">
                               <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                             </svg></div>
                               </div>`
        }
        else if(array[id-1][i].flag==0&&array[id-1][i].importance==1){
          taskele.innerHTML+=`<div class="task">
          <svg xmlns="http://www.w3.org/2000/svg" onclick="taskDone();" width="21" height="21" fill="currentColor" class="bi bi-circle" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/></svg> 
          <div class="tas"><div class="taskName">${array[id-1][i].Task}</div><div class="taskDate"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-calendar4-event" viewBox="0 0 16 16">
                               <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1H2zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5z"/>
                               <path d="M11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>
                             </svg>${array[id-1][i].date}</div></div>
                               <div class="important" onclick="removeImportant();"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                               <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                             </svg></div>
                               </div>`
        }
        else if(array[id-1][i].flag==1&&array[id-1][i].importance==1){
          taskele.innerHTML+=`<div class="task">
          <svg xmlns="http://www.w3.org/2000/svg" onclick="taskDone();" width="21" height="21" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16"><path d="M11.354 4.646a.5.5 0 0 1 .708.708l-5 5a.5.5 0 0 1-.708 0l-2.5-2.5a.5.5 0 1 1 .708-.708L6.5 9.293l4.646-4.647a.5.5 0 0 1 .708 0Z"/></svg> 
          <div class="tas"><div class="taskName">${array[id-1][i].Task}</div><div class="taskDate"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-calendar4-event" viewBox="0 0 16 16">
                               <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1H2zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5z"/>
                               <path d="M11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>
                             </svg>${array[id-1][i].date}</div></div>
                               <div class="important" onclick="removeImportant();"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                               <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                             </svg></div>
                               </div>`
        }
        else{
          taskele.innerHTML+=`<div class="task">
          <svg xmlns="http://www.w3.org/2000/svg" onclick="taskDone();" width="21" height="21" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16"><path d="M11.354 4.646a.5.5 0 0 1 .708.708l-5 5a.5.5 0 0 1-.708 0l-2.5-2.5a.5.5 0 1 1 .708-.708L6.5 9.293l4.646-4.647a.5.5 0 0 1 .708 0Z"/></svg> 
          <div class="tas"><div class="taskName">${array[id-1][i].Task}</div><div class="taskDate"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-calendar4-event" viewBox="0 0 16 16">
                               <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1H2zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5z"/>
                               <path d="M11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>
                             </svg>${array[id-1][i].date}</div></div>
                               <div class="important" onclick="addImportant(this);"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-star" viewBox="0 0 16 16">
                               <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                             </svg></div></div>`
        }
      }
    }
  }
  else{
  for(let i=0; i<array[id-1].length;i++){
    if(array[id-1][i].flag==0&&array[id-1][i].importance==0){
      taskele.innerHTML+=`<div class="task">
      <svg xmlns="http://www.w3.org/2000/svg" onclick="taskDone();" width="21" height="21" fill="currentColor" class="bi bi-circle" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/></svg> 
      <div class="tas"><div class="taskName">${array[id-1][i].Task}</div><div class="taskDate"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-calendar4-event" viewBox="0 0 16 16">
                           <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1H2zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5z"/>
                           <path d="M11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>
                         </svg>${array[id-1][i].date}</div></div>
                           <div class="important" onclick="addImportant(this);"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-star" viewBox="0 0 16 16">
                           <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                         </svg></div>
                           </div>`
    }
    else if(array[id-1][i].flag==0&&array[id-1][i].importance==1){
      taskele.innerHTML+=`<div class="task">
      <svg xmlns="http://www.w3.org/2000/svg" onclick="taskDone();" width="21" height="21" fill="currentColor" class="bi bi-circle" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/></svg> 
      <div class="tas"><div class="taskName">${array[id-1][i].Task}</div><div class="taskDate"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-calendar4-event" viewBox="0 0 16 16">
                           <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1H2zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5z"/>
                           <path d="M11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>
                         </svg>${array[id-1][i].date}</div></div>
                           <div class="important" onclick="removeImportant();"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                           <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                         </svg></div>
                           </div>`
    }
    else if(array[id-1][i].flag==1&&array[id-1][i].importance==1){
      taskele.innerHTML+=`<div class="task">
      <svg xmlns="http://www.w3.org/2000/svg" onclick="taskDone();" width="21" height="21" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16"><path d="M11.354 4.646a.5.5 0 0 1 .708.708l-5 5a.5.5 0 0 1-.708 0l-2.5-2.5a.5.5 0 1 1 .708-.708L6.5 9.293l4.646-4.647a.5.5 0 0 1 .708 0Z"/></svg> 
      <div class="tas"><div class="taskName">${array[id-1][i].Task}</div><div class="taskDate"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-calendar4-event" viewBox="0 0 16 16">
                           <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1H2zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5z"/>
                           <path d="M11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>
                         </svg>${array[id-1][i].date}</div></div>
                           <div class="important" onclick="removeImportant();"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                           <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                         </svg></div>
                           </div>`
    }
    else{
      taskele.innerHTML+=`<div class="task">
      <svg xmlns="http://www.w3.org/2000/svg" onclick="taskDone();" width="21" height="21" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16"><path d="M11.354 4.646a.5.5 0 0 1 .708.708l-5 5a.5.5 0 0 1-.708 0l-2.5-2.5a.5.5 0 1 1 .708-.708L6.5 9.293l4.646-4.647a.5.5 0 0 1 .708 0Z"/></svg> 
      <div class="tas"><div class="taskName">${array[id-1][i].Task}</div><div class="taskDate"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-calendar4-event" viewBox="0 0 16 16">
                           <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1H2zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5z"/>
                           <path d="M11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>
                         </svg>${array[id-1][i].date}</div></div>
                           <div class="important" onclick="addImportant(this);"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-star" viewBox="0 0 16 16">
                           <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
                         </svg></div></div>`
    }
  }}  
}
LoadList(3);
function createList(){
  let button= document.getElementsByClassName("addlist")[0];
  button.onclick=null;
  button.style.display="grid";
  button.style.backgroundColor="#2a2a2a";
  button.innerHTML='<form class="form-container" name="myList" id="myList" onsubmit="SubmitList()" ></form>'
  button=document.getElementById('myList');
  let input= document.createElement("input");
  input.type="text";
  input.id="List";
  input.placeholder="List Name";
  input.classList.add("inputTask1");
  button.appendChild(input);
  localStorage.setItem('added-items', JSON.stringify(array));
}
function SubmitList(){
  event.preventDefault();
  idlist++;
  let List=[]
  let lists=document.getElementsByClassName("lists")[0];
  let ListName = document.getElementById("List").value;
  lists.innerHTML+=`<div class="item" id="${idlist}" onclick="LoadList(this.id)">
  <span>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="blue" fill-opacity="75%" class="bi bi-list" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
        </svg></span>
  <span>${ListName}</span>
</div>`
  ListNames.push(ListName);
  array.push(List);
let button= document.getElementsByClassName("addlist")[0];
button.onclick=createList;
button.style.display="flex";
button.style.backgroundColor="#202020";
button.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><title>plus</title><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg>
<span>Add List</span>`
localStorage.setItem('added-lists', JSON.stringify(ListNames));
localStorage.setItem('added-items', JSON.stringify(array));
}
function keyPress(e){
  var x = e || window.event;
  var key = (x.keyCode || x.which);
  if(key == 13 || key == 3){
   document.yourFormName.submit();
  }
}
function taskDone(){
  event.preventDefault();
  for(let i=0;i<array[id-1].length;i++){
    if(array[id-1][i].Task==event.target.parentElement.getElementsByClassName("taskName")[0].innerHTML){
     array[id-1][i].flag=1;
    }
  }
  let task=document.getElementsByClassName("task")[0].getElementsByClassName("svg");
  
  event.target.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" onclick="taskDone();" width="21" height="21" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16"><path d="M11.354 4.646a.5.5 0 0 1 .708.708l-5 5a.5.5 0 0 1-.708 0l-2.5-2.5a.5.5 0 1 1 .708-.708L6.5 9.293l4.646-4.647a.5.5 0 0 1 .708 0Z"/></svg> `;
localStorage.setItem('added-items', JSON.stringify(array));
}
function addImportant(element){
  for(let i=0;i<array[id-1].length;i++){
    console.log(element.parentElement.getElementsByClassName("taskName")[0].innerHTML);
    console.log(array[id-1][i].Task);
    if(array[id-1][i].Task==element.parentElement.getElementsByClassName("taskName")[0].innerHTML){
     array[id-1][i].importance=1;
     let temp=array[id-1][i];
      array[1].push(temp);
    }
  }
  event.target.parentElement.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>`;
  localStorage.setItem('added-items', JSON.stringify(array));
}
function Search(){
  event.preventDefault();
  let search=document.getElementById("search").value;
  let task=document.getElementsByClassName("task");
  for(let i=0;i<task.length;i++){
    if(task[i].getElementsByClassName("taskName")[0].innerHTML.includes(search)){
      task[i].style.display="flex";
    }
    else{
      task[i].style.display="none";
    }
  }
}
function typeWriter() {
  document.getElementById("footer").innerHTML += txt.charAt(i);
  i++;
  setTimeout(typeWriter, speed);
}