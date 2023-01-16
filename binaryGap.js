// NEW recursive function
function getGaps(BinaryArray, gaps) {
  // finding the first one via its index
  const firstOne = BinaryArray.indexOf("1");

  if (firstOne > -1) {
    // new array created taking a slice of original array
    // from the index of the firstOne + 1 index
    let NewBinaryArray = BinaryArray.slice(firstOne + 1);
    // finding second one via its index in new array slice
    const secondOne = NewBinaryArray.indexOf("1");

    // Accounting for zero
    if (secondOne > 0) {
      // Adding this to our gaps array
      gaps.push(secondOne - firstOne);
    }

    // Pass array minus second one and gaps array
    return getGaps(NewBinaryArray.slice(secondOne + 1), gaps);
  }
  if (gaps.length > 0) {
    return Math.max.apply(Math, gaps);
  } else {
    return 0;
  }
}
// our function
function solution(N) {
  // Tests if our value is an integer
  // Tests if N is within range
  if (N === parseInt(N, 10) && N >= 1 && N <= 2147483647) {
    // Convert to binary
    const Binary = N.toString(2).split("");
    console.log(Binary);
    // calling our recursive function with initial empty gaps

    return getGaps(Binary, []);
  }

  // default if it doesn't meet the requirements
  return 0;
}

console.log(solution(529));
