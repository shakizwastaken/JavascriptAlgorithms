type sortFn = (a: number, b: number) => boolean; //function that decides how elements are going to be sorted by
type sort = (numbers: number[], fn: sortFn) => number[];

//
const sortBy = {
  ascending: (a: number, b: number) => a - b > 0,
  descending: (a: number, b: number) => a - b < 0,
};

const swap = (arr: number[], i: number, j: number) =>
  ([arr[i], arr[j]] = [arr[j], arr[i]]);

//selection sort
export const selectionSort: sort = (numbers, fn) => {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i; j < numbers.length; j++) {
      if (fn(numbers[i], numbers[j])) {
        // swap values
        swap(numbers, i, j);
      }
    }
  }

  //return sorted array
  return numbers;
};

//bubble sort
export const bubbleSort: sort = (numbers, fn) => {
  for (let i = 0; i < numbers.length - 1; i++)
    // Last i elements are already in place
    for (let j = 0; j < numbers.length - i - 1; j++)
      if (fn(numbers[j], numbers[j + 1])) {
        swap(numbers, j, j + 1);
      }
  //return sorted array
  return numbers;
};

export const quickSort: sort = (numbers, fn) => {
  return numbers;
};

console.log(bubbleSort([1, 3, 4, 2], sortBy.descending));
