function solution(A) {
  let leftsum = A[0];
  let rightSum = 0;
  A.slice(1).forEach((number) => (rightSum += number));

  let diff = Math.abs(leftsum - rightSum);
  for (let i = 1; i < A.length - 1; i++) {
    // Left will remember previos sum
    leftsum += A[i];
    rightSum -= A[i];
    let currentDiff = Math.abs(leftsum - rightSum);
    if (diff > currentDiff) diff = currentDiff;
  }
  return diff;
}

console.log(solution([3, 1, 2, 4, 3]));
