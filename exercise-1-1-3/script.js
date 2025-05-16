function saludar() {
    let nomPersona = document.getElementById("nom").value;

    const persona = new Person(nomPersona);

    console.log("Nom de la persona: " + persona.greet());
}
