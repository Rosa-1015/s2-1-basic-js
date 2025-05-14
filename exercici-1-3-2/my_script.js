function ferCalcul() {
    let firstNum = parseFloat(document.getElementById("num1").value);
    let secondNum = parseFloat(document.getElementById("num2").value);

    calculadora(firstNum, secondNum, callbackSuma);
}

function calculadora(num1, num2, callback) {
    let resultat = callback(num1, num2);
    document.getElementById("resultat").textContent = resultat;
}

function callbackSuma(x, y) {
    return ferSuma(x, y);
}

function ferSuma(a, b) {
    return a + b;
}
