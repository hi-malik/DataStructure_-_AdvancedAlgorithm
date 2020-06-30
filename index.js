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
Rule-1
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

/*
//Rule-2
function printFirstItemThenFirstHalfThenSayHi100Times(items) {
    console.log(items[0]);

    var middleIndex = Math.floor(items.length / 2);
    var index = 0;

    while (index < middleIndex) {
        console.log(items[index]);
        index++;
    }

    for (var i = 0; i < 100; i++) {
        console.log('hi');
    }
}
*/
/*
Answer-->
BIG O (n)
*/ 
/*
//Rule-3
//log all pair of Arrays
const boxes = [1, 2, 3, 4, 5];

function logAllPairsOfArrays(array){
  for(var i = 0; i < array.length; i++){
    for(var j = 0; j < array.length; j++){
      console.log(array[i], array[j])
    }
  }
}
logAllPairsOfArrays(boxes);
*/
/*
Answer-->
BIG O(n^2)
*/ 

//Rule-4
/*
function printAllNumbersThenPairSums(numbers){
  console.log('These are there numbers');
  numbers.forEach(function(number){
    console.log(number);
  });

  console.log('these are their sums:');
  numbers.forEach(function(firstNumber){
    numbers.forEach(function(secondNumber){
      console.log(firstNumber + secondNumber);
    });
  });
}

printAllNumbersThenPairSums([1,2,3,4,5,])
*/
/*
Answer-->
BIG O (n^2)
*/ 

/*
//Exercise: Space Complexity
function booooo(n){
  for(let i = 0; i < n.length; i++){
    console.log('booooooo')
  }
}
booooo([1,2,3,4,5]) 
//O(1)

function arrayOfHinTimes(n){
  let hiArray = [];
  for(let i = 0; i < n; i++){
    hiArray[i] = 'hi';
  }
  return hiArray;
}
arrayOfHinTimes(8)
*/
//O(n)


//Exercise: Twitter
/*
const array = ['hi', 'my', 'teddy'];
array[0] //hi = O(1)
array[array.length-1] //teddy = O(1)
*/
//Now the boss say to add date as well.
/*
const array = [{tweet: 'hi', date: 2012},{tweet: 'my', date: 2014}, {tweet: 'teddy', date: 2018}];
//O(n^2)
*/