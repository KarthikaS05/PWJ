function addNum(a, b) {
  console.log(a + b);
}

function minToSec(mins) {
  console.log(mins * 60 + " secs");
}

function ageToSec(age) {
  const ageSec = age * 12 * 30 * 24 * 60 * 60;
  console.log(`Age in secs ${age} years = ${ageSec} secs`);
}

function firstArrayElem(arr) {
  console.log(arr.shift());
}

function goodOrBadMovie(movieRating) {
  if (movieRating >= 7 && movieRating <= 10) {
    console.log("good movie");
  } else if (movieRating <= 6 && movieRating >= 0) {
    console.log("bad movie");
  } else console.log("enter valid rating");
}

function isStringEmpty(str) {
  if (str !== "") {
    //=== chks for the data type also than ==
    console.log("False");
  } else console.log("True");
}

isStringEmpty("");
isStringEmpty("abc");

//arrow function
const minMax = (arr) => {
  //using math.min.apply(null,arr) will solve the problem of not accepting array; null should be this but since its not thr nul
  //fastest way is looping for over 4000 items then math.min.apply
  //ref : https://medium.com/coding-at-dawn/the-fastest-way-to-find-minimum-and-maximum-values-in-an-array-in-javascript-2511115f8621

  const min = Math.min.apply(null, arr); //usually math.min can only accep numbers and not array
  const max = Math.max.apply(null, arr);

  return [min, max];
};

const [minVal, maxVal] = minMax([23, 2, 4, 56]);

console.log([minVal, maxVal]);

//with for loop
//faster for high record array
const minMaxLoop = (arr) => {
  let min = arr[0];
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    min = arr[i] < min ? arr[i] : min;
    max = arr[i] > max ? arr[i] : max;
  }

  return [min, max];
};
const [minimum, maximum] = minMaxLoop([56, 899, 90, 3]); //array destructuring
console.log([minimum, maximum]);

//sorting based on rating desc
function sortBiggestRating(ratings) {
  //looping for sorting only req till 2nd last elem
  for (let i = 0; i < ratings.length - 1; i++) {
    //initialising
    let max = ratings[i];
    let max_pos = i;
    //loop to compare from  2nd elem; ie nxt value to i
    for (let j = i + 1; j < ratings.length; j++) {
      if (ratings[j] > max) {
        max = ratings[j];
        max_pos = j;
      }
    }
    ratings[max_pos] = ratings[i];
    ratings[i] = max;
  }

  return ratings;
  //console.log(ratings);
}

console.log(sortBiggestRating([2, 5, 4.5, 1, 3]));

//max and its pos helper
function findMaxandPosHelper(numbers, startPos) {
  //initialising to starting pos of array
  let max = numbers[startPos];
  let max_pos = startPos;
  for (let j = startPos; j < numbers.length; j++) {
    if (numbers[j] > max) {
      max = numbers[j];
      max_pos = j;
    }
  }
  //return {obj} in key value pair prop:value; an obj with 2 props max Valu and its pos in array
  return { maxVal: max, maxPos: max_pos };
}

//find max value ans sort using helper
function sortBiggestRatingWithHelper(ratings) {
  //looping for sorting only req till 2nd last elem
  for (let i = 0; i < ratings.length - 1; i++) {
    //with helper func get max and pos for each sort
    let maxAndPos = findMaxandPosHelper(ratings, i);
    let maxRating = maxAndPos["maxVal"]; //<- this is obj destructuring than maxAndPos.maxVal
    let maxRatingPos = maxAndPos["maxPos"];

    //swaping
    ratings[maxRatingPos] = ratings[i];
    ratings[i] = maxRating;
  }

  return ratings;
}

console.log(sortBiggestRatingWithHelper([5, 30, 2, 1, 6]));
