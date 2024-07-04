//document.querySelector("app")

// import "./styles.css";
// Star pattern problems from Striver's takeuforward DSA course
document.getElementById("app").innerHTML = `
<h1>Star Patterns!</h1>
`;
const star = "*";

// *****
// *****
// *****
// *****
// *****
function starPattern1() {
  let n = 5;
  let pattern = "<span>1.<br>";

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      pattern += star;
    }
    pattern += "<br>";
  }
  pattern += "</span>";
  return pattern;
}
document.getElementById("app").insertAdjacentHTML("beforeend", starPattern1());

///////-----------------------////////

// *
// **
// ***
// ****
// *****
function starPattern2(n) {
  let pattern = "";

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      pattern += star;
    }
    pattern += "\n";
  }
  return pattern;
}
//console.log(starPattern2(5));
////////------///////

// 4 4 4 4 4 4 4
// 4 3 3 3 3 3 4
// 4 3 2 2 2 3 4
// 4 3 2 1 2 3 4
// 4 3 2 2 2 3 4
// 4 3 3 3 3 3 4
// 4 4 4 4 4 4 4

// we are printing n in outermost cell and n-1 in the inner cell and n-2 and so on.
// Each position value is n-x, where x is the shortest distance out of all the distance from each side
// distance from top = row, distance from left = column, distance from bottom = totalRow - row - 1 ( - 1 because
// will not count own cell distance), distance from right = totalColumn - column - 1.
function starPattern3(n) {
  function minOfTwo(firstNumber, secondNumber) {
    if (firstNumber < secondNumber) {
      return firstNumber;
    } else {
      return secondNumber;
    }
  }

  let pattern = "";
  const totalRow = 2 * n - 1;
  for (let row = 0; row < totalRow; row++) {
    for (let column = 0; column < totalRow; column++) {
      const distanceTop = row;
      const distanceLeft = column;
      const distanceBottom = totalRow - row - 1;
      const distanceRight = totalRow - column - 1;
      const shortestDistance = minOfTwo(
        minOfTwo(distanceTop, distanceLeft),
        minOfTwo(distanceBottom, distanceRight)
      );
      const value = n - shortestDistance;
      pattern += value + " ";
    }
    pattern += "\n";
  }
  return pattern;
}
//console.log(starPattern3(4));

////////-------////////

//       *       
//       *       
//       *       
// * * * * * * * 
//       *       
//       *       
//       * 
// Here n should be odd no to print a plus star
// function starPattern4(n) {
//   let pattern = "";
//   const star = "*";
//   const mid = Math.floor(n / 2) + 1;
//   for (let row = 1; row <= n; row++) {
//     if (row == mid) {
//       for (let column = 1; column <= n; column++) {
//         pattern += star + " ";
//       }
//     } else {
//       for (let column = 1; column <= mid - 1; column++) {
//         pattern += " " + " ";
//       }
//       pattern += star;
//     }
//     pattern += "\n";
//   }
//   return pattern;
// }
// console.log(starPattern4(7));
///////-OR-///////////
function starPattern4(n) {
  let pattern = "";
  const star = "*";
  const mid = Math.floor(n / 2) + 1;
  for (let row = 1; row <= n; row++) {
    for (let column = 1; column <= n; column++) {
      if (row == mid || column == mid) {
        pattern += star + " ";
      } else {
        pattern += " " + " ";
      }
    }
    pattern += "\n";
  }
  return pattern;
}
//console.log(starPattern4(7));

////////-------////////

// *     *
//  *   *
//   * *
//    *
//   * *
//  *   *
// *     *
// //Here n should be odd no to print an X
// function starPattern5(n) {
//   let pattern = "";
//   const star = "*";
//   for (let row = 1; row <= n; row++) {
//     for (let column = 1; column <= n; column++) {
//       if (column == row || column == n - row + 1) {
//         pattern += star;
//       } else {
//         pattern += " ";
//       }
//     }
//     pattern += "\n";
//   }
//   return pattern;
// }
// console.log(starPattern5(7));
////////-OR-/////////
function starPattern5(n) {
  let pattern = "";
  const mid = Math.floor(n / 2) + 1;
  let spaceComp;
  let starComp;
  for (let row = 1; row <= n; row++) {
    if (row > mid) {
      spaceComp = n - row;
      starComp = 2 * row - n;
    } else {
      spaceComp = row - 1;
      starComp = n - (2 * row - 2);
    }
    for (let space = 0; space < spaceComp; space++) {
      pattern += " ";
    }
    for (let star = 1; star <= starComp; star++) {
      if (star == 1 || star == starComp) {
        pattern += "*";
      } else {
        pattern += " ";
      }
    }
    pattern += "\n";
  }
  return pattern;
}
//console.log(starPattern5(7));

///////------/////////

// *******
// **   **
// * * * *
// *  *  *
// * * * *
// **   **
// *******
function starPattern6(n) {
  let pattern = "";
  for (let row = 1; row <= n; row++) {
    for (let column = 1; column <= n; column++) {
      if (
        row == 1 ||
        column == 1 ||
        row == n ||
        column == n ||
        column == row ||
        column == n - row + 1
      ) {
        pattern += "*";
      } else {
        pattern += " ";
      }
    }
    pattern += "\n";
  }
  return pattern;
}
//console.log(starPattern6(7));
// 1      1
// 12    21
// 123  321
// 12344321

function starPattern7(n) {
    let pattern = "";
    for (let row = 1; row <= n; row++) {
      for (let pattern1 = 1; pattern1 <= row; pattern1++) {
        pattern += pattern1;
      }
      for (let pattern2 = 1; pattern2 <= ((2 * n) - (2 * row)); pattern2++) {
        pattern += " ";
      }
      for (let pattern3 = row; pattern3 >= 1; pattern3--) {
        pattern += pattern3;
      }
      pattern += "\n";
    }
    return pattern;
  }
  //console.log(starPattern13(4));

  //////-------/////////

// Pascal's triangle
//         1
//       1   1
//     1   2   1
//   1   3   3   1
// 1   4   6   4   1

// OR

// 1
// 1 1
// 1 2 1
// 1 3 3 1
// 1 4 6 4 1

// We will solve it by using (Combination = nCr = n! / (r!*(n-r)!)), where n is row and r is column,
// but here we will do (row - 1 C column - 1) => r-1Cc-1.
// for each element except first element of any column where we know the value will always be 1, we
//  can compute the value through (row-1 C column-1), the shortcut formula is, let's say
//  for row 5 column 3, then row-1 C column-1, which will be 4C2, formula will be 4*3/2*1, i.e,
//  the number which is denominator, then that many times we have to move forward with multiplying above
//  with n*n-1*n-2 and so on. For row 4, column 4, then row-1 and column-1, will be, 3C3, which will be
//  3*2*1/3*2*1 = 1.
//  Let, say for row 3, first column value will be 1, after that, each column value will be,
//  3/1 , 3*2/2*1, 3*2*1/3*2*1

function starPattern8(n) {
  let pattern = "";

  function generateRow(row) {
    // take the first value of each row as 1 and print it.
    let coefficient = 1;
    pattern += coefficient;
    // start the loop from 1 because in the formula 0 will not work. And it will loop until less than
    // row since first column is 1 which is already printed.
    for (let column = 1; column < row; column++) {
      coefficient = (coefficient * (row - column)) / column;
      pattern += " " + coefficient;
    }
    return pattern;
  }
  
  for (let row = 1; row <= n; row++) {
    // printing spaces before the actual numbers in each row
    for (let space = 0; space < n - row; space++) {
      pattern += " ";
    }
    pattern = generateRow(row);
    pattern += "\n";
  }
  return pattern;
}
//console.log(starPattern8(5));
///////--OR--///////
//Using array
function starPattern8(n) {
  let res = [];

  function generateRow(row) {
    // take the first value of each row as 1 and print it.
    let temp = [];
    let coefficient = 1;
    temp.push(coefficient);
    // start the loop from 1 because in the formula 0 will not work. And it will loop until less than
    // row since first column is 1 which is already printed.
    for (let column = 1; column < row; column++) {
      coefficient = (coefficient * (row - column)) / column;
      temp.push(coefficient);
    }
    return temp;
  }
  
  for (let row = 1; row <= n; row++) {    
    res.push(generateRow(row));
  }
  return res;
}
console.log(starPattern8(5));