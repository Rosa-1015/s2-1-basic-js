const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const array3 = [...array1, ...array2];

document.getElementById('resultat').textContent = 'Array combinada: ' + array3;
