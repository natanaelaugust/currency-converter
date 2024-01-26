function converterMoeda() {
  let valorEmReais = document.getElementById("valorEmReais").value;

  if (isNaN(valorEmReais) || valorEmReais === "") {
    alert("Insira um valor válido em Reais (R$)");
    return;
  }

  var taxaDeConversao = 4.93;

  var dolares = valorEmReais / taxaDeConversao;

  document.getElementById("valorEmDolares").value = dolares.toFixed(2);
}

function limparCampo() {
  document.getElementById("valorEmReais").value = "";
  document.getElementById("valorEmDolares").value = "";
}
