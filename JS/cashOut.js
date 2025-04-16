document.getElementById("cashout-btn").addEventListener("click", function (event) {
  event.preventDefault();

  const agentNumberInput = document.getElementById("agent-number");
  const amountInput = document.getElementById("cashout-amount");
  const pinInput = document.getElementById("cashout-pin");


  const pin = pinInput.value.trim();
  const amount = amountInput.value.trim();
  const agentNumber = agentNumberInput.value.trim();

  if (agentNumber === "") {
    showToast("Please enter the agent number.", "error");
    return;
  }

  if (amount === "" || pin === "") {
    showToast("Please fill in both amount and PIN.", "error");
    return;
  }

  if (isNaN(amount) || parseFloat(amount) <= 0) {
    showToast("Please enter a valid amount.", "error");
    return;
  }

  const storedPin = sessionStorage.getItem("userPin");
  if (pin !== storedPin) {
    showToast("Incorrect PIN!", "error");
    return;
  }

  const convertedAmount = parseFloat(amount);
  const mainBalance = document.getElementById("main-balance").innerText;
  const convertedMainBalance = parseFloat(mainBalance);

  if (convertedAmount > convertedMainBalance) {
    showToast("Insufficient balance.", "error");
    return;
  }

  const newBalance = convertedMainBalance - convertedAmount;
  document.getElementById("main-balance").innerText = newBalance.toFixed(2);

  showToast("Cash out successful!", "success");

  amountInput.value = "";
  pinInput.value = "";
  agentNumberInput.value = "";

  saveTransaction("Cash Out", `৳${convertedAmount.toFixed(2)} Withdrawn`);
});
