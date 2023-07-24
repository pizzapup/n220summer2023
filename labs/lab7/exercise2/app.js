// Bill Caclulator
// Calculate the bill amount and total bill amount based on the bill amount entered by the user and log it to the console.

class BillCalculator {
  // We use a static method because we don't need to instantiate the class to use it (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static)
  static calculateBill() {
    const billAmount = parseFloat(document.getElementById("billInput").value); // Get the value of the "billInput" element and convert it to a number type

    // If the input is a number type, calculate the tip and total bill amount (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN)
    if (!isNaN(billAmount)) {
      const tipAmount = billAmount * 0.2; // Calculate tip (20% of bill)

      const totalBillAmount = billAmount + tipAmount; // Calculate the total bill amount (bill amount + tip amount)

      // Log the tip amount and total bill amount to the console
      // Format to 2 decimal places and add a dollar sign (https://www.w3schools.com/jsref/jsref_tofixed.asp)
      console.log(
        `Tip: $${tipAmount.toFixed(2)}. Total: $${totalBillAmount.toFixed(2)}`
      );
    } else {
      // If the input is not a number type, log an error message to the console
      console.log("Invalid input. Please enter a numerical value.");
    }
  }
}

// Add event listener to the calculate button (https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
document
  .getElementById("calculateButton")
  .addEventListener("click", BillCalculator.calculateBill);
