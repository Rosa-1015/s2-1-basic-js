function comprova() {
      //let num = Number(document.getElementById("numero").value);
      let num = parseInt(document.getElementById("numero").value);

      const resultat = num > 0
        ? "És positiu"
        : num < 0
        ? "És negatiu"
        : "És zero";
        
      document.getElementById("resultat").textContent = resultat;
    }