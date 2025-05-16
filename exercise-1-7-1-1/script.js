// Create the promise
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Hello, world');
    }, 2000);
});

// Use the promise
promise.then(result => {
    document.getElementById('message').textContent = result;
});