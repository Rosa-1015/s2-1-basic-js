function saludar() {
    let nom = document.getElementById('nom').value;
    
    esperarISaludar(nom, saludarAmbNom);
}

function esperarISaludar(nom, callback){
	setTimeout(() => {
        callback(nom)
    }, 2000);  
}

function saludarAmbNom(nom) {
    let missatge = "Hola " + nom + "!";
    document.getElementById('salutacio').innerHTML = missatge;
}
