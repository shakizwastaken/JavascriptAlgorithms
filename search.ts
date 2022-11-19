export type search = (arr: any[], target: any) => number;

const sortedArr = [1, 2, 2, 3, 4, 5];

//linear search
export const linearSearch: search = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == target) return i; //target found, return index.
  }

  return -1; //target not found.
};

// console.log(linearSearch(sortedArr, 3)); // 2
// console.log(linearSearch(sortedArr, 0)); // -1

// Big O : O(n)

//binary search
export const binarySearch: search = (arr, target) => {
  if (arr.length === 1 && arr[0] != target) return -1; //target not found, return -1.

  let mid = Math.floor(arr.length / 2); //get middle value.

  if (arr[mid] === target) return mid; //target found, return index.

  //target is bigger than middle value
  if (target > arr[mid])
    return binarySearch(
      arr.filter((val, i) => i > mid),
      target
    );
  //target is smaller than middle value
  else
    return binarySearch(
      arr.filter((val, i) => i < mid),
      target
    );
};

// console.log(binarySearch(sortedArr, 3)); // 2
// console.log(binarySearch(sortedArr, 0)); // -1

// Big O : O(n)
