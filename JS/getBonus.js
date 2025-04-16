document.getElementById("bonus-btn").addEventListener("click", function (event) {
    event.preventDefault();

    const couponInput = document.getElementById("bonus");
    const couponCode = couponInput.value.trim().toUpperCase();

    if (couponCode === "") {
        showToast("Please enter a bonus coupon.", "error");
        return;
    }

    const bonusCoupons = {
        "WELCOME50": 50,
        "SUPER100": 100,
        "FESTIVE25": 25,
        "BONUS10": 10
    };

    if (bonusCoupons.hasOwnProperty(couponCode)) {
        const bonusAmount = bonusCoupons[couponCode];

        const mainBalanceElement = document.getElementById("main-balance");
        const currentBalance = parseFloat(mainBalanceElement.innerText);
        const newBalance = currentBalance + bonusAmount;

        mainBalanceElement.innerText = newBalance.toFixed(2);
        showToast(`Bonus of ${bonusAmount} added successfully!`, "success");

        couponInput.value = "";

        saveTransaction("Bonus", `৳${bonusAmount} Bonus Received`);
    } 
    else {
        showToast("Invalid or expired coupon code.", "error");
    }
});
