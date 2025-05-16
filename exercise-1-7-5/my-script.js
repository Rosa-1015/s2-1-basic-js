async function myDisplay(shouldSucceed) {
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldSucceed) {
        resolve('Hello, world');
      } else {
        reject('Something went wrong');
      }
    }, 2000);
  });

  document.getElementById("message").innerHTML = 'Waiting...';

  try {
    const result = await myPromise;
    console.log(result);
    document.getElementById("message").innerHTML = result;
  } catch (error) {
    console.error('Error caught:', error);
    document.getElementById("message").innerHTML = 'Error: ' + error;
  }
}
