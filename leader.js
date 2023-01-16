function solution(A) {
  let count = 0;
  for (let i = 0; i < A.length; i++) {
    if (count > A.length / 2) {
      console.log(`The leading element is ${A[i]} occuring ${count} times`);
      return A[i];
    }
    for (let j = i + 1; j < A.length; j++) {
      if (A[i] === A[j]) {
        count++;
      }
    }
  }
  return -1;
}

// console.log(solution2([3, 4, 2, 3, 3, 2, 3]));

// Alternate Solution
// function solution2(A) {
//   A.sort((a, b) => {
//     return a - b;
//   });

//   let count = 0;
//   for (let i = 0; i < A.length; i++) {
//     if (A[Math.floor(A.length / 2)] === A[i]) {
//       count++;
//     }
//   }

//   if (count > A.length / 2) {
//     return `The answers is ${A[Math.floor(A.length / 2)]}`;
//   } else {
//     return -1;
//   }
// }

// // The one need to look ar ( Dominator )
// function solution3(A) {
//   let stack = [];
//   for (let i = 0; i < A.length; i++) {
//     if (stack.length === 0) {
//       stack.push(A[0]);
//       console.log(stack.indexOf(0));
//     }
//     if (A[i + 1] === stack.pop()) {
//       stack.push(A[i + 1]);
//     } else {
//       continue;
//     }
//   }
//   if (stack.length > A.length / 2) {
//     return stack.pop();
//   }
// }

// console.log(solution3([3, 4, 2, 3, 3, 2, 3]));

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // Implement your solution here
  let consecutiveSize = 0;
  let candidate = 0;
  for (let i = 0; i < A.length; i++) {
    if (consecutiveSize == 0) {
      candidate = A[i];
      consecutiveSize++;
    } else if (candidate === A[i]) {
      consecutiveSize++;
    } else {
      consecutiveSize--;
    }
  }

  let occurance = 0;
  let index = 0;

  for (let i = 0; i < A.length; i++) {
    if (A[i] === candidate) {
      occurance++;
      index = i;
    }
  }
  if (occurance > A.length / 2) {
    return index;
  }
  return -1;
}
console.log(solution([3, 4, 2, 3, 3, 3, 2]));
