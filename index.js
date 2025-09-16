// Exemplo simples de interação
console.log("Página carregada!");

document.addEventListener("DOMContentLoaded", () => {
  const title = document.querySelector("h1");
  title.addEventListener("click", () => {
    alert("Você clicou no título!");
  });
});
