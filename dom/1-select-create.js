const cartList = document.getElementById('cart-items');
const totalDisplay = document.querySelector('.total-price');

const newItem = document.createElement('li');
newItem.className = 'cart-item';
newItem.textContent = 'Apple AirPods ';

const removeBtn = document.createElement('button');
removeBtn.className = 'delete-btn';
removeBtn.textContent = 'X';

newItem.appendChild(removeBtn);
cartList.appendChild(newItem);

totalDisplay.textContent = '৳ 15000';

removeBtn.addEventListener('click', () => {
  newItem.remove();
});