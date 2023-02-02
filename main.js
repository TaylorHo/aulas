
function mostraModal() {

  var modal = document.querySelector("#modal");
  modal.classList.remove("escondido");

  var overlay = document.querySelector("#fundo-preto");
  overlay.classList.remove("escondido");

}

function escondeModal() {

  var modal = document.querySelector("#modal");
  modal.classList.add("escondido");

  var overlay = document.querySelector("#fundo-preto");
  overlay.classList.add("escondido");

}
