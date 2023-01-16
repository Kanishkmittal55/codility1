function solution(N) {
  // L and b if a rectangle where Area is a 'N'
  // using the L and b you will calculate a perimeter
  // return the minimum perimeter

  let length = 0;
  let breadth = 0;
  let temp = [];
  // For getting possible values of length and breadth
  for (let i = 0; i <= N; i++) {
    if (N % i === 0) {
      temp.push(i);
    }
  }

  let perimeters = new Set();
  for (let j = 0; j < temp.length; j++) {
    length = temp[j];
    breadth = temp[temp.length - (j + 1)];

    if (length * breadth === N) {
      perimeters.add(2 * (length + breadth));
    }
  }

  perimeters = Array.from(perimeters); //. Convert the set from a set to a array and save it the same variable

  return Math.min.apply(Math, perimeters);
}

console.log(solution(30));
