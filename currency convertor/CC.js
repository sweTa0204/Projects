const conversionRates = {
    USD: 1,
    INR: 0.013,
    IDR: 0.000069,
    JPY: 0.0088,
    EURO: 1.07845
  };
  const amountInput = document.getElementById("amount");
  const baseCurrencySelect = document.getElementById("base-currency");
  const targetCurrencySelect = document.getElementById("target-currency");
  const resultParagraph = document.getElementById("result");
  amountInput.addEventListener("input", () => {
    const amount = parseFloat(amountInput.value);
    const baseCurrency = baseCurrencySelect.value;
    const targetCurrency = targetCurrencySelect.value;
  
    if (!isNaN(amount)) {
      const convertedAmount = amount * conversionRates[baseCurrency] / conversionRates[targetCurrency];
      resultParagraph.textContent = `Final Amount: ${convertedAmount.toFixed(2)} ${targetCurrency}`;
    } else {
      resultParagraph.textContent = "";
    }
  });
  for (const [currency, rate] of Object.entries(conversionRates)) {
    const option = document.createElement("option");
    option.value = currency;
    option.textContent = `${currency} (${rate.toFixed(4)})`;
    baseCurrencySelect.appendChild(option);
    targetCurrencySelect.appendChild(option.cloneNode(true));
  }
  targetCurrencySelect.value = "USD";