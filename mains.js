// apenas lembrando que o professor tem que entregar bilhetes hoje
// e de mostrar o cursor diferente ao passar pelos produtos

function mostraModal() {
    var elementoDoModal = document.querySelector('#modal');
    var elementoDoFundoPreto = document.querySelector('#fundo-preto');

    elementoDoModal.classList.remove('escondido');
    elementoDoFundoPreto.classList.remove('escondido');
}

function escondeModal() {
    var elementoDoModal = document.querySelector('#modal');
    var elementoDoFundoPreto = document.querySelector('#fundo-preto');

    elementoDoModal.classList.add('escondido');
    elementoDoFundoPreto.classList.add('escondido');
}