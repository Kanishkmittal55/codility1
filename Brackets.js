function solution(A) {
  let stack = [];
  bracketsArray = A.split("");
  console.log(bracketsArray);
  for (let i = 0; i < bracketsArray.length; i++) {
    if (
      bracketsArray[i] === "(" ||
      bracketsArray[i] === "[" ||
      bracketsArray[i] === "{"
    ) {
      stack.push(bracketsArray[i]);
    } else if (bracketsArray[i] === "}") {
      if (stack.length === 0 || stack.pop() !== "{") return 0;
    } else if (bracketsArray[i] === ")") {
      if (stack.length === 0 || stack.pop() !== "(") return 0;
    } else if (bracketsArray[i] === "]") {
      if (stack.length === 0 || stack.pop() !== "[") return 0;
    }
  }
  return stack.length ? 0 : 1;
}

console.log(solution("[({})]"));
