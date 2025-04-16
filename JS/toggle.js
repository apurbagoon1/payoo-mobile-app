// Hide all sections initially
document.getElementById("add-money").style.display = "none";
document.getElementById("cashout").style.display = "none";
document.getElementById("transfer-money").style.display = "none";
document.getElementById("get-bonus").style.display = "none";
document.getElementById("pay-bill").style.display = "none";
document.getElementById("transaction-history").style.display = "none";

// Show default message initially
document.getElementById("default-message").style.display = "flex";

// Helper function to hide all sections
function hideAllSections() {
    document.getElementById("add-money").style.display = "none";
    document.getElementById("cashout").style.display = "none";
    document.getElementById("transfer-money").style.display = "none";
    document.getElementById("get-bonus").style.display = "none";
    document.getElementById("pay-bill").style.display = "none";
    document.getElementById("transaction-history").style.display = "none";
}

// Helper function to show selected section
function showSection(sectionId) {
    hideAllSections();
    document.getElementById("default-message").style.display = "none";
    document.getElementById(sectionId).style.display = "block";
}

// Event listeners for each box
document.getElementById("add-money-box").addEventListener("click", function () {
    showSection("add-money");
});

document.getElementById("cashout-box").addEventListener("click", function () {
    showSection("cashout");
});

document.getElementById("transfer-money-box").addEventListener("click", function () {
    showSection("transfer-money");
});

document.getElementById("get-bonus-box").addEventListener("click", function () {
    showSection("get-bonus");
});

document.getElementById("pay-bill-box").addEventListener("click", function () {
    showSection("pay-bill");
});

document.getElementById("transactions-box").addEventListener("click", function () {
    showSection("transaction-history");
    displayTransactions(false); // keep this if your transactions need to be loaded
});

// Optional: function to reset UI to default
function resetToDefault() {
    hideAllSections();
    document.getElementById("default-message").style.display = "flex";
}
