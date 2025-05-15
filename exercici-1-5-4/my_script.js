const array1 = [13, 7, 8, 21];

const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);
document.getElementById("result").innerHTML = sumWithInitial;