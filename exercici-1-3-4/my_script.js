const array = [1, 2, 3, 4, 5];

processarElements(array, mostrarElement);

function processarElements(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i]);
    }
}

function mostrarElement(element) {
    console.log(element);
}