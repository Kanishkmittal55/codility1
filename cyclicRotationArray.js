function solution(A, K) {
  if (K % A.length === 0) {
    K = 0;
  } else {
    K = K % A.length;
  }

  let rotatedArray = [];
  let pointerToA = 0;

  // for the second half
  for (let i = K; i < A.length; i++) {
    rotatedArray[i] = A[pointerToA];
    pointerToA++;
  }

  // For the first half as the above loop started at K
  for (let i = 0; i < K; i++) {
    rotatedArray[i] = A[pointerToA];
    pointerToA++;
  }

  return rotatedArray;
}
