// primitive vs reference types in JavaScript


const product = {
    name: "Sony WH-1000XM5",
    brand: "Sony",
    price: 350,
    inStock: true
};

// console.log(product.name);  
// console.log(product.price); 
product.name = "Sony WH-1000XM4";
console.log(product.name);      
product.price = 300;
console.log(product.price); 


// product = {
//     name: "Sony WH-1000XM3",
//     brand: "Sony",
//     price: 250,
//     inStock: false
// };




// let car = { name: "Toyota", model: "Corolla" };

// function updateCar(personalCar) {
//     personalCar.model = "Updated Model"; 
//     personalCar = { name: "Tuhin", model: "AI Expert" }; 
// }

// updateCar(car);
// console.log(car.model); 


























