/*verso card */
const cards = document.querySelectorAll(".card");
function transition() {
  if (this.classList.contains("active")) {
    this.classList.remove("active");
  } else {
    this.classList.add("active");
  }
}
cards.forEach((card) => card.addEventListener("click", transition));

/*! BOTÃO DARK */
const chk = document.getElementById("chk");
chk.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode");
});

/*nav burguer responsivo */
function clickMenu() {
  if (navegacaolista.style.display == "block") {
    navegacaolista.style.display = "none";
  } else {
    navegacaolista.style.display = "block";
  }
}

/*SELECTOR DE LINKS ON*/
// const links = document.querySelectorAll("nav a");
// function ativarLink(link) {
//   const href = link.href;
//   const url = document.location.href;
//   if (href === url) {
//     link.style.backgroundColor = "black";
//     link.style.color = "white";
//   }
// }
// links.forEach(ativarLink);
