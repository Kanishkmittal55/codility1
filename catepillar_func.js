function solution(sum, A) {
  //  the catepillar algorithm
  n = A.length;
  let front_pointer = 0;
  let back_pointer = 0;
  let window_sum = 0;

  if (back_pointer === 0) {
    window_sum = 0 + A[front_pointer];
    front_pointer++;
  }

  while (front_pointer < n) {
    if (window_sum < sum) {
      window_sum = window_sum + A[front_pointer];
      front_pointer++;
    }
    if (window_sum > sum) {
      window_sum = window_sum - A[back_pointer];
      back_pointer++;
    }
    if (window_sum == sum) {
      return A.slice(back_pointer, front_pointer);
    }
  }
}

console.log(solution([2, -4, 1, 7, 3, 9, 6, 3, 2, 5, 8, 7, 1]));
