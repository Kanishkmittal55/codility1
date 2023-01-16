function isPrime(A) {
  if (A === 1) {
    return false;
  }
  for (let i = 2; i < A / 2; i++) {
    if (A % i === 0) {
      return false;
    }
  }
  return true;
}

function commonPrimeDivisor(A, B) {
  // Implement your solution here
  let mainFlag = false;
  let potentialAnswers = [];
  for (let i = 0; i <= A / 2; i++) {
    if (A % i == 0) {
      console.log("The i is ", i);
      potentialAnswers.push(i);
    }
  }

  let potentialAnswers2 = [];
  for (let i = 0; i <= B / 2; i++) {
    if (A % i == 0) {
      console.log("The i2 is ", i);
      potentialAnswers2.push(i);
    }
  }
  console.log(potentialAnswers);
  console.log(potentialAnswers2);

  let finalAnswer = [];
  let finalAnswer2 = [];
  for (let j = 0; j < potentialAnswers.length; j++) {
    if (isPrime(potentialAnswers[j])) {
      finalAnswer.push(potentialAnswers[j]);
    }
  }

  for (let j = 0; j < potentialAnswers2.length; j++) {
    if (isPrime(potentialAnswers2[j])) {
      finalAnswer2.push(potentialAnswers2[j]);
    }
  }
  if (finalAnswer.length !== finalAnswer2.length) {
    mainFlag = false;
  }

  finalAnswer.sort((a, b) => {
    return a - b;
  });
  finalAnswer2.sort((a, b) => {
    return a - b;
  });

  for (let k = 0; k < finalAnswer.length; k++) {
    if (finalAnswer[k] !== finalAnswer2[k]) {
      mainFlag = false;
    }
  }
  mainFlag = true;

  console.log(finalAnswer);
  console.log(finalAnswer2);
  return mainFlag;
}
console.log("The request : ", commonPrimeDivisor(10, 30));

function solution(A, B) {
  count = 0;
  for (let i = 0; i < A.length; i++) {
    if (commonPrimeDivisor(A[i], B[i])) {
      count += 1;
    }
  }
  return count;
}

console.log(solution([15, 10, 3], [75, 30, 5]));
