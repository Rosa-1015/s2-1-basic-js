//Random number
const randomNumber = () => Math.floor(Math.random() * 101);

console.log(randomNumber());

document.getElementById("result").textContent = randomNumber();