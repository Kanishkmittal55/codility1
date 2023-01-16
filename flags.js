colors = require("colors");

function peakFinder(A) {
  let newA = [];
  let lastSelectedPeak = 0;
  let n = A.length - 1;
  console.log(n);
  for (let i = A.length - 1; i >= 0; --i) {
    // First we check the initial high value which will be set to 12 showing that the next available peak is outside the array
    if (i === A.length - 1) {
      console.log(`the intial i ${i}`);
      newA.push(A.length);
      // After starting the array move onto to the next iteration
      continue;
    }

    // If at some index there exists a peak
    if (A[i] > A[i + 1] && A[i] > A[i - 1]) {
      // Then that index is a peak
      console.log(`The index ${i} of the array is a peak`);
      console.log(`The values ${A[i + 1]}, ${A[i]}, ${A[i - 1]}`);
      lastSelectedPeak = i;
      newA.push(lastSelectedPeak);
    }
    // If at any index no peak exists the last found peak will be saved in the array
    else {
      console.log(`The index ${i} of A is not a peak`);
      newA.push(lastSelectedPeak);
    }
  }
  return newA;
}

function flags(A) {
  let currentGuess = 0;
  let next_guess = 0;
  let peaks = peakFinder(A);
  console.log(peaks.reverse());
  while (canPlaceFlags(peaks, next_guess)) {
    currentGuess = next_guess;
    next_guess += 1;
  }
  return currentGuess;
}

function canPlaceFlags(peaks, flagsToPlace) {
  let currentPosition = 1 - flagsToPlace;
  console.log(`The current position is ${currentPosition}`.yellow);
  console.log(`we are trying to place ${flagsToPlace} flags`.yellow);
  for (let i = 0; i < flagsToPlace; i++) {
    console.log(
      `if current position ${currentPosition} + ${flagsToPlace} > ${
        peaks.length - 1
      }`.cyan
    );
    if (currentPosition + flagsToPlace > peaks.length - 1) return false;
    console.log(
      `Else currentPosition =  peaks[currentPosition + flagsToPlace] which is ${
        peaks[currentPosition + flagsToPlace]
      }
        }`.cyan
    );
    currentPosition = peaks[currentPosition + flagsToPlace];
  }

  return currentPosition < peaks.length;
}

let A = [1, 5, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2];

console.log(flags(A));
