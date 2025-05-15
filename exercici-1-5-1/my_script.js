const numbers = [1, 2, 3, 4];
const squares = numbers.map(num => num ** 2);

document.getElementById("output").innerHTML = squares.join(", ");