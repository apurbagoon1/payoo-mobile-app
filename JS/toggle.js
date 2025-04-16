document.getElementById("add-money").style.display = "none";
document.getElementById("cashout").style.display = "none";
document.getElementById("transfer-money").style.display = "none";
document.getElementById("get-bonus").style.display = "none";
document.getElementById("pay-bill").style.display = "none";
document.getElementById("transaction-history").style.display = "none";

document.getElementById("default-message").style.display = "flex";

function hideAllSections() {
    document.getElementById("add-money").style.display = "none";
    document.getElementById("cashout").style.display = "none";
    document.getElementById("transfer-money").style.display = "none";
    document.getElementById("get-bonus").style.display = "none";
    document.getElementById("pay-bill").style.display = "none";
    document.getElementById("transaction-history").style.display = "none";
}

function showSection(sectionId) {
    hideAllSections();
    document.getElementById("default-message").style.display = "none";
    document.getElementById(sectionId).style.display = "block";
}

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
    displayTransactions(false); 
});

function resetToDefault() {
    hideAllSections();
    document.getElementById("default-message").style.display = "flex";
}
