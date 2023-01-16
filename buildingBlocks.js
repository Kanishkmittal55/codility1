function solution(H) {
  // Implement your solution here
  let counter = 0;
  let stack = [];
  let last = 0;

  for (let i = 0; i < H.length; i++) {
    let height = H[i];
    if (height > last) {
      last = height;
      counter += 1;
      stack.push(height);
    } else if (height < last) {
      while (stack.length > 0 && height < stack[stack.length - 1]) {
        stack.pop();
      }
      if (stack.length === 0 && height !== stack[stack.length - 1]) {
        counter += 1;
        stack.push(height);
      }
      last = height;
    }
  }
  return counter;
}

console.log(solution([8, 8, 5, 7, 9, 8, 7, 4, 8]));
