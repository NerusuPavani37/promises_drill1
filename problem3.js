/***Problem3:**
- Create a function named `dynamicChain`.
- This function should take an array of functions that return Promises as input.
- Use a loop to dynamically chain the Promises returned by each function in the array.
- The final Promise should resolve with the result of the last function in the array.
 */

function dynamicChain(functionsArray) {
  // Initialize with a Promise that resolves immediately with undefined
  let resultPromise = Promise.resolve();

  //// Loop through the array of functions
  for (const func of functionsArray) {
    // Chain the current function to the resultPromise
    resultPromise = resultPromise.then(func);
  }
  // The final resultPromise will resolve with the result of the last function
  return resultPromise;
}

function promise1() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve("racePromise1 is successed");
    }, 3000);
  });
}

function promise2() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve("racePromise2 is successed");
    }, 1000);
  });
}

//Array of functions
const functionsArray = [promise1, promise2];

//attaching promise to a function call
dynamicChain(functionsArray)
  .then((result) => {
    console.log(result); // the result of the last function in the array;
  })
  .catch((err) => {
    console.error(err);
  });
