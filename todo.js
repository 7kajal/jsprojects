//To Do App
//create an array empty array for tasks.
//create a function for adding tasks.
//create a function to list all the tasks.
//create a function to delete a specific task.

let arr  = [];
const addTask = (task) =>{
     arr.push(task);
    console.log(`Task ${task} is added.`)
}
addTask("Reading");
addTask("Painting");
addTask("Writing");
addTask("Singing");


const listTask = (task) =>{                        
    console.log("Tasks List:");        
    arr.map((task,i) => {              //arr.map((task) => {
    return console.log(`${i+1}.${task}`) //return console.log(`${i}.${task}`) 
  });                                  
 }                                     
listTask();

const deleteTask = (task) =>{
    arr.pop();
    console.log(`Task ${task} is deleted.`)
}
deleteTask("Painting");

