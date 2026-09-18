
// Event Delegation
const cartContainer = document.querySelector('#cart-items');

cartContainer.addEventListener('click', function(event) {
  if (event.target.classList.contains('delete-btn')) {
    const itemToRemove = event.target.closest('.cart-item');
    itemToRemove.remove();
  }
});