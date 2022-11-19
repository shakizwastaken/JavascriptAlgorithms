type sortFn = (a: number, b: number) => boolean; //function that decides how elements are going to be sorted by
type sort = (numbers: number[], fn: sortFn) => number[];

//
const sortBy = {
  ascending: (a: number, b: number) => a - b > 0,
  descending: (a: number, b: number) => a - b < 0,
};

const arr = [4, 3, 6, 2, 1, 10]; //test array

//swap two indeces in an array
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

// console.log(selectionSort(arr, sortBy.descending));
// console.log(selectionSort(arr, sortBy.ascending));

//bubble sort
export const bubbleSort: sort = (numbers, fn) => {
  for (
    let i = 0;
    i < numbers.length - 1;
    i++ // Last i elements are already in place
  ) {
    //assume array is sorted
    let isSorted = true;

    for (let j = 0; j < numbers.length - i - 1; j++)
      if (fn(numbers[j], numbers[j + 1])) {
        //swap indices
        swap(numbers, j, j + 1);

        //array not sorted
        isSorted = false;
      }

    //array sorted
    if (isSorted) break;
  }

  //return sorted array
  return numbers;
};

// console.log(bubbleSort(arr, sortBy.descending));
// console.log(bubbleSort(arr, sortBy.ascending));

//quick sort
export const quickSort: sort = (numbers, fn) => {
  if (numbers.length <= 1) return numbers; //return array

  //get last element as pivot
  let pivot: number = numbers[numbers.length - 1];

  //left elements
  let left: number[] = [];
  let right: number[] = [];

  for (let i = 0; i < numbers.length - 1; i++) {
    if (fn(numbers[i], pivot)) right.push(numbers[i]);
    else left.push(numbers[i]);
  }

  //return sorted array
  // if (left.length <= 1 && right.length <= 1) return [...left, pivot, ...right];

  //recursion
  return [...quickSort(left, fn), pivot, ...quickSort(right, fn)];
};

// console.log(quickSort(arr, sortBy.descending));
// console.log(quickSort(arr, sortBy.ascending));

//BigO : O(n^2) -> Worst case
//Big-Theta : O(nLog(n)) -> Average case

const merge = (left: number[], right: number[], fn: sortFn) => {
  const sortedArr: any[] = [];

  while (left.length && right.length) {
    if (fn(left[0], right[0])) sortedArr.push(right.shift());
    else sortedArr.push(left.shift());
  }

  return [...sortedArr, ...left, ...right];
};

//merge sort
export const mergeSort: sort = (numbers, fn) => {
  if (numbers.length < 2) return numbers;

  const mid = Math.floor(numbers.length / 2);

  const leftArr = numbers.filter((val, i) => i < mid);
  const rightArr = numbers.filter((val, i) => i > mid);

  return merge(mergeSort(leftArr, fn), mergeSort(rightArr, fn), fn);
};

console.log(mergeSort(arr, sortBy.descending));
console.log(mergeSort(arr, sortBy.ascending));

//BigO : O(nLog(n))
