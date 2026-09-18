// Food Delivery Flow - Callback Hell
loginUser("rahim123", "password", (user) => {
  checkRestaurantOpen(user.location, "Pizza Burg", (restaurant) => {
    checkFoodAvailability(restaurant.id, "Pizza", (food) => {
      createOrder(user.id, food.id, (order) => {
        processPayment(order.id, "VISA", (paymentStatus) => {
          assignRider(paymentStatus.id, (rider) => {
            notifyUser(user.id, rider.details, (successMessage) => {
              console.log("Order completely successful: ", successMessage);
            });
          });
        });
      });
    });
  });
});






showLoadingSpinner();

loginUser("rahim123", "password")
  .then(user => checkRestaurantOpen(user.location, "Pizza Burg"))
  .then(restaurant => checkFoodAvailability(restaurant.id, "Pizza"))
  .then(food => createOrder(user.id, food.id))
  .then(order => processPayment(order.id, "VISA"))
  .then(paymentStatus => assignRider(paymentStatus.id))
  .then(rider => notifyUser(user.id, rider.details))
  .then(successMessage => {
    console.log("Order completely successful: ", successMessage);
  })
  .catch(error => {
    console.log("Something went wrong in the process: ", error.message);
  })
  .finally(() => {
    hideLoadingSpinner();
  });








  const processCompleteOrder = async () => {
  showLoadingSpinner();
  
  try {
    const user = await loginUser("rahim123", "password");
    const restaurant = await checkRestaurantOpen(user.location, "Pizza Burg");
    const food = await checkFoodAvailability(restaurant.id, "Pizza");
    const order = await createOrder(user.id, food.id);
    const paymentStatus = await processPayment(order.id, "VISA");
    const rider = await assignRider(paymentStatus.id);
    const successMessage = await notifyUser(user.id, rider.details);
    
    console.log("Order completely successful: ", successMessage);
  } catch (error) {
    console.log("Order failed! Reason: ", error.message);
  } finally {
    hideLoadingSpinner();
  }
};

processCompleteOrder();











try {
  const [profile, cart, offers] = await Promise.all([
    fetchUserProfile(),
    fetchCartItems(),
    fetchTodayOffers()
  ]);
  renderHomePage(profile, cart, offers);
} catch (error) {
  showErrorScreen("Failed to load homepage data");
}




const results = await Promise.allSettled([
  uploadImage(img1),
  uploadImage(img2),
  uploadImage(img3)
]);


const fastestResponse = await Promise.race([
  fetchDataFromServer("Dhaka"),
  fetchDataFromServer("Singapore")
]);


const getRestaurantList = async () => {
  try {
    const response = await fetch("https://api.foodapp.com/v1/restaurants");
    
    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Restaurants loaded: ", data);
    
  } catch (error) {
    console.log("Failed to fetch restaurants: ", error.message);
  }
};

getRestaurantList();