{
    const calculateResult = (amount, currency) => {
        const rateEUR = 4.56;
        const rateUSD = 3.77;
        const rateGBP = 5.24;
        
        switch (currency) {
            case "EUR":
                return amount / rateEUR;

            case "USD":
                return amount / rateUSD;

            case "GBP":
                return amount / rateGBP;
        }
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        const amountElement = document.querySelector(".js-amount");
        const currencyElement = document.querySelector(".js-currency");
        const resultElement = document.querySelector(".js-result");
        let amount = amountElement.value;
        let currency = currencyElement.value;
        let result = calculateResult(amount, currency);
        
        resultElement.innerHTML = `${result.toFixed(2)} ${currency}`;
    }

    const init = () => {
        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("submit", onFormSubmit);
    }

    init();
}