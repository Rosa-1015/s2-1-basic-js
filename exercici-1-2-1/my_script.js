function comprova() {
  let edat = document.getElementById("edat").value;
  let missatge = potConduir(edat);
  document.getElementById("resultat").textContent = missatge;
}

function potConduir(edat) {
  return edat >= 18 ? "Pots conduir" : "No pots conduir";
}