function solution(S, P, Q) {
  let temp = S.split("");
  for (let i = 0; i < temp.length; i++) {
    if (temp[i] === "A") {
      temp[i] = 1;
    } else if (temp[i] === "C") {
      temp[i] = 2;
    } else if (temp[i] === "G") {
      temp[i] = 3;
    } else {
      temp[i] = 4;
    }
  }

  let answers = [];
  for (let j = 0; j < P.length; j++) {
    let results = temp.slice(P[j], Q[j] + 1);
    console.log(results);
    let answer = Math.min.apply(Math, results);
    console.log(answer);
    answers.push(answer);
  }
  return answers;
}

console.log(solution("CAGCCTA", [2, 5, 0], [4, 5, 6]));
