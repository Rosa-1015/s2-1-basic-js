function saludar() {
    let nomPersona = document.getElementById("nom").value;

    // Crear una instància de la classe Person
    const persona = new Person(nomPersona);

    // Mostrar el nom de la persona
    console.log("Nom de la persona: " + persona.greet());
}
