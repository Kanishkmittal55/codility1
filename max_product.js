// Not a good solution

function solution(A) {
  // Implement your solution here
  A.sort((a, b) => {
    return a - b;
  });
  console.log(A);
  max_product_1 = A[A.length - 1] * A[A.length - 2] * A[A.length - 3];
  console.log(A[A.length - 1], A[A.length - 2], A[A.length - 3]);
  max_product_2 = A[0] * A[1] * A[A.length - 1];
  console.log(A[0], A[1], A[A.length - 1]);
  max_product_3 = A[0] * A[1] * A[2];
  console.log(A[0], A[1], A[2]);

  let ans = [];
  ans.push(max_product_1);
  ans.push(max_product_2);
  ans.push(max_product_3);

  return Math.max.apply(Math, ans);
}

console.log(solution([-5, -6, -4, -7, -10]));
