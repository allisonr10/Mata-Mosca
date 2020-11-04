/* Definir tamanho da tela */
var altura = 0;
var largura = 0;
var vidas = 1;
var tempo = 10;

var criaMoscaTempo = 1500;

var nivel = window.location.search; // vai recuperar somente o nível
nivel = nivel.replace('?', ''); // "apaga a variavel ?"

//logica para os niveis

if (nivel === 'normal') {
  //1500
  criaMoscaTempo = 1500;
} else if (nivel === 'dificil') {
  //1000
  criaMoscaTempo = 1000;
} else if (nivel === 'chucknorris') {
  //750
  criaMoscaTempo = 750;
}

function ajustaTamanhoJogo() {
  //função para pegar o valor instantaneo do tamanho da tela
  altura = window.innerHeight;
  largura = window.innerWidth;
}
ajustaTamanhoJogo();

var cronometro = setInterval(function () {
  tempo -= 1;
  if (tempo < 0) {
    clearInterval(cronometro);
    clearInterval(criarMosca);
    window.location.href = 'vitoria.html';
  } else {
    document.getElementById('cronometro').innerHTML = tempo;
  }
}, 1000);

function posicaoRandomica() {
  //remover a mosca anterior (caso exista)

  if (document.getElementById('mosca')) {
    /* esse if verifica se o elemento mosca já existe, caso sim, ele remove, caso não passa para frente */
    document.getElementById('mosca').remove();
    //verificar se perdeu todas as vidas
    if (vidas > 3) {
      document.location.href = 'fim-do-jogo.html';
    } else {
      //a cada iteração vai incrementando o valor de vidas, e mudando para a id v2 e v3
      document.getElementById('v' + vidas).src = 'imagens/coracao_vazio.png';

      vidas++;
      console.log(vidas);
    }
  }

  /* Posição Randomica */

  var posicaoX = Math.floor(Math.random() * largura) - 90;
  var posicaoY = Math.floor(Math.random() * altura) - 90;

  // Os If's abaixo não deixam que o mosquito suma da tela caso sua posição seja 0

  if (posicaoX < 0) {
    posicaoX = 0;
  } else {
    posicaoX = posicaoX;
  }
  if (posicaoY < 0) {
    posicaoY = 0;
  } else {
    posicaoY = posicaoY;
  }

  console.log(posicaoX, posicaoY);

  /* Criar elementos html */

  var mosca = document.createElement('img');
  mosca.src = 'imagens/mosca.png';
  mosca.className = tamanhoAleatorio() + ' ' + ladoAleatorio(); // está puxando o estilo criado no css
  //movimentar a mosca
  mosca.style.left = posicaoX + 'px';
  mosca.style.top = posicaoY + 'px';

  mosca.id = 'mosca';

  //capturar evento de clicar na mosca
  mosca.onclick = function () {
    this.remove(); // this faz referencia ao proprio elemento html que executa a função
  };

  document.body.appendChild(mosca); // adicionando um filho para o body
}

/* Tamanho aleatorio da mosca */

function tamanhoAleatorio() {
  var classe = Math.floor(Math.random() * 3); // tamanho aleatorio da mosca
  switch (classe) {
    case 0:
      return 'mosca1';
    case 1:
      return 'mosca2';
    case 2:
      return 'mosca3';
  }
}
//mudar lado do mosquito (esquerda ou direita)

function ladoAleatorio() {
  var classe = Math.floor(Math.random() * 2);

  switch (classe) {
    case 0:
      return 'ladoA';

    case 1:
      return 'ladoB';
  }
}
