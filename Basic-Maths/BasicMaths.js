
import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello JavaScript!</h1>
`;

// Basic Maths in DSA

// 1. Count digits
// e.g, n = 12345, output = 5, n = 739, output = 3
function countDigits(n) {
  //   const str = n + ""; // or String(n) or n.toString()
  //   //return str.length;
  //OR
  let count = 0;
  return (count = Math.floor(Math.log10(n) + 1));

  //   let count = 0;
  //   while (n > 0) {
  //     // n = Math.floor(n / 10);
  //     // count++;
  //   }
  //   return count;
}
console.log(countDigits(12345));

//////-----//////
// Extract digits from a number separately
// i/p = 12345 , o/p = [1, 2, 3, 4, 5]
// i/p = 7789 , o/p = [7, 7, 8, 9]
function extractDigits(n) {
  const result = [];
  const reverseN = [];
  while (n > 0) {
    const lastDigit = n % 10;
    reverseN.push(lastDigit);
    n = Math.floor(n / 10);
  }
  //return reverseN.reverse();
  // OR
  for (let i = 1; i <= reverseN.length; i++) {
    result.push(reverseN[reverseN.length - i]);
  }
  return result;
}
console.log(extractDigits(12345));

import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello JavaScript!</h1>
`;

// Basic Maths in DSA

// 1. Count digits
// e.g, n = 12345, output = 5, n = 739, output = 3
function countDigits(n) {
  //   const str = n + ""; // or String(n) or n.toString()
  //   //return str.length;
  //OR
  let count = 0;
  return (count = Math.floor(Math.log10(n) + 1));

  //   let count = 0;
  //   while (n > 0) {
  //     // n = Math.floor(n / 10);
  //     // count++;
  //   }
  //   return count;
}
console.log(countDigits(12345));

//////-----//////
// Extract digits from a number separately
// i/p = 12345 , o/p = [1, 2, 3, 4, 5]
// i/p = 7789 , o/p = [7, 7, 8, 9]
function extractDigits(n) {
  const result = [];
  const reverseN = [];
  while (n > 0) {
    const lastDigit = n % 10;
    reverseN.push(lastDigit);
    n = Math.floor(n / 10);
  }
  //return reverseN.reverse();
  // OR
  for (let i = 1; i <= reverseN.length; i++) {
    result.push(reverseN[reverseN.length - i]);
  }
  return result;
}
console.log(extractDigits(12345));
