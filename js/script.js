/* Definir tamanho da tela */
var altura = 0;
var largura = 0;

function ajustaTamanhoJogo() {
  //função para pegar o valor instantaneo do tamanho da tela
  altura = window.innerHeight;
  largura = window.innerWidth;
}
ajustaTamanhoJogo();

/* Posição Randomica */

var posicaoX = Math.floor(Math.random() * largura);
var posicaoY = Math.floor(Math.random() * altura);

console.log(posicaoX, posicaoY);
