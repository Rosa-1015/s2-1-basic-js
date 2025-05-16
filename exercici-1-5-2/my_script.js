const numbers = [1, 2, 3, 4];
// Filter only even numbers
const evenNumbers = numbers.filter(num => num % 2 === 0);

// Display the result inside the paragraph
document.getElementById('result').textContent = 'Even numbers: [' + evenNumbers.join(', ') + ']';
