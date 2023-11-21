const numberInput = document.getElementById("numberInput");
const showNumberButton = document.getElementById("showNumberButton");
const displayNumber = document.getElementById("displayNumber");

var count = 1;

function formatNumber() {
  let rawInput = numberInput.value;   

  if (rawInput.length == 0) {
    rawInput = "";
    count = 1;
    return;
  }

  const inputValue = numberInput.value.replace(/\D/g, "");

  let formattedValue;
  if (count === 1) {
    formattedValue = inputValue ? "+1" + inputValue : "";
  } else {
    formattedValue = "+" + inputValue;
  }

  if (inputValue.length > 0 && inputValue.length <= 4 && count < 5) {
    formattedValue = formattedValue.replace(/(\d{1})/, "$1(");
  } else if (inputValue.length > 4 && inputValue.length <= 7) {
    formattedValue = formattedValue.replace(/(\d{1})(\d{3})/, "$1($2) ");
  } else if (inputValue.length > 7 && inputValue.length <= 10) {
    formattedValue = formattedValue.replace(
      /(\d{1})(\d{3})(\d{3})/,
      "$1($2) $3-"
    );
  } else if (inputValue.length > 10) {
    formattedValue = formattedValue.replace(
      /(\d{1})(\d{3})(\d{3})(\d{4})/,
      "$1($2) $3-$4"
    );
  }

  numberInput.value = formattedValue;
  count++;
}
showNumberButton.addEventListener("click", function () {
  const formattedNumber = numberInput.value;

  displayNumber.textContent = formattedNumber.substring(1).replace(/\D/g, "");
  console.log(formattedNumber.substring(1).replace(/\D/g, ""));
});
