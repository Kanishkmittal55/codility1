function solution(A) {
  result = 0;
  for (let i = 0; i < A.length; i++) {
    result = result ^ A[i];
  }
  return result;
}

console.log(solution([9, 3, 9, 3, 9, 7, 9]));
