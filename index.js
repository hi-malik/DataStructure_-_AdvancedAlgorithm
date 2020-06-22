const nemo = ['nemo'];

function findNemo(array){
  let t0 = performance.now();
  for (let i=0; i < array.length; i++ ){
    if(array[i] === 'nemo'){
      console.log('Found Nemo!@')
    }
  }
  let t1 = performance.now();
  console.log("The speed of testing is " + (t1 - t0) + " milliseconds")
}
findNemo(nemo);
