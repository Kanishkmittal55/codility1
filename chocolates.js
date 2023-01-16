function GCD(A, B) {
  if (B === 0) {
    return A;
  } else {
    return GCD(B, A % B);
  }
}

function solution(N, M) {
  // Implement your solution here

  let GCD1 = 0;
  GCD1 = GCD(N, M);
  let LCM = (N * M) / GCD1;
  console.log("The Lcm is :", LCM);
  return LCM / M;
}

console.log(solution(10, 4));
console.log(GCD(10, 4));
