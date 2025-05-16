const success = Math.random() > 0.5; // 50% chance of success

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (success) {
            resolve('Hello');
        } else {
            reject('Something went wrong');
        }
    }, 2000);
});

promise
    .then(result => {
        document.getElementById('message').textContent = result;
    })
    .catch(error => {
        document.getElementById('message').textContent = error;
    });