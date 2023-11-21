const numberInput = document.getElementById("numberInput");
const displayNumber = document.getElementById("displayNumber");

numberInput.addEventListener("input", formatNumber);
var count = 1;

function formatNumber() {
  let inputValue = numberInput.value.replace(/\D/g, "");

  if (inputValue.length >= 1) {
    var formattedValue = `+1( ${inputValue.substring(1, 4)}`;

    if (inputValue.length >= 4) {
      formattedValue += ") " + inputValue.substring(4, 7);

      if (inputValue.length >= 7) {
        formattedValue += " - " + inputValue.substring(7, 11);
      }
      
    }
  }

  count++;
  numberInput.value = formattedValue;
}

document
  .getElementById("showNumberButton")
  .addEventListener("click", function () {
    const formattedNumber = numberInput.value;
    const cleanNumber = formattedNumber.replace(/\D/g, "");

    displayNumber.textContent = cleanNumber;
    console.log(cleanNumber);
  });
