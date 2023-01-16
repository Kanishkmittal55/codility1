function solution(steps, a) {
  let river_positions = new Array(steps + 1).fill(false);
  for (let time = 0; time < a.length; time++) {
    let pos = a[time];
    if (!river_positions[pos]) {
      river_positions[pos] = true;
      steps -= 1;
    }
    if (steps === 0) return time;
  }

  return -1;
}
let x = 5;
let a = [1, 3, 1, 4, 2, 3, 5, 4];

console.log(solution(x, a));

//alternate
function solution2(X, A) {
  // Implement your solution here
  let lookup = new Array(X + 1).fill(false);
  let counter = X;

  for (let i = 0; i < A.length; i++) {
    let position = A[i];
    if (lookup[position] == true) {
      continue;
    }
    lookup[position] = true;
    counter--;
    if (counter === 0) {
      return i;
    }
  }
  return -1;
}

solution2(x, a);
