class Person {
    constructor(name) {
        this._name = name;
    }

    greet = () => { //this._greet = function() {...}
        const missatge = `Hola, ${this._name}`;
        console.log(missatge); 
        document.getElementById("salutacio").textContent = missatge;
    };
}