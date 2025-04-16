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

function saveTransaction(title, message) {
    const transactions = JSON.parse(localStorage.getItem("transactions")) || [];

    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const newTransaction = { title, message, date, time };
    transactions.push(newTransaction);
    localStorage.setItem("transactions", JSON.stringify(transactions));
}

function deleteTransaction(index) {
    const transactions = JSON.parse(localStorage.getItem("transactions")) || [];

    if (index >= 0 && index < transactions.length) {
        transactions.splice(index, 1);
        localStorage.setItem("transactions", JSON.stringify(transactions));
        showToast("Transaction deleted successfully.", "success");
        displayTransactions(true);
    } else {
        showToast("Unable to delete transaction.", "error");
    }
}

function formatDateLabel(dateString) {
    const today = new Date();
    const txnDate = new Date(dateString);
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);

    const todayStr = today.toLocaleDateString();
    const yestStr = yesterday.toLocaleDateString();

    if (dateString === todayStr) return "Today";
    if (dateString === yestStr) return "Yesterday";
    return dateString;
}

function displayTransactions(showAll = false) {
    const historyContainer = document.getElementById("transaction-history");
    const transactions = JSON.parse(localStorage.getItem("transactions")) || [];

    historyContainer.innerHTML = `
        <h1 class="font-semibold text-xl text-center mb-2">Transaction History</h1>
        <p id="view-transaction" class="opacity-50 mx-auto text-center cursor-pointer hover:text-[#0874F2]">${showAll ? 'Close' : 'View All'}</p>
        <div id="transactions-list" class="mt-4 space-y-2"></div>
    `;

    const listContainer = document.getElementById("transactions-list");
    const displayList = showAll ? transactions.slice().reverse() : transactions.slice(-5).reverse();

    displayList.forEach((txn, i) => {
        const globalIndex = transactions.length - 1 - i;
        const formattedDate = formatDateLabel(txn.date);

        const div = document.createElement("div");
        div.className = "flex justify-between items-center rounded-xl py-3 px-4 shadow-sm bg-white";

        div.innerHTML = `
            <div class="flex items-center gap-3">
                <div class="bg-[#F3F4F6] p-2 rounded-full">
                    <img src="assets/history.png" alt="icon" class="w-6 h-6">
                </div>
                <div>
                    <h2 class="font-medium">${txn.title}: <span class="text-sm opacity-70">${txn.message}</span></h2>
                    <p class="text-sm text-gray-500 mt-1">${formattedDate} at ${txn.time}</p>
                </div>
            </div>
            <button class="font-semibold delete-btn cursor-pointer" data-index="${globalIndex}">
                <img src="assets/trash.png" alt="Delete" class="w-5 h-5">
            </button>
        `;

        listContainer.appendChild(div);
    });

    document.querySelectorAll(".delete-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const indexToDelete = parseInt(btn.getAttribute("data-index"));
            deleteTransaction(indexToDelete);
        });
    });

    document.getElementById("view-transaction").addEventListener("click", () => {
        displayTransactions(!showAll);
    });
}

document.getElementById("transactions-box").addEventListener("click", () => {
    displayTransactions();
});
