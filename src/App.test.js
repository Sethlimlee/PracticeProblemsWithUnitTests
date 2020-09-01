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
