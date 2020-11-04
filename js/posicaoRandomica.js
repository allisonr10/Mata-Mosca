function posicaoRandomica() {
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

  document.body.appendChild(mosca); // adicionando um filho para o body
}
