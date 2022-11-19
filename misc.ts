/* 
    problem: Given 2 infinite non-empty sets: find their Cartesian Product.
    @params:
        a:number[] 
        b:number[] 

    @return:
        [number[]].
*/

// BigO : O(n^2)
export const cartesianProduct = (a: number[], b: number[]): [number[]] => {
  let result: any = [];

  a.forEach((i) => {
    b.forEach((l) => {
      result.push([i, l]);
    });
  });

  return result;
};

// console.log(cartesianProduct([1, 4], [3, 4])); // [[1,3],[1,4],[4,3],[4,4]]
// console.log(cartesianProduct([1, 4, 5], [3, 4])); // [[1,3],[1,4],[4,3],[4,4],[5,3],[5,4]]

//Big o : O(n)

export const climb = (n: number, steps: number): number => {
  if (n < steps) return 0;
  return 1 + climb(n - steps, steps);
};

export const climbingStaircase = (n: number): number => {
  return n + Math.floor(climb(n, 2) / 2);
  //   return n + Math.floor(n / 2) * (n % 2); //wrong but close (sort of).
};

console.log(climbingStaircase(1)); // 1
console.log(climbingStaircase(3)); // 3
console.log(climbingStaircase(4)); // 5
