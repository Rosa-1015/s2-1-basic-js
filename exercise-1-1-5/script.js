//setTimeout function
function passarTemps(){
    const mostrarMissatge = () => {
        setTimeout(() => {
        console.log("Hola! Han passat 3 segons.");
        }, 3000);
    };
    mostrarMissatge();
}