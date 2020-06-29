//console.log('Hello Repl');


/*const nemo = ['nemo'];
const everyone = ['hello', 'how', 'are', 'yuo', 'am', 'good', 'thanks', 'for', 'asking', '!']


const large = new Array(10000).fill('nemo')

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
findNemo(large);
*/

const boxes = [0, 1, 2];

function logFirstTwoBoxes(boxes){
  console.log(boxes[0]); //O(1)
  console.log(boxes[1]); //O(1)
}

logFirstTwoBoxes(boxes); //O(2)