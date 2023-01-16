function solution(m, A) {
  m = A.length;
  let front_pointer = 0;
  let back_pointer = 0;
  let slice_array = [];
  let slice = [];

  for (let i = 0; i < 2 * m; i++) {
    if (i === 0) {
      slice = A.slice(0, 1);
      slice_array.push(slice);
      front_pointer++;
      continue;
    }

    if (A[i] === A[i - 1] || A[back_pointer] === A[front_pointer]) {
      // A[i+1] = 5, A[i] = 4
      back_pointer++;
      front_pointer = back_pointer;
    }
    // A = [3,4,5,5,2]
    // for i = 1, A[i] = 4 , sliceArray = [[3]] , b_p = 0, f_p = 1
    // console.log(`for i = ${i}, A[i] = ${A[i]} , sliceArray = ${slice_Array}, b_p = ${b_p} , f_p = ${}`);
    slice = A.slice(back_pointer, front_pointer + 1); // slice = [3,4] from 0 to 1
    slice_array.push(slice); //[[3],[3,4]]
    front_pointer++; // b_p = 0 , f_p = 2
  }
  return slice_array;
}

console.log(solution(5, [3, 4, 5, 5, 2]));
