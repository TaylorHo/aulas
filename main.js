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


function mostraModal(id) {
  var produto = listaDeProdutos[id - 1];

  var modal = document.querySelector("#modal");

  modal.innerHTML = '<div class="produto"><div class="imagem"><img src="' + produto.imagem + '" alt="' + produto.titulo + '"></div><div class="conteudo"><h3>' + produto.titulo + '</h3><h2>R$' + produto.preco.split(",")[0] + '<span>,' + produto.preco.split(",")[1] + '</span></h2><p class="descricao">Descricão:</p><p>' + produto.descricao + '</p><a href="#" onclick="adicionarAoCarrinho(' + id + ')">Adicionar ao Carrinho</a></div></div>';

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
    elementoHtmlDeListaDeProdutos.innerHTML += '<div class="produto" onclick="mostraModal('+ produto.id +')"><div class="imagem"><img src="'+ produto.imagem +'" alt="'+ produto.titulo + '"></div><div class="conteudo"><h3>'+ produto.titulo +'<h3><h4>R$'+ produto.preco +'</h4><p>'+ produto.descricao.substring(0, 90) +'...</p></div></div>';
  })
}


function quantidadeNoCarrinho() {
  var carrinho = localStorage.getItem('carrinho');

  if (carrinho) {
    var produtosNoCarrinho = JSON.parse(carrinho);

    var elementoHTML = document.querySelector('.quantidade-no-carrinho');

    elementoHTML.innerText = produtosNoCarrinho.length;
  }
}





function adicionarAoCarrinho(id) {

  var carrinho = localStorage.getItem('carrinho');

  // verifica se existe algo dentro do carrinho
  if (carrinho) {
    // existe algo dentro do carrinho

    // transforma o valor do "carrinho" (texto) em um array do Javascript
    var produtosDoCarrinho = JSON.parse(carrinho);

    var novoCarrinhoDeProdutos = [];
    var produtoJaNoCarrinho = false;

    // percorre o array de produtos do carrinho, um por um
    produtosDoCarrinho.forEach((produtoAdicionadoAoCarrinho) => {

      // verifica se o ID do produto que está no carrinho é igual ao ID passado como parâmetro para esta função
      if (produtoAdicionadoAoCarrinho.id == id) {
        // se for igual, é o mesmo produto
        produtoJaNoCarrinho = true;
        novoCarrinhoDeProdutos.push(
          {
            id: produtoAdicionadoAoCarrinho.id,
            quantidade: produtoAdicionadoAoCarrinho.quantidade + 1
          }
        )
      } else {
        novoCarrinhoDeProdutos.push(
          {
            id: produtoAdicionadoAoCarrinho.id,
            quantidade: produtoAdicionadoAoCarrinho.quantidade
          }
        )
      }

    })

    if (produtoJaNoCarrinho == false) {
      novoCarrinhoDeProdutos.push({
        id: id,
        quantidade: 1
      })
    }


    localStorage.setItem('carrinho', JSON.stringify(novoCarrinhoDeProdutos));

  } else {
    // o carrinho está vazio

    var produto = {
      id: id,
      quantidade: 1,
    }
  
    localStorage.setItem('carrinho', JSON.stringify([produto]));
  }

  quantidadeNoCarrinho();
}


function finalizarCompra() {
  var carrinho = localStorage.getItem('carrinho');

  var inicio = "Olá, gostaria de realizar um pedido:\n\n"
  var pedido = "";
  var total = 0;
  var final = "\n\nTotal: R$";

  if (carrinho) {
    var produtosNoCarrinho = JSON.parse(carrinho);

    produtosNoCarrinho.forEach((produtoDoCarrinho) => {
      var produto = listaDeProdutos[produtoDoCarrinho.id - 1];
      var preco = parseFloat(produto.preco.replace(',', '.'))
      total += parseFloat(produtoDoCarrinho.quantidade * preco);
      pedido += `📌 ${produtoDoCarrinho.quantidade}x *${produto.titulo}*\n     ↪️ _${produtoDoCarrinho.quantidade}x R\$${preco} ---> R\$${produtoDoCarrinho.quantidade * preco}_\n`;
    });

    var mensagem = `${inicio}${pedido}${final}${total}`;
    var telefone = "5551989582215"
    window.location.href = `https://api.whatsapp.com/send?text=${encodeURIComponent(mensagem)}&phone=${telefone}`;
  }
}


// ##################################################
// ####### Função chamada ao carregar a página ######
(() => {
  window.onload = () => {
    listaProdutos();
    quantidadeNoCarrinho();
  }
})()
