const orderForm = document.getElementById('orderForm');

if (orderForm) {
  orderForm.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Thanks for shopping with MobileHub! We will contact you shortly to confirm your order.');
    orderForm.reset();
  });
}
