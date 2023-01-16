function solution(a, b, k) {
  let arr = [];
  let len = b;
  let count = 0;
  let i = 0;
  for (i = a; i <= b; i++) {
    arr.push(i);
  }
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] % k === 0) {
      console.log(arr[j]);
      count = count + 1;
    }
  }
  return count;
}

console.log(solution(6, 11, 2));
