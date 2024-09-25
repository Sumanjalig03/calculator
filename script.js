// Clear the entire display
function clearDisplay() {
    document.getElementById("display").value = "";
  }
  
  // Delete the last character
  function deleteLast() {
    const display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
  }
  
  // Append numbers or operators to the display
  function appendToDisplay(value) {
    const display = document.getElementById("display");
    display.value += value;
  }
  
  // Calculate the result using eval()
  function calculate() {
    const display = document.getElementById("display");
    try {
      display.value = eval(display.value);
    } catch (e) {
      display.value = "Error";
    }
  }
  