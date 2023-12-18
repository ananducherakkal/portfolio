export const createSubarrays = (arr: Array<any>, subSize: number) => {
  const newArray = [];
  for (let i = 0; i < arr.length; i += subSize) {
    newArray.push(arr.slice(i, i + subSize));
  }
  return newArray;
};
