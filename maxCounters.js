function solution(n, a) {
  // n is the number of counters and a is the instruction list
  let counterArray = new Array(n).fill(0);
  for (let i = 0; i < a.length; i++) {
    if (a[i] > n) {
      // all the counters have to match the value of the counter with max. value
      const max_value_counter = Math.max.apply(Math, counterArray);
      counterArray.fill(max_value_counter);
    } else {
      let counter_index = a[i] - 1;
      counterArray[counter_index] = counterArray[counter_index] + 1;
    }
  }
  return counterArray;
}

let n = 5;
let a = [1, 1, 3, 4, 3, 7, 3, 3, 2, 1];
// console.log(solution(n, a));

// Udemy Solution
function maxCounters(N, A) {
  let counters = new Array(N).fill(0);
  let start_line = 0;
  let current_max = 0;
  A.forEach((instruction) => {
    let index = instruction - 1; // 0

    // If instruction i.e. 1 (a[0]) is greater than 5, make the start line = current_max_value_amongst_all_counters
    //1           5
    if (instruction > N) {
      start_line = current_max;
      console.log(current_max);
      // 0 <
    }
    // If counters at 0 ( to shift left) i.e. 0 is less than 0 then
    else if (counters[index] < start_line) counters[index] = start_line + 1;
    else counters[index] += 1;

    if (instruction <= N && counters[index] > current_max) {
      current_max = counters[index];
    }
  });
  for (let i = 0; i < counters.length; i++) {
    if (counters[i] < start_line) counters[i] = start_line;
  }
}

function solution5(N, A) {
  // Implement your solution here
  // N = no. of counter
  // A = which counters to operate upon and what to do
  // return the value of all counter after the operation
  let ans = new Array(N).fill(0);
  for (let opr = 0; opr < A.length; opr++) {
    let counter = A[opr];
    if (A[opr] < N) {
      ans[A[opr] - 1]++;
    } else {
      let findMax = Math.max.apply(Math, ans);
      ans.fill(findMax);
    }
  }
  return ans;
}

console.log(solution5(5, [3, 4, 4, 6, 1, 4, 4]));
