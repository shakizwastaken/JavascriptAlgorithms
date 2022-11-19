/* 
    problem: Given an integer n: find the first n elements of the fibonacci sequence.

    @params:
        n:number >= 2.

    @return:
        array of numbers.

*/

// BigO : O(n)
export const fibonacci = (n: number): number[] => {
  let arr = [0, 1];

  let i = 2;
  while (arr.length !== n) {
    arr.push(...[arr[i - 1] + arr[i - 2]]);
    i++;
  }

  return arr;
};

// console.log(fibonacci(2)); // [0,1]
// console.log(fibonacci(3)); // [0,1,1]
// console.log(fibonacci(7)); // [0,1,1,2,3,5,8]

/* 
    problem: Given an integer n: find the n-th element of the fibonacci sequence.

    @params:
        n:number >= 2.

    @return:
        number.

*/

// BigO : O(2^n)
export const recursiveFibonacci = (n: number): number => {
  if (n < 2) return n;
  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
};

// console.log(recursiveFibonacci(2)); // 1
// console.log(recursiveFibonacci(3)); // 2
// console.log(recursiveFibonacci(6)); // 8

/* 
    problem: Given an integer n: find the factorial of that integer.
    @params:
        n:number 

    @return:
        number.
*/

// BigO : O(n)
export const factorial = (n: number) => {
  let product = 1;

  for (let i = 2; i <= n; i++) {
    product *= i;
  }

  return product;
};

// console.log(factorial(0)); //1
// console.log(factorial(1)); //1
// console.log(factorial(4)); //24

// BigO : O(n)
export const recursiveFactorial = (n: number): number => {
  if (n === 0) return 1;
  return recursiveFactorial(n - 1) * n;
};

console.log(recursiveFactorial(0)); //1
console.log(recursiveFactorial(1)); //1
console.log(recursiveFactorial(4)); //24

/* 
    problem: Given an integer n: determine if the number is prime or not.
    @params:
        n:number 

    @return:
        boolean.
*/

// BigO : O(n)
export const isPrime = (n: number) => {
  if (n < 2) return false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
};

// console.log(isPrime(3)); //false
// console.log(isPrime(4)); //true
// console.log(isPrime(5)); //false

/* 
    problem: Given an integer n: determine if the number is a power of 2.
    @params:
        n:number 

    @return:
        boolean.
*/

// BigO : O(Log(n))
export const isPowerOfTwo = (n: number) => {
  if (n < 1) return false;

  for (let i = n; i !== 1; i /= 2) {
    if (n % 2 !== 0) return false;
  }

  return true;
};

// console.log(isPowerOfTwo(1)); //true
// console.log(isPowerOfTwo(8)); //true
// console.log(isPowerOfTwo(7)); //false

// BigO : O(1)
export const isPowerOfTwoBitwise = (n: number) =>
  n < 1 ? false : (n & (n - 1)) === 0;

// console.log(isPowerOfTwoBitwise(1)); //true
// console.log(isPowerOfTwoBitwise(8)); //true
// console.log(isPowerOfTwoBitwise(7)); //false
