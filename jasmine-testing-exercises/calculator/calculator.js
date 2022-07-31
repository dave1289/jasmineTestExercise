let value = {}
const payWindow = document.querySelector('span')

window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  document.getElementById("loan-amount").value = 150000;
  value.amount = 150000;
  document.getElementById("loan-years").value = 30;
  value.years = 30;
  document.getElementById("loan-rate").value = 5;
  value.rate = 5;
  calculateMonthlyPayment(value)
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  value = {};
  let amount = document.getElementById('loan-amount').value
  let years = document.getElementById("loan-years").value
  let rate = document.getElementById("loan-rate").value
  value.amount = amount;
  value.years = years;
  value.rate = rate;
  calculateMonthlyPayment(value)
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  var i = (values.rate / 100) / 12;
  var n = values.years * 12;
  var p = values.amount;
  var top = p * i;
  var bottom = 1 - Math.pow((1 + i), -n);
  let payment = top / bottom;
  let finalPay = (parseFloat(payment).toFixed(2))
  // updateMonthly(finalPay)
  return (parseFloat(finalPay).toFixed(2))
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  payWindow.textContent = monthly
}
