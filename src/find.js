import dictionary from "./dict";
import byLength from "./byLength";

const first = (arr, i) => {
  return arr[i].length;
};
const firstSub = (arr, i) => {
  return arr[i][0].length;
};

const sameLen = (arr, strLen) => {
  const getLen = Array.isArray(arr[0]) ? firstSub : first;
  var i = 0;
  var res = [];
  while (getLen(arr, i) < strLen) {
    i++;
  }
  while (getLen(arr, i) === strLen) {
    res.push(arr[i]);
    i++;
  }
  return res;
};

const isMatch = (pattern, word) => {
  const re = new RegExp(`${pattern.replace(/\?/g, ".")}`);
  return word.match(re) !== null;
};

export const findAnag = (word) => {
  return sameLen(dictionary, word.length)
    .filter(
      (elem) => elem[1] === word.split("").sort().join("") && elem[0] !== word
    )
    .map((e) => e[0]);
};

export const complete = (str) => {
  return sameLen(byLength, str.length).filter((e) => isMatch(str, e));
};
