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

//-->BigO(1)Constant
/*const boxes = [0, 1, 2];

function logFirstTwoBoxes(boxes){
  console.log(boxes[0]); //O(1)
  console.log(boxes[1]); //O(1)
}

logFirstTwoBoxes(boxes); //O(2)
*/

// BigO calculation 1-->
/*
// What is the Big O of the below function? (Hint, you may want to go line by line)
function funChallenge(input) {
  let a = 10;
  a = 50 + 3;

  for (let i = 0; i < input.length; i++) {
    anotherFunction();
    let stranger = true;
    a++;
  }
  return a;
}*/

/*Answer--
BIG 0 (3+4n)*/

/*
// What is the Big O of the below function? (Hint, you may want to go line by line)
function anotherFunChallenge(input) {
  let a = 5;
  let b = 10;
  let c = 50;
  for (let i = 0; i < input; i++) {
    let x = i + 1;
    let y = i + 2;
    let z = i + 3;

  }
  for (let j = 0; j < input; j++) {
    let p = j * 2;
    let q = j * 2;
  }
  let whoAmI = "I don't know";
}
*/

/*
Answer-->
BIG O (4+7n)
*/