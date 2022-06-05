let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let rateEUR = 4.56;
    let rateUSD = 3.77;
    let rateGBP = 5.24;
    let amount = amountElement.value;
    let currency = currencyElement.value;

    let result;

    switch (currency) {
        case "EUR":
            result = amount / rateEUR;
            break;
        case "USD":
            result = amount / rateUSD;
            break;
        case "GBP":
            result = amount / rateGBP;
            break;
    }

    resultElement.innerHTML = `${result.toFixed(2)} ${currency}`;

})