const notDoneTasks = document.getElementById("notDoneTasksField");
const doneTasks = document.getElementById("doneTasksField");

const deleteTask = document.getElementById("deleteTask");
const markDoneTask = document.getElementById("markDoneTask");

let tasksUncomplete = JSON.parse(localStorage.getItem("tasksUncompleteArray"));
let tasksComplete = JSON.parse(localStorage.getItem("tasksCompleteArray"));

let ulNotDoneTasks = document.getElementById("ulNotDoneTasks");
let ulDoneTasks = document.getElementById("ulDoneTasks");

for (let i = 0; i < Object.keys(tasksUncomplete).length; i ++)
{  
    let li = document.createElement("li");
    li.appendChild(document.createTextNode("Title: " + tasksUncomplete[i].title + 
    ";   Description: "+ tasksUncomplete[i].description + 
    ";   Email: " + tasksUncomplete[i].email + "\n"));
    ulNotDoneTasks.appendChild(li);
}

if (tasksComplete !== null)
{
    for (let i = 0; i < Object.keys(tasksComplete).length; i ++)
    {  
        let li = document.createElement("li");
        li.appendChild(document.createTextNode("Title: " + (tasksComplete[i])[0].title + 
        ";   Description: "+ (tasksComplete[i])[0].description + 
        ";   Email: " + (tasksComplete[i])[0].email + "\n"));
        ulDoneTasks.appendChild(li);
    }
}

deleteTask.addEventListener("change", () => {
    if ((deleteTask.value-1) <= Object.keys(tasksUncomplete).length)
    {
        tasksUncomplete.splice(deleteTask.value - 1, 1);
        localStorage.setItem("tasksUncompleteArray", JSON.stringify(tasksUncomplete));

        if (Object.keys(tasksUncomplete).length === 0)
        {
            let indexDeleteCompletedTask = (deleteTask.value - 1) -  Object.keys(tasksUncomplete).length;
            tasksComplete.splice(indexDeleteCompletedTask, 1);
            localStorage.setItem("tasksCompleteArray", JSON.stringify(tasksComplete));
        }
    }
    else
    {
        let indexDeleteCompletedTask = (deleteTask.value - 1) -  Object.keys(tasksUncomplete).length;
        tasksComplete.splice(indexDeleteCompletedTask, 1);
        localStorage.setItem("tasksCompleteArray", JSON.stringify(tasksComplete));
    }
    
    location.reload();
})

markDoneTask.addEventListener("change", () => {
    if ((markDoneTask.value - 1) <= Object.keys(tasksUncomplete).length)
    {   
        if(tasksUncomplete !== [])
        {
            let taskToTransfer = tasksUncomplete.splice(markDoneTask.value - 1, 1);
            localStorage.setItem("tasksUncompleteArray", JSON.stringify(tasksUncomplete));

            if (tasksComplete === null)
            {
                tasksComplete = [];
            }

            tasksComplete.push(taskToTransfer);

            localStorage.setItem("tasksCompleteArray", JSON.stringify(tasksComplete));
            
            location.reload();
        }
       
    }
})