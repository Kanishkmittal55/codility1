function solution(A) {
  choices = [100, 50, 20, 10, 5, 2, 1];
  ans = [];
  count = 0;
  let moneyLeft = A;
  for (let i = 0; i < choices.length - 1; i++) {
    let currentNote = choices[i];
    while (moneyLeft >= currentNote) {
      moneyLeft = moneyLeft - currentNote;
      ans.push(currentNote);
    }
  }
  return ans;
}

// console.log(solution(67));

// Max Non Overlapping solution (Your Solution)
function solution2(A, B) {
  let choices = [];
  let count = A.length;
  for (let i = 0; i < A.length; i++) {
    choices.push([A[i], B[i]]);
  }
  for (let j = 1; j < choices.length; j++) {
    // let temp2 = choices[j].split(",");
    let temp2 = choices[j][0];
    let temp = choices[j - 1][1];
    if (temp2 <= temp) {
      count--;
    }
  }
  return count;
}

// console.log(solution2([1, 3, 7, 9, 9], [5, 6, 8, 9, 10]));

// Optimal Solution
function solution3(A, B) {
  let choices = [];
  let count = A.length;
  for (let i = 0; i < A.length; i++) {
    choices.push([A[i], B[i]]);
  }
  for (let j = 1; j < choices.length; j++) {
    // let temp2 = choices[j].split(",");
    let temp2 = choices[j][0];
    let temp = choices[j - 1][1];
    if (temp2 <= temp) {
      count--;
    }
  }
  return count;
}

console.log(solution2([1, 3, 7, 9, 9], [5, 6, 8, 9, 10]));
