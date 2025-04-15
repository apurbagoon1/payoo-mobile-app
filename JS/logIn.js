// Function to show toast notifications at the top center
function showToast(message, type = 'success') {
    const toast = document.getElementById("toast");
    const toastMessage = document.getElementById("toast-message");

    toastMessage.innerText = message;

    toast.className = `fixed top-4 left-1/2 transform -translate-x-1/2 z-50 px-4 py-2 rounded-lg shadow-lg font-medium text-sm transition-all duration-300 ${type === 'success' ? 'bg-green-500' : 'bg-red-500'} text-white`;

    toast.classList.remove("hidden");

    setTimeout(() => {
        toast.classList.add("hidden");
    }, 3000);
}

// Login form validation and navigation
document.getElementById("login-btn").addEventListener("click", function (event) {
    event.preventDefault();

    const accountNumber = document.getElementById("account-number").value.trim();
    const pin = document.getElementById("pin").value.trim();

    if (accountNumber === "" || pin === "") {
        showToast("Please enter both account number and PIN.", "error");
        return;
    }

    if (accountNumber.length !== 11 || isNaN(accountNumber)) {
        showToast("Invalid Mobile Number. Must be 11 digits.", "error");
        return;
    }

    if (pin.length !== 4 || isNaN(pin)) {
        showToast("PIN must be 4 numeric digits.", "error");
        return;
    }

    // Success message (no hardcoded credential check)
    showToast("Login successful!", "success");

    sessionStorage.setItem("userPin", pin);

    setTimeout(() => {
        window.location.href = "homepage.html";
    }, 1000);
});
