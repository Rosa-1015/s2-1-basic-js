async function myDisplay() {
  const myPromise = new Promise(function(resolve) {
    setTimeout(() => {
        resolve('Hello, world');
    }, 2000);
  });
  console.log(await myPromise);
  document.getElementById("message").innerHTML = await myPromise;
}

myDisplay();