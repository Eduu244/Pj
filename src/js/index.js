// OBJETIVO PRINCIPAL -    quando clicar na seta para ver avançar temos  que esconder todas as imagens e mostrar a proxima imagem

// a imagem atual comença em 0 porque é a primeira imagem, assim que for clicada no avançar eu preciso adicionar mais 1 ao contador de imagempra poder saber que agora vou mostra a proxima imagem

// . econder todas as imagens
//     pegar todas as imagens usando o DOM e remover a classe mostrar

// . esconder a proxima imagem
//     pegar todas as imagens, descobrir qual é a proxima, e colocar a classe mostrar ela

// -mostrar a proxima imagem
// pegar todas as imagens, descrobrir qual é a proxima e colar a classe mostrar ela

const imagensPainel = document.querySelectorAll(".imagem-painel");
const setaAvancar = document.getElementById("btn-avancar");
const setaVoltar = document.getElementById("btn-voltar");
let imagemAtual = 0;


setaAvancar.addEventListener("click", function () {
  const totalDeimagens = imagensPainel.length - 1;

  // teste se o contador da imagem e igual ao total de imagens

  if (imagemAtual === totalDeimagens) {
    return;
  }

  imagemAtual++;

  esconder();

  mostrar();

});

setaVoltar.addEventListener("click", function () {
  if (imagemAtual === 0) {
    return;
  }

  imagemAtual--;

  esconder();

  mostrar();
});


function esconder() {
    imagensPainel.forEach((imagem) => {
      imagem.classList.remove("mostrar");
    });
  }
  
  function mostrar() {
    imagensPainel[imagemAtual].classList.add("mostrar");
  }