function converterMoeda() {
  let primeiraMoeda = document.getElementById("primeiraMoeda").value;
  let valorPrimeiraMoeda = parseFloat(document.getElementById("valorPrimeiraMoeda").value);
  let taxaDeConversao = document.getElementById("segundaMoeda").value;
  if (isNaN(valorPrimeiraMoeda) || valorPrimeiraMoeda <= 0) {
    alert("Insira um valor válido e maior que zero.");
    return;
  }
  if (primeiraMoeda === taxaDeConversao) {
    alert("Não é válido converter uma moeda para ela mesma ");
    return;
  }
  switch (primeiraMoeda) {
    case "dolarAmericano":
      valorPrimeiraMoeda = valorPrimeiraMoeda * 4.95;
      break;
    case "libraEsterlina":
      valorPrimeiraMoeda = valorPrimeiraMoeda * 6.25;
      break;
    case "euro":
      valorPrimeiraMoeda = valorPrimeiraMoeda * 5.34;
      break;
    case "pesoArgentino":
      valorPrimeiraMoeda = valorPrimeiraMoeda * 0.0060;
      break;
    case "real":
      valorPrimeiraMoeda = valorPrimeiraMoeda * 1;
      break;
    default:
      break;
  }
  switch (taxaDeConversao) {
    case "dolarAmericano":
      taxaDeConversao = 4.95;
      break;
    case "libraEsterlina":
      taxaDeConversao = 6.25;
      break;
    case "euro":
      taxaDeConversao = 5.34;
      break;
    case "pesoArgentino":
      taxaDeConversao = 0.0060;
      break;
    case "real":
      taxaDeConversao = 1;
      break;
    default:
      break;
  }
  let valorFinal = valorPrimeiraMoeda / taxaDeConversao;
  document.getElementById("valorFinal").value = valorFinal.toFixed(2);
}

function limparCampo() {
  document.getElementById("valorPrimeiraMoeda").value = "";
  document.getElementById("valorFinal").value = "";
}
