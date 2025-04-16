document.getElementById('add-money-btn').addEventListener('click', function (event) {
    event.preventDefault();

    const bankSelect = document.getElementById("bank-select");
    const accountNumberInput = document.getElementById("account-number");
    const amountInput = document.getElementById("add-money-amount");
    const pinInput = document.getElementById("add-money-pin");

    const bank = bankSelect.value;
    const accountNumber = accountNumberInput.value.trim();
    const amount = amountInput.value.trim();
    const pin = pinInput.value.trim();

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

    if (pin.length !== 4 || isNaN(pin)) {
        showToast("PIN must be 4 numeric digits.", "error");
        return;
    }

    const userPin = sessionStorage.getItem("userPin");
    if (pin !== userPin) {
        showToast("Incorrect PIN!", "error");
        return;
    }

    const convertedAmount = parseFloat(amount);
    const mainBalance = parseFloat(document.getElementById("main-balance").innerText);
    const newBalance = mainBalance + convertedAmount;
    document.getElementById("main-balance").innerText = newBalance.toFixed(2);

    // Reset fields
    bankSelect.value = "";
    accountNumberInput.value = "";
    amountInput.value = "";
    pinInput.value = "";

    showToast("Money added successfully!", "success");
    saveTransaction("Bank Deposit", `৳${convertedAmount.toFixed(2)} Added`);
});
