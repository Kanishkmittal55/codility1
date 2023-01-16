function solution(A) {
  function isTriangular(p, q, r) {
    if (A[p] + A[q] > A[r] && A[q] + A[r] > A[p] && A[r] + A[p] > A[q]) {
      return true;
    }
    return false;
  }

  A.sort((a, b) => {
    return a - b;
  });
  console.log(A);
  for (let P_pointer = 0; P_pointer < A.length - 2; P_pointer++) {
    let q_pointer = P_pointer + 1;
    let r_pointer = q_pointer + 1;
    console.log(P_pointer, q_pointer, r_pointer);
    if (isTriangular(P_pointer, q_pointer, r_pointer)) {
      return 1;
    }
  }
  return 0;
}

console.log(solution([10, 2, 5, 1, 8, 20]));
