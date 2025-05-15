const fruits = ["apple", "banana", "orange", "grape", "kiwi"];

const [first, second, ...others] = fruits;

const output = `
      First: ${first}<br>
      Second: ${second}<br>
      Others: ${others.join(", ")}
    `;

document.getElementById("output").innerHTML = output;