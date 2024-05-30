/*To Do App
1.create an array empty array for tasks.
2.create a function for adding tasks with deatails like
.taskName
.priority level(high,low)
.deadline(Tomorrow,Today)
3.filterTask function based on priority level which takes the priority as a parameter and based on that filter the task and display it.
4.deleteTask function which takes taskName as parameter and deletes that.
.Also if task is not found in that array,display message that task not found.
5.taskToDoFirst function which uses filterTask function to filter the task based on high priority and shows only that task which have high priority.
6.taskForToday function which uses filterTask function.
.based on that it shows only those task which has deadline today and also priority level is High.
7.listTask function to list all the tasks.
.and is should display only first 5 task.
----------------------------------------------------------------------------------------------------------------------------------------*/
//1)
let taskList  = [];
//2)
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
//3)
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
//4)
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

//5)
const taskToDoFirst =() => {
    return filterTask("HIGH");
}
taskToDoFirst();

//6)
 filterTask =(deadline ,priorityLevel) =>{
        const taskfiltered = taskList.filter((task) =>task.deadline === deadline && task.priorityLevel === priorityLevel);
        console.log(" Task which has deadline today and priority Level is High : ")
        console.log( taskfiltered);
        
}

const taskForToday = () =>{
    return filterTask("today" , "HIGH") ;  
}

taskForToday();

//7)
const listTask = () =>
    console.log("Only 5 task list:");
    taskList.slice(0,5);

listTask()
console.log(taskList);

