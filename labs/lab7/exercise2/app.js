class BillCalculator {
  // Class for calculating tip and total bill

  // Method to handle button click event
  static calculateBill() {
    // Retrieve the value entered in the input field with id "billInput"
    const billAmount = parseFloat(document.getElementById("billInput").value);

    // Check if the entered value is numerical
    if (!isNaN(billAmount)) {
      // Calculate tip amount (assuming 20% tip rate, anything else would be rude)
      const tipAmount = billAmount * 0.2;

      // Calculate total bill amount including tip
      const totalBillAmount = billAmount + tipAmount;

      // Format the tip and total bill amounts for console output
      const formattedTipAmount = `$${tipAmount.toFixed(2)}`;
      const formattedTotalBillAmount = `$${totalBillAmount.toFixed(2)}`;

      // Log the tip and total bill amounts to the developer console
      console.log(
        `Tip: ${formattedTipAmount}. Total: ${formattedTotalBillAmount}`
      );
    } else {
      // If the entered value is not numerical, display an error message
      console.log("Invalid input. Please enter a numerical value.");
    }
  }
}

// Add event listener to the button with id "calculateButton"
// When the button is clicked, call the BillCalculator.calculateBill method
document
  .getElementById("calculateButton")
  .addEventListener("click", BillCalculator.calculateBill);
