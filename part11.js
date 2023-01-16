function solution(A) {
  let m = Math.max.apply(Math, A);
  let results = [];
  let counts = new Array(m + 1).fill(0);
  for (let i = 0; i < A.length; i++) {
    counts[A[i]] = counts[A[i]] + 1;
  }

  for (let i = 0; i < A.length; i++) {
    let sum = 0;
    let currentNumberinA = A[i];
    let length = Math.sqrt(currentNumberinA);
    for (let j = 1; j <= length; j++) {
      let currentNumberinJ = j;

      // We are counting from 1 to the sqrt of the numberfromArray A

      // Using this we count the occurances of factor before the sqaure root
      if (currentNumberinA % currentNumberinJ === 0) {
        sum = sum + counts[j];
      }

      // Usng this we count the occurances after the square root !!!
      if (currentNumberinJ < Math.sqrt(currentNumberinA)) {
        let opp = currentNumberinA / currentNumberinJ; // 6/1 = 6 and 6 % 1 = 0, when we check 1 , also check its counterpart i.e. 6 , which is also a factor
        sum = sum + counts[opp];
      }
    }
    results.push(A.length - sum);
  }
  return results;
}

let a = [3, 1, 2, 3, 6];
console.log(solution(a));
