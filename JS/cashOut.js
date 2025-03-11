document.getElementById("cashout-btn").addEventListener("click", function (event) {
    event.preventDefault();
    const pin = document.getElementById("cashout-pin").value;
    const convertedPin = parseInt(pin);
    const amount = document.getElementById("cashout-amount").value;
    convertedAmount = parseFloat(amount);
    const mainBalance = document.getElementById("main-balance").innerText;
    const convertedMainBalance = parseFloat(mainBalance);
    if (convertedPin === 1234) {
      const sum = convertedMainBalance - convertedAmount;
      document.getElementById("main-balance").innerText = sum;
    } 
    else {
      alert("Incorrect Pin!");
    }
});