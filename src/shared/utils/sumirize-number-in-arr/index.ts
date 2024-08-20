export const sumirizeNumberInArr = <
  ObjectCalc,
  fieldArray extends keyof ObjectCalc
>(
  arr: ObjectCalc[],
  field: fieldArray
) => {
  if (!arr.length) return 0;
  if (typeof arr[0][field] !== "number") return 0;
  return +arr.reduce((acc, curr) => acc + +curr[field], 0).toFixed(2);
};
