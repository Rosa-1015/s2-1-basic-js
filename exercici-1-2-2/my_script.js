function comparar() {
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    let resultat = compararNombres(n1, n2);
    document.getElementById("resultat").textContent = resultat;
}

function compararNombres(num1, num2) {
    return num1 > num2
        ? "El num1 és més gran"
        : "El num2 és més gran";
}