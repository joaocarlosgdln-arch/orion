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

const secoes = [
  { id: "home", index: 0 },
  { id: "section", index: 1 },
];

const links = document.querySelectorAll(".NAV a svg");

function setAtivo(index) {
  links.forEach((svg, i) => {
    svg.classList.toggle("ativo", i === index);
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const secao = secoes.find((s) => s.id === entry.target.id);
        if (secao) setAtivo(secao.index);
      }
    });
  },
  { threshold: 0.5 }
);

secoes.forEach(({ id }) => {
  const el = document.getElementById(id);
  if (el) observer.observe(el);
});