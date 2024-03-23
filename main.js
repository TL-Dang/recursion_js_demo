// In programming, recurison occurs when a function calls itself.

// Any iterator function (aka function w/ a loop) can be turned into a recursive function by adding a base case

// Iterator function
const countToTen = function (num = 1) {
  while (num <= 10) {
    console.log(num);
    num++;
  }
};

//console.log(countToTen());

/* Recursive functions have 2 parts:
1) recursive call to the function
2) at least one condition to exit */

const recurToTen = function (num = 1) {
  if (num > 10) return;
  console.log(num);
  num++;
  recurToTen(num);
};

console.log(recurToTen());

/* 
Reasons to use Recursion
1) Less code
2) More readable and easier to understand

Reasons NOT to use Recursion
1) Performance overhead - each time it makes a call, (loops are more optimized)
2) Possibly more difficult to debug (follow the logic)

Standard Example: Fibonacci Sequence
0, 1, 1, 2, 3, 5, 8, 13, 21 . . .  */

// Fibonacci sequence w/ while loop
const fibWhile = function (num, array = [0, 1]) {
  while (num > 2) {
    const [nextToLast, last] = array.slice(-2);
    array.push(last + nextToLast);
    num -= 1;
  }
  return array;
};

console.log(fibWhile(12));

// Fibonacci  sequence w/ recursion
const fibRecur = function (num, array = [0, 1]) {
  if (num <= 2) return array;
  const [nextToLast, last] = array.slice(-2);
  return fibRecur(num - 1, [...array, last + nextToLast]);
};

console.log(fibRecur(12));

// Finding the nth position in Fibonacci sequence w/o recursion
const fibPos = function (pos) {
  if (pos <= 1) return pos;
  const seq = [0, 1];
  for (let i = 2; i <= pos; i++) {
    const [nextToLast, last] = seq.slice(-2);
    seq.push(nextToLast + last);
  }
  return seq[pos];
};

console.log(fibPos(8));

// Finding the nth position in Fibonacci sequence w/ recursion
/*
const fibPosRecur = function (pos) {
  if (pos < 2) return pos;
  return fibPosRecur(pos - 1) + fibPosRecur(pos - 2);
};
*/

// Same as above but using ternary and arrow function. May not be as readable for some
const fibPosRecur = (pos) =>
  pos < 2 ? pos : fibPosRecur(pos - 1) + fibPosRecur(pos - 2);

console.log(fibPosRecur(8));

// Real life example 1. Continuation Token from an API. Below is just psudeo code.
const getAWSProductIdImages = async () => {
  // get data w/ await fetch request

  if (DataTransfer.IsTruncated) {
    // recursive
    return await getAWSProductIdImages(
      productId,
      s3, // connection to s3
      resultArray, // accumulator
      data.NextContinuationToken
    );
  }
  return resultArray;
};

// Real life example 2. A parser for company directory, file directory, DOM web crawler, an XML or JSON data export.

// Export from your streaming service like Spotify, YT Music, etc.
const artistByGenre = {
  jazz: ['Miles Davis', 'John  Coltrane'],
  rock: {
    classic: ['The Beatles', 'The Rolling Stones'],
    hair: ['Def Leppard', 'Whitesnake', 'Poison'],
    alt: {
      classic: ['Red Hot Chilli Peppers', 'No Doubt'],
      current: ['Cannon', 'Panic at the Disco'],
    },
  },
  unclassified: {
    new: ['Korn', 'Neil Young'],
    classic: ['Seal', 'Bruce Springsteen', 'Nicki  Minaj'],
  },
};

// Using recursion and a loop in this function to extract artist name from above object.
const getArtistNames = function (dataObj, arr = []) {
  Object.keys(dataObj).map(function (key) {
    if (Array.isArray(dataObj[key])) {
      return dataObj[key].map(function (artist) {
        arr.push(artist);
      });
    }
    getArtistNames(dataObj[key], arr);
  });
  return arr;
};

console.log(getArtistNames(artistByGenre));

//  lesson @ https://www.youtube.com/watch?v=Q0alTGQ-lXk
