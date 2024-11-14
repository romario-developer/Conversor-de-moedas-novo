const convertBtn = document.getElementById("convert-btn");
const resultconverted = document.getElementById("result");
const toCurrency = document.getElementById("to-currency");

function convertCurrency() {
  const amount = document.getElementById("amount").value;

  const dolarToday = 5.2;
  const euroToday = 6.5;
  const libraToday = 7.3;
  const bitcoinToday = 8.0;

  if (toCurrency.value == "EUR") {
    resultconverted.value = new Intl.NumberFormat("de-DE", {
      style: "currency",

      currency: "EUR",
    }).format(amount / euroToday);
  }
  if (toCurrency.value == "USD") {
    resultconverted.value = new Intl.NumberFormat("en-US", {
      style: "currency",

      currency: "USD",
    }).format(amount / dolarToday);
  }

  if (toCurrency.value == "GBP") {
    resultconverted.value = new Intl.NumberFormat("en-US", {
      style: "currency",

      currency: "GBP",
    }).format(amount / libraToday);
  }

  if (toCurrency.value == "BTC") {
    resultconverted.value = new Intl.NumberFormat("en-US", {
      style: "currency",

      currency: "BTC",
    }).format(amount / bitcoinToday);
  }

  if (toCurrency.value == "BRL") {
    resultconverted.value = new Intl.NumberFormat("pt-BR", {
      style: "currency",

      currency: "BRL",
    }).format(amount / bitcoinToday);
  }
}

function changeCurrency() {
  const imagecurrency = document.getElementById("currency-image");
}

if (changeCurrency.value == "USD") {
  imagecurrency.src = "./assets/dolar.png";
}

if (changeCurrency.value == "EUR") {
  imagecurrency.src = "./assets/euro.png";
}
toCurrency.addEventListener("change", changeCurrency);
convertBtn.addEventListener("click", convertCurrency);
