import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

//#region alienDictionary Method and Tests

function alienDictionary(wordString, alphabet) {
  var words = wordString.split(" ");
  var order = alphabet;

  for (let i = 0; i < words.length - 1; i++) {
    const word1 = words[i],
      word2 = words[i + 1];
    let j = 0,
      k = 0;
    while (j < word1.length || k < word2.length) {
      if (k === word2.length) {
        return false;
      } else if (
        j === word1.length ||
        order.indexOf(word1[j]) < order.indexOf(word2[k])
      ) {
        break;
      }
      if (order.indexOf(word1[j]) > order.indexOf(word2[k])) {
        return false;
      }
      j += 1;
      k += 1;
    }
  }
  return true;
}

test("alienDictionary Method", () => {
  expect(alienDictionary("hello leetcode", "hlabcdefgijkmnopqrstuvwxyz")).toBe(
    true
  );
  expect(alienDictionary("word world row", "worldabcefghijkmnpqstuvxyz")).toBe(
    false
  );
  expect(alienDictionary("apple app", "abcdefghijklmnopqrstuvwxyz")).toBe(
    false
  );
});

//#endregion alienDictionary Method

//#region addStrings

function addStrings(num1, num2) {
  if (num2.length > num1.length) return addStrings(num2, num1);

  let i = num1.length - 1;
  let j = num2.length - 1;
  let out = "";
  let carry = 0;

  while (i >= 0) {
    const digit1 = num1.charAt(i) - "0";
    const digit2 = j < 0 ? 0 : num2.charAt(j) - "0";

    let sum = carry + digit1 + digit2;
    carry = 0;
    if (sum > 9) {
      carry = 1;
      sum %= 10;
    }

    out = sum.toString() + out;

    i--;
    j--;
  }

  if (carry > 0) out = carry.toString() + out;

  return out;
}

test("addStrings Method ", () => {
  expect(addStrings("0", "0")).toBe("0");
  expect(addStrings("71", "168899993")).toBe("168900064");
  expect(addStrings("9133", "0")).toBe("9133");
});

//#endregion addStrings

//#region mergeSortArray

function mergeSortArrays(stringArray1, stringArray2) {
  var array1 = stringArray1.split(",");
  var array2 = stringArray2.split(",");

  var arrayCombined = array1.concat(array2);
  var newArray = [];
  for (let i = 0; i < arrayCombined.length; i++) {
    if (arrayCombined[i] !== "0") {
      newArray.push(arrayCombined[i]);
    }
  }
  newArray.sort((a, b) => {
    return a - b;
  });
  var newStringArray = newArray.join(" , ");
  return newStringArray;
}

test("mergeSortArrays method ", () => {
  expect(mergeSortArrays("1,2,3,4,0", "1,2,3,4,0")).toBe(
    "1 , 1 , 2 , 2 , 3 , 3 , 4 , 4"
  );
  expect(mergeSortArrays("1,2,3,1,0", "5,8,1,4,2")).toBe(
    "1 , 1 , 1 , 2 , 2 , 3 , 4 , 5 , 8"
  );
});

//#endregion mergeSortArray

//#region moveZeroes

var moveZeros = function (arr) {
  var count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      count++;
    }
  }

  var newArray = arr.filter((element) => element !== 0);

  for (let j = 0; j < count; j++) {
    newArray.push(0);
  }

  return newArray;
};

test("moveZeros method ", () => {
  expect(
    moveZeros([9, 0, 9, 1, 2, 1, 1, 3, 1, 9, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0])
  ).toStrictEqual([9, 9, 1, 2, 1, 1, 3, 1, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  expect(moveZeros([9, 0, 9, 1, 0, 0, 1, 2, 0])).toStrictEqual([
    9,
    9,
    1,
    1,
    2,
    0,
    0,
    0,
    0,
  ]);
});

//#endregion moveZeroes
