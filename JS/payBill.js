document.getElementById("pay-bill-btn").addEventListener("click", function (event) {
  event.preventDefault();

  const bankSelect = document.getElementById("bank-pay");
  const accountNumberInput = document.getElementById("biller-account-number");
  const amountInput = document.getElementById("pay-bill-amount");
  const pinInput = document.getElementById("pay-bill-pin");

  const bank = bankSelect.value;
  const accountNumber = accountNumberInput.value.trim();

  const amount = amountInput.value.trim();
  const pin = pinInput.value.trim();

  // Validation
  if (bank === "") {
    showToast("Please select a bank.", "error");
    return;
  }

  if (accountNumber === "") {
    showToast("Please enter your account number.", "error");
    return;
  }

  if (amount === "" || pin === "") {
    showToast("Please fill in both amount and PIN.", "error");
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
  showToast("Bill paid successfully!", "success");

  bankSelect.value = "";
  accountNumberInput.value = "";
  amountInput.value = "";
  pinInput.value = "";
});
