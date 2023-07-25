// Store a value in localStorage
localStorage.setItem("username", "JohnDoe");

// Retrieve the stored value from localStorage
let username = localStorage.getItem("username");
console.log("Username:", username);

// Update the stored value in localStorage
localStorage.setItem("username", "JaneSmith");
username = localStorage.getItem("username");
console.log("Updated Username:", username);

// Remove the stored value from localStorage
localStorage.removeItem("username");

// Check if the value is removed
username = localStorage.getItem("username");
if (username === null) {
  console.log("Username has been removed from localStorage.");
}
