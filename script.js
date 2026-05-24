function criarEstrela() {
  const ceu = document.querySelector(".ceu-estrelado");
  const estrela = document.createElement("div");
  estrela.classList.add("estrela");

  const tamanho = Math.random() * 5 + 1;
  estrela.style.width = `${tamanho}px`;
  estrela.style.height = `${tamanho}px`;

  estrela.style.left = `${Math.random() * 100}vw`;
  const duracao = Math.random() * 15 + 2;
  estrela.style.animationDuration = `${duracao}s`;
  estrela.style.opacity = Math.random();
  ceu.appendChild(estrela);
  setTimeout(() => {
    estrela.remove();
  }, duracao * 1000);
}
setInterval(criarEstrela, 100);
