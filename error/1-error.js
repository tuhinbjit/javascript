class PaymentError extends Error {
  constructor(message, transactionId) {
    super(message);
    this.name = "PaymentError";
    this.transactionId = transactionId;
  }
}

const processPayment = (balance, amount) => {
  if (balance < amount) {
    throw new PaymentError("Insufficient Balance!", "TXN-0000");
  }
  return "Payment Successful!";
};

const checkout = () => {
  const loadingSpinner = document.getElementById('spinner');
  loadingSpinner.style.display = 'block';

  try {
    const result = processPayment(2000, 5000);
    console.log(result);
  } catch (error) {
    if (error instanceof PaymentError) {
      console.log(`Payment Failed: ${error.message}. ID: ${error.transactionId}`);
    } else {
      console.log("System crashed! Please try again later.");
    }
  } finally {
    loadingSpinner.style.display = 'none';
  }
};