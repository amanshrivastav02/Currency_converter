const currencyFirstEl = document.getElementById("currency-first");
const worthFirstEl = document.getElementById("worth-first");
const currencySecondEl = document.getElementById("currency-second");
const worthSecondEl = document.getElementById("worth-second");
const exchangeRateEl = document.getElementById("exchange-rate");

updateRate();

function updateRate() {
    const currencyFirstValue = currencyFirstEl.value;
    const worthFirstValue = worthFirstEl.value;
    const currencySecondValue = currencySecondEl.value;

    fetch(`https://v6.exchangerate-api.com/v6/9bd80d553b87d87058602bf5/latest/${currencyFirstValue}`)
        .then((res) => res.json())
        .then((data) => {
            const rate = data.conversion_rates[currencySecondValue];
            console.log(rate);

            // Update the exchange rate display
            exchangeRateEl.innerText = `1 ${currencyFirstValue} = ${rate} ${currencySecondValue}`;

            // Update the worth in the second currency
            worthSecondEl.value = (worthFirstValue * rate).toFixed(2);
        });
}

// Event listeners for updates
currencyFirstEl.addEventListener("change", updateRate);
currencySecondEl.addEventListener("change", updateRate);
worthFirstEl.addEventListener("input", updateRate);