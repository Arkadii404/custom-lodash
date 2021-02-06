export class Lodash {
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
  }
}

export default Lodash;
