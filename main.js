var listaDeProdutos = [
  {
      "id": 1,
      "titulo": "Produto 01",
      "descricao": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "preco": "10,90",
      "imagem": "./assets/images/default.jpg"
  },
  {
      "id": 2,
      "titulo": "Produto 02",
      "descricao": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "preco": "10,90",
      "imagem": "./assets/images/default.jpg"
  },
  {
      "id": 3,
      "titulo": "Produto 03",
      "descricao": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "preco": "10,90",
      "imagem": "./assets/images/default.jpg"
  },
  {
      "id": 4,
      "titulo": "Produto 04",
      "descricao": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "preco": "10,90",
      "imagem": "./assets/images/default.jpg"
  },
  {
      "id": 5,
      "titulo": "Produto 05",
      "descricao": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "preco": "10,90",
      "imagem": "./assets/images/default.jpg"
  },
  {
      "id": 6,
      "titulo": "Produto 06",
      "descricao": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "preco": "10,90",
      "imagem": "./assets/images/default.jpg"
  },
  {
      "id": 7,
      "titulo": "Produto 07",
      "descricao": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "preco": "10,90",
      "imagem": "./assets/images/default.jpg"
  },
  {
      "id": 8,
      "titulo": "Produto 08",
      "descricao": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "preco": "10,90",
      "imagem": "./assets/images/default.jpg"
  },
  {
      "id": 9,
      "titulo": "Produto 09",
      "descricao": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "preco": "10,90",
      "imagem": "./assets/images/default.jpg"
  },
  {
      "id": 10,
      "titulo": "Produto 10",
      "descricao": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "preco": "10,90",
      "imagem": "./assets/images/default.jpg"
  }
]


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


// ##################################################
// ############# Listagem de Produtos ###############
function listaProdutos() {
  var elementoHtmlDeListaDeProdutos = document.querySelector('.lista-de-produtos');

  listaDeProdutos.forEach((produto) => {
    elementoHtmlDeListaDeProdutos.innerHTML += `<div class="produto" onclick="mostraModal(${produto.id})"><div class="imagem"><img src="${produto.imagem}" alt="${produto.titulo}"></div><div class="conteudo"><h3>${produto.titulo}<h3><h4>R\$${produto.preco}</h4><p>${produto.descricao}</p></div></div>`;
  })
}


// ##################################################
// ####### Função chamada ao carregar a página ######
(() => {
  window.onload = () => {
    listaProdutos();
  }
})()
