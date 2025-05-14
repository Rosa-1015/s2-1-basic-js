//-	no necessiti paràmetres 
//-	retorni un número aleatori entre 0 i 100.

const randomNumber = () => Math.floor(Math.random() * 101);

// Mostrar per consola
console.log(randomNumber());

// Mostrar a la pàgina
document.getElementById("result").textContent = randomNumber();