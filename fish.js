function solution(a, b) {
  let survivors = 0;
  let stack = [];
  for (let i = 0; i < a.length; i++) {
    if (b[i] === 0) {
      if (i === 0) {
        survivors++;
      } else {
        let size = stack.pop();
        if (size > a[i]) {
          stack.push(a[i]);
        }
      }
    } else {
      stack.push(a[i]);
    }
  }
  return stack.length + survivors;
}

let a = [4, 3, 2, 1, 5];
let b = [0, 1, 0, 0, 0];
console.log(solution(a, b));
