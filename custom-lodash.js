export const _ = {
  chunk(array = [], size = 1) {
    const outArray = [];
    if (
      !array.length ||
      !Array.isArray(array) ||
      size < 1 ||
      typeof size !== 'number'
    ) {
      return outArray;
    }
    let tempArray = [];
    for (let i in array) {
      tempArray.push(array[i]);
      if (tempArray.length === size || +i === array.length - 1) {
        outArray.push(tempArray);
        tempArray = [];
      }
    }
    return outArray;
  },

  compact(array = []) {
    return Array.isArray(array) ? array.filter((i) => i) : [];
  },

  concat(...args) {
    return args.reduce((acc, i) => {
      return acc.concat(i);
    }, []);
  },

  difference(array = [], values = []) {
    if (!Array.isArray(array) || !Array.isArray(values)) {
      return array;
    }
    for (let i of values) {
      array = array.filter((j) => j !== i);
    }
    return array;
  },

  differenceBy(array = [], values = [], func) {
    if (!Array.isArray(array) || !Array.isArray(values)) {
      return array;
    }
    for (let i of values) {
      array = array.filter((j) => func(j) !== func(i));
    }
    return array;
  },

  drop(array, n = 1) {
    return Array.isArray(array) ? array.slice(n) : [];
  },

  fill(array, value, start = 0, end = array.length) {
    return array.map((val, i) => {
      return i >= start && i < end ? value : val;
    });
  },
};

export default _;
