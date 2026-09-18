function myFunc(input) {
    return input * 2;
}


// function myFunc(input) {
//     console.log(input);
// }



const getStudent = () => ({ name: "Rahim", class: "VIII" }); 

console.log(getStudent());

//function with default param
function orderDrink(drink = "Water") { 
    console.log(drink); 
}


//function with rest parameter
function myOrder(main, ...snacks) {
    console.log(snacks); 
} 


//function with object destructuring as parameter
function printUser({ name, role }) { 
    console.log(name, role);
}


//Impure Function: changes external state (totalCart)
function addToCart(price) {
    totalCart += price; 
}

//Pure Function: does not change external state, returns a new value based on input
function calculateTotal(currentTotal, price) {
    return currentTotal + price; 
}



// Callback Function Example: a function passed as an argument to another function, to be executed later

function makePizza(callback) {
    console.log("Pizza is baking...");
    callback(); 
}

makePizza(function() { console.log("Pizza is ready, I am eating!"); });


// closure example
function createBankAccount(initialAmount) {
    let _balance = initialAmount; // private secret

    return {
        deposit: function(amount) {
            _balance += amount;
            console.log("New Balance:", _balance);
        },
        getBalance: function() {
            return _balance;
        }
    };
}

const rahimsAccount = createBankAccount(500);
rahimsAccount.deposit(200); 
console.log(rahimsAccount._balance);