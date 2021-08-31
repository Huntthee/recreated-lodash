// Recreating the lodash library! A Codecademy project.
const _ = {

  // Recreated 'clamp' number method
  clamp(num, low, high) {
    if (num < low) {
      num = low;
      return num;
    } else if (num > high) {
      num = high;
      return num;
    } else if (num >= low && num <= high) {
      return num;
    } else {
      return `that didn't work.`
    }
  },

  // Recreated 'inRange' number method
  inRange(num, start, end) {
    if (end == null) {
      end = start;
      start = 0;
    }

    if (start > end) {
      temp = end;
      end = start;
      start = temp;
    }

    if (num < start) {
      return false;
    } else if (num >= end) {
      return false;
    } else if (num >= start && num < end) {
      return true;
    }
  },

  // Recreated 'words' string method
  words(string) {
    let copy = string.split(' ');
    return copy;
  },

  // Recreated 'pad' string method
  pad(string, length) {
    if (length <= string.length) {
      return string;
    }
    let startPad = Math.floor((length - string.length) / 2);
    let endPad = length - (string.length - startPad);
    let paddedString = ' '.repeat(startPad) + string + ' '.repeat(endPad);
    return paddedString;
  },

  // Recreated 'has' object method
  has(object, key) {
    let hasValue = (object[key] != undefined);
    return hasValue;
  },

  // Recreated 'invert' object method
  // Still failing last test, took own jab, then followed video and still fails last test. not sure why.
  invert(object) {
    let invertedObject = {};
    for (let key in object) {
      const originalValue = object[key];
      invertedObject = {originalValue: key}
    }
    return invertedObject;
  },

  // Recreated 'findKey' object method
  findKey(object, predicate) {
    for (let key in object) {
      const value = object.key;
      const predicateReturnValue = predicate(value);
      if (predicateReturnValue) {
        return key;
      }
      return undefined;
    } 
  },

  // Recreated 'drop' array method
  drop(array, n) {
    if (n <= 0 || n === null || n === undefined) {
      n = 1;
    }
    const newArray = array.slice(n);

    return newArray;
  }
}



// Do not write or modify code below this line.
module.exports = _;