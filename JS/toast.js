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
