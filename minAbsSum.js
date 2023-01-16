function solution(A) {
  A.sort((a, b) => {
    return a - b;
  });
  let back = 0;
  let front = A.length - 1;
  let temp_sum = 0;

  min_abs_sum = Number.MAX_SAFE_INTEGER;
  while (front <= back) {
    temp_sum = A[back] + A[front];
    if (Math.abs(temp_sum) < min_abs_sum) {
      min_abs_sum = Math.abs(temp_sum);
    }
    if (temp_sum > 0) {
      front--;
    }
    if (temp_sum < 0) {
      back++;
    }
  }
  return min_abs_sum;
}

console.log(solution([-8, 4, 5, -10, 3]));
