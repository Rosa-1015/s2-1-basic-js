function mostrarMaxim() {
    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);
    let c = parseInt(document.getElementById("c").value);

    let maxim = trobarMaxim(a, b, c);
    
    document.getElementById("maxim").textContent = "El màxim és: " + maxim;
}

function trobarMaxim(a, b, c) {
    return a > b
        ? a > c ? a : c
        : b > c ? b : c;
}