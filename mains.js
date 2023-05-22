var produtos = [
    {
        id: 1,
        titulo: 'Produto 01',
        preco: '10,90',
        imagem: './assets/images/default.jpg',
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
        id: 2,
        titulo: 'Produto 02',
        preco: '10,90',
        imagem: './assets/images/default.jpg',
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
        id: 3,
        titulo: 'Produto 03',
        preco: '10,90',
        imagem: './assets/images/default.jpg',
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
        id: 4,
        titulo: 'Produto 04',
        preco: '10,90',
        imagem: './assets/images/default.jpg',
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
        id: 5,
        titulo: 'Produto 05',
        preco: '10,90',
        imagem: './assets/images/default.jpg',
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
        id: 6,
        titulo: 'Produto 06',
        preco: '10,90',
        imagem: './assets/images/default.jpg',
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
        id: 7,
        titulo: 'Produto 07',
        preco: '10,90',
        imagem: './assets/images/default.jpg',
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
        id: 8,
        titulo: 'Produto 08',
        preco: '10,90',
        imagem: './assets/images/default.jpg',
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
        id: 9,
        titulo: 'Produto 09',
        preco: '10,90',
        imagem: './assets/images/default.jpg',
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
        id: 10,
        titulo: 'Produto 10',
        preco: '10,90',
        imagem: './assets/images/default.jpg',
        descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    }
]

function mostraModal(id) {

    produtos.forEach(
        function (produto) {
            if (produto.id == id) {

                var elementoDoModal = document.querySelector('#modal');
                var elementoDoFundoPreto = document.querySelector('#fundo-preto');
            
                var conteudoDoModal = `<div class="conteudo-do-modal"><img src="${produto.imagem}" alt="${produto.titulo}"><div class="informacoes-do-produto"><h4>${produto.titulo}</h4><h3>R$${produto.preco}</h3><p class="descricao">Descrição:</p><p>${produto.descricao}</p><div class="botao"><a href="#">Adicionar ao Carrinho</a></div></div></div>`;
            
                elementoDoModal.innerHTML = conteudoDoModal;
            
                elementoDoModal.classList.remove('escondido');
                elementoDoFundoPreto.classList.remove('escondido');

            }
        }
    );
}

function escondeModal() {
    var elementoDoModal = document.querySelector('#modal');
    var elementoDoFundoPreto = document.querySelector('#fundo-preto');

    elementoDoModal.classList.add('escondido');
    elementoDoFundoPreto.classList.add('escondido');
}


function listaProdutos() {
    var elementoHtmlDaListaDeProdutos = document.querySelector('.lista-de-produtos');
    produtos.forEach(
        function (produto) {

            var conteudoDoProduto = `<div class="produto" onclick="mostraModal(${produto.id})"><img src="${produto.imagem}" alt="${produto.titulo}"><h4>${produto.titulo}</h4><h3>R$${produto.preco}</h3><p>${produto.descricao.substring(0, 90)}...</p></div>`;

            elementoHtmlDaListaDeProdutos.innerHTML += conteudoDoProduto;

        }
    );
}
listaProdutos();