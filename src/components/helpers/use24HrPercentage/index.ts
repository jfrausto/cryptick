export const use24HrPercentage = (open24: number, currentPrice: number): number => {
  // toFixed(2) returns a string of the rounded number with two dec places
  // we need to parse it to return Type number.
  return parseFloat((((currentPrice/open24)-1)*100).toFixed(2));
}