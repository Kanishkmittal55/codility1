function solution(A) {
  // Implement your solution here
  let counter = 0;
  A.sort((a, b) => {
    return a - b;
  });
  for (let i = 0; i < A.length; i++) {
    if (A[i] > 0) {
      if (A[i] != counter) counter++;
      if (A[i] == counter) continue;
      return counter;
    }
  }
  counter++;
  return counter;
}

console.log(solution([1, 3, 6, 4, 1, 2]));
