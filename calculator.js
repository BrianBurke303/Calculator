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
  const values = {amount: 1000, years: 5, rate: 2};
  const userAmount = (document.getElementById("loan-amount"));
  userAmount.values = values.amount;
  const userYears = (document.getElementById("loan-years"));
  userYears.values = values.years;
  const userRate = (document.getElementById("loan-rate"));
  userRate.values = values.rate;
  update();


  // let button = document.querySelector("button");

  // button.addEventListener("click", function(e){
  //   e.preventDefault();
  //   document.getElementById("monthly-payment").textContent = payment.toFixed(2)
  // })   
}

// Get the current values from the UI
// Update the monthly payment
function update() {
 const inputValues = getCurrentUIValues();
 updateMonthly(calculateMonthlyPayment(inputValues))
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const monthlyRate = (values.rate / 100) / 12;
  const n = Math.floor(values.years * 12);
  return (
    (monthlyRate * values.amount) / 
    (1 - Math.pow((1 + monthlyRate), -n))
  ).toFixed(2)

  // let payment = (amount.value * (rate.value / 100)) / (1 - ((1 + (rate.value / 100)) ** (length.value * 12 * -1)))


}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyUI = document.getElementById("monthly-payment");
  monthlyUI.innerText = "$" + monthly

}
