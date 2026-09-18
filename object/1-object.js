const product = {
    name: "Sony WH-1000XM5",
    brand: "Sony",
    price: 350,
    inStock: true,
    specifications: {
        color: "Black",
        batteryLife: "30 hours"
    }
};

// Destructuring - 
const { 
    name: productName, 
    discount = 10,     
    specifications: { color }
} = product;

console.log(productName); 
console.log(discount);    
console.log(color);       



// Shallow copy of the product object
const offerProduct = { ...product }; 
offerProduct.specifications.color = "Silver"; 

console.log(product.specifications.color);



// deep copy of the product object
const deepCopyProduct = JSON.parse(JSON.stringify(product));
deepCopyProduct.specifications.color = "Gold";

console.log(product.specifications.color); 
console.log(deepCopyProduct.specifications.color);





// Object

console.log(Object.keys(product));
console.log(Object.values(product)); 
console.log(Object.entries(product)); 


// Object freezing: prevents modifications to the object
Object.freeze(product); // Shallow copy

product.price = 100; 
console.log(product.price); 
product.specifications.batteryLife = "1 Hour"; 
console.log(product.specifications.batteryLife);


// Map - key-value pair collection
const productReviews = new Map();
productReviews.set(product, "Best noise cancellation ever!"); 
console.log(productReviews.get(product));


// Set : unique collection of values
const rawTags = ['audio', 'sony', 'audio', 'music', 'sony'];
const uniqueTags = [...new Set(rawTags)]; 
console.log(uniqueTags); 