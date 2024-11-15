const convertBtn = document.getElementById("convert-btn");
const resultconverted = document.getElementById("result");
const fromCurrency = document.getElementById("from-currency");
const toCurrency = document.getElementById("to-currency");

// Taxas de câmbio (exemplo fictício)
const exchangeRates = {
  BRL: 1,       // Base para Real
  USD: 5.2,     // 1 Dólar = 5.2 Reais
  EUR: 6.5,     // 1 Euro = 6.5 Reais
  GBP: 7.3,     // 1 Libra = 7.3 Reais
  BTC: 120000,  // 1 Bitcoin = 120.000 Reais
};

// Função para conversão de moedas
function convertCurrency() {
  const amount = parseFloat(document.getElementById("amount").value);

  if (isNaN(amount) || amount <= 0) {
    resultconverted.value = "Insira um valor válido!";
    return;
  }

  const from = fromCurrency.value; // Moeda de origem
  const to = toCurrency.value;     // Moeda de destino

  // Calcula o valor em Reais a partir da moeda de origem
  const amountInBRL = amount * exchangeRates[from];

  // Converte para a moeda de destino
  const convertedAmount = amountInBRL / exchangeRates[to];

  // Formata o valor para a moeda de destino
  resultconverted.value = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: to,
  }).format(convertedAmount);
}

// Função para trocar a imagem da moeda de destino
function changeCurrency() {
  const imagecurrency = document.querySelector(".currency-image img"); // Seleciona o elemento <img> dentro do div

  if (toCurrency.value === "USD") {
    imagecurrency.src = "assets/dolar.png";
  } else if (toCurrency.value === "EUR") {
    imagecurrency.src = "assets/euro.png";
  } else if (toCurrency.value === "GBP") {
    imagecurrency.src = "assets/libra.png";
  } else if (toCurrency.value === "BTC") {
    imagecurrency.src = "assets/bitcoin.png";
  } else if (toCurrency.value === "BRL") {
    imagecurrency.src = "assets/real.png";
  }

  convertCurrency()
  
}

// Adiciona eventos aos elementos
toCurrency.addEventListener("change", changeCurrency);
convertBtn.addEventListener("click", convertCurrency);
