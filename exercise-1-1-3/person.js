class Person {
    constructor(name) {
        this._name = name;
    }

    //this._greet = function() {...}
    greet = () => { 
        const missatge = `Hola, ${this._name}`;
        console.log(missatge); 
        document.getElementById("salutacio").textContent = missatge;
    };
}