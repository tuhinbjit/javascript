const cart = [
    { id: 1, name: "Laptop", price: 1200, category: "Tech" },
    { id: 2, name: "Mouse", price: 50, category: "Accessories" },
    { id: 3, name: "Keyboard", price: 150, category: "Accessories" },
    { id: 4, name: "Monitor", price: 300, category: "Tech" }
];



// Loop in JS Array (3 types)
// 1. for loop
for (let i = 0; i < cart.length; i++) {
    console.log(cart[i].name);
}

// 2. Using for...of loop
for (const item of cart) {
    console.log(item.name); 
}

// 3. Using forEach loop
cart.forEach(item => {
    console.log(item.name);
});

// 4. Using map method
cart.map(item => {
    console.log(item.name);
});