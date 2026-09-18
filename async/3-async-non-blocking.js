console.log("1. Start");

fetch('https://api.example.com/data') 
  .then(data => console.log("2. Data received"));

console.log("3. End");