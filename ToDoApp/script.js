let taskList  = []; 

const addTask = (taskName,priorityLevel,deadline) =>{
      let task ={
        taskName: taskName,
        priorityLevel: priorityLevel,
        deadline: deadline
     };
     taskList.push(task)
} 
addTask("Reading","HIGH","today");
addTask("Painting","LOW","today");
addTask("Writing","HIGH","tomorrow");
addTask("Singing","LOW","tomorrow");
addTask("coding","HIGH","today");
addTask("Complete Notes","HIGH","tomorrow")

let filterTask =(priorityLevel) =>{
    
    const taskfiltered = taskList.filter((task) =>task.priorityLevel === priorityLevel );
    if(!taskfiltered.length){
        console.log("Not task found");
    }
    else{
        console.log("The filtered task is : ")
        console.log( taskfiltered);
    }
}

const deleteTask = (taskName) =>{
    const taskIndex = taskList.map((task) => task.taskName);
    const index = taskIndex.indexOf(taskName);

    if(index === -1)
    {
        console.log("Task is not found.");
    }
    else{
        console.log("Task is deleted : " +taskName)
        taskList.splice(index, 1);
    
    }
}
filterTask("lw");
filterTask("LOW")
deleteTask("Complete Notes");
console.log(taskList);
deleteTask("test");


const taskToDoFirst =() => {
    return filterTask("HIGH");
}
taskToDoFirst();


filterTask =(deadline ,priorityLevel) =>{
    const taskfiltered = taskList.filter((task) =>task.deadline === deadline && task.priorityLevel === priorityLevel);
    console.log(" Task which has deadline today and priority Level is High : ")
    console.log( taskfiltered);
}

const taskForToday = () =>{
    return filterTask("today" , "HIGH") ;  
}

taskForToday();


const listTask = () =>
    console.log("Only 5 task list:");
    taskList.slice(0,5);

listTask()
console.log(taskList);

//Using DOM
const texts = document.querySelector("#taskname");
const btn =document.querySelector("#btn");
const priority = document.querySelector("#priority");
const deadline = document.querySelector("#deadline");
const storeTask = document.querySelector("#sectionStore");

btn.addEventListener("click",btnFunc);

function btnFunc(){
    let taskValue = taskname.value.trim();

    if(taskValue === ""){
        return ;
    }

    const createDiv = document.createElement("div");
    createDiv.classList.add("classDiv");
    
    const store = document.createElement("p");
    store.textContent = taskValue;

    const priorityLevelValue = document.createElement("div");
    priorityLevelValue.textContent = priority.value;

    const deadlineValue = document.createElement("div");
    deadlineValue.textContent = deadline.value;

    const del = document.createElement("button");
    del.textContent = "Delete Task";

    del.addEventListener("click", deleteFunc);

    function deleteFunc(){
        sectionStore.removeChild(createDiv);

    }

    const complete = document.createElement("button");
    complete.textContent = "Mark As Completed";

    complete.addEventListener("click", completeFunc)

    function completeFunc(){
        const para = document.createElement("p")
        para.textContent ="Your Task Completed.";

        sectionStore.removeChild(complete);
        createDiv.append(para)

    }

    createDiv.append(store);
    createDiv.append(priorityLevelValue);
    createDiv.append(deadlineValue);
    createDiv.append(del);
    sectionStore.append(createDiv);
    sectionStore.append(complete);
    console.log(storeTask);
}
