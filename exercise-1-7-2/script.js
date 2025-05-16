// Create the promise
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Hello, world');
    }, 2000);
});

// Use the promise
promise.then(result => {
    console.log(result);
});