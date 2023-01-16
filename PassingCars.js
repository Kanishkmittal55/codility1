function solution(A) {
  let count = 0;
  for (let i = 0; i < A.length; i++) {
    for (let j = i + 1; j < A.length; i++) {
      if (A[i] === 0 && A[j] === 1) {
        count = count + 1;
        // console.log(i, j);
      }
    }
  }
  return count;
}

console.log(solution([0, 1, 0, 1, 1]));

// O(n) solution given by you...!!!
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // Implement your solution here
  // A represents the array which gives direction of a car
  // A = [0,1,0,1,1]
  let countArray = new Array(A.length).fill(0);
  let zeroCount = 0;
  for (let i = 0; i < A.length; i++) {
    let car = A[i];
    if (car == 0) {
      zeroCount++;
    }
    if (car == 1) {
      countArray[i] = zeroCount;
    }
  }
  let sum = 0;
  sum = countArray.reduce((acc, elem) => {
    return acc + elem;
  }, 0);
  return sum;
}
