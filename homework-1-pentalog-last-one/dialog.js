const showButton = document.getElementById("showDialog");
const taskDialog = document.getElementById("taskDialog");
const outputBox = document.querySelector("output");
const confirmBtn = taskDialog.querySelector("#confirmBtn");

const title = document.querySelector("#title");
const description = taskDialog.querySelector("#description");
const email = taskDialog.querySelector("#email");

const showTasks = document.getElementById("showTasks");

let isTitle = false;
let isDescription = false;
let isEmail = false;

let task = {
  title: "",
  description: "",
  email: "",
};

// opens modally? the dialog box, that means it can close with ESC (if you use just show it wont do that)
showButton.addEventListener("click", () => {
  taskDialog.showModal();
  console.log("Dialog opened!");
});

// event listener on title's input zone; when clicking out of it, the member "title" within the object "task" gets = with the input's value  
title.addEventListener("change", () => {
  task.title = title.value;


  if(task.title === "")
  {
    isTitle = false;
  }
  else
  {
    isTitle = true;
  }
  
});

// same here see line 27 

description.addEventListener("change", () => {
  task.description = description.value;

  if(task.description === "")
  {
    isDescription = false;
  }
  else
  {
    isDescription = true;
  }
  
});

// same here see line 27 

email.addEventListener("change", () => {
  task.email = email.value;

  if(task.email === "")
  {
    isEmail = false;
  }
  else
  {
    isEmail = true;
  }
});



taskDialog.addEventListener("close", (e) => {
  if (isTitle === true && isDescription === true) 
  {
      if(isEmail === true)
      {
        outputBox.value = "Task saved."; // Have to check for "default" rather than empty string
       
        let tasksUncomplete = JSON.parse(localStorage.getItem("tasksUncompleteArray"));
        if (tasksUncomplete === null)
        {
          tasksUncomplete = [];
        }

        tasksUncomplete.push(task);

        localStorage.setItem("tasksUncompleteArray", JSON.stringify(tasksUncomplete));
    
        task = {
          title: "",
          description: "",
          email: "",
        };
    
        title.value = null;
        description.value = null;
        email.value = null;
    
        isTitle= false;
        isDescription = false;
        isEmail = false;
      }  
  }
  else
  {
      outputBox.value = "No return value."
     
      console.log(task);
    
      task = {
        title: "",
        description: "",
        email: "",
      };
      
      title.value = null;
      description.value = null;
      email.value = null;

   
      isTitle= false;
      isDescription = false;
      isEmail = false;
  }
});

//it'll go to close behaviour with the values from object task
// Prevent the "confirm" button from the default behavior of submitting the form, and close the dialog with the `close()` method, which triggers the "close" event.
confirmBtn.addEventListener("click", (event) => {
  event.preventDefault(); // We don't want to submit this fake form
  taskDialog.close(task); // Have to send the select box value here.
});

