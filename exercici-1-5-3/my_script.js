const numbers = [1, 10, 8, 11];

const firstGreaterThan10 = numbers.find(num => num > 10);

document.getElementById('result').textContent = 'First number greater than 10: ' + firstGreaterThan10;
