document.getElementById("transfer-btn").addEventListener("click", function (event) {
  event.preventDefault();

  const amountInput = document.getElementById("transfer-amount");
  const pinInput = document.getElementById("transfer-pin");
  const numberInput = document.getElementById("user-account-number");

  const amount = amountInput.value.trim();
  const pin = pinInput.value.trim();
  const number = numberInput.value.trim();

  if (amount === "" || pin === "" || number === "") {
      showToast("Please fill in all fields.", "error");
      return;
  }

  if (number.length !== 11 || isNaN(number)) {
      showToast("Enter a valid 11-digit mobile number.", "error");
      return;
  }

  if (isNaN(amount) || parseFloat(amount) <= 0) {
      showToast("Enter a valid amount greater than 0.", "error");
      return;
  }


  const userPin = sessionStorage.getItem("userPin");
  if (pin !== userPin) {
      showToast("Incorrect PIN!", "error");
      return;
  }

  const convertedAmount = parseFloat(amount);
  const mainBalance = parseFloat(document.getElementById("main-balance").innerText);

  if (convertedAmount > mainBalance) {
      showToast("Insufficient balance.", "error");
      return;
  }

  const newBalance = mainBalance - convertedAmount;
  document.getElementById("main-balance").innerText = newBalance.toFixed(2);
  showToast("Money transferred successfully!", "success");

  amountInput.value = "";
  pinInput.value = "";
  numberInput.value = "";
});
