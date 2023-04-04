const rates = {
    usd : 2100,
    sgd : 1490,
    eur : 2108
}

// usd to mmk
function usdToMMK(inputUSD) {
    return (inputUSD * rates.usd) + "MMK";
}

function toMMK(inputAmount, inputCurrency) {
    return (inputAmount * rates[inputCurrency]) + " MMK";
}

// mmk to any currency
function toCurrency(inputMMK, currency) {
    return (inputMMK / rates[currency]) + " " + currency;
}

//any currency to any currency
function anyCurrency(inputAmount, fromCurrency, toCurrency) {
    let mmk = inputAmount * rates[fromCurrency];
    let result = mmk / rates[toCurrency];
    return result + " " + toCurrency;

    // return (inputAmount * rates[fromCurrency]) / rates[toCurrency] + " " + toCurrency;
}

// console.log(usdToMMK(500));

// console.log(toMMK(500,"usd"));
// console.log(toMMK(500,"sgd"));
// console.log(toMMK(500,"eur"));

// console.log(toCurrency(500000,"usd"));
// console.log(toCurrency(820000,"sgd"));
// console.log(toCurrency(100000,"eur"));

console.log(anyCurrency(500, "sgd", "usd"));