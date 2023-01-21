//TODO verso card
const cards = document.querySelectorAll(".card");
function transition() {
  if (this.classList.contains("active")) {
    this.classList.remove("active");
  } else {
    this.classList.add("active");
  }
}
cards.forEach((card) => card.addEventListener("click", transition));

//TODO ! BOTÃO DARK
const chk = document.getElementById("chk");
chk.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode");
});

//TODO nav burguer responsivo
function clickMenu() {
  if (navegacaolista.style.display == "block") {
    navegacaolista.style.display = "none";
  } else {
    navegacaolista.style.display = "block";
  }
}

//TODO ANIMAÇÃO
if (window.SimpleAnime) {
  new SimpleAnime();
}
