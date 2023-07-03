function mostraModal(id) {
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
