// Complete the miniMaxSum function below.
// Wants the sum if the 4 lowest and 4 high
// Always will be an input of
function miniMaxSum(arr) {
  var min = 0, max = 0;
  //sort the array so
  arr = arr.sort((a,b) => {return (a - b)})
  for(var i = 0; i < arr.length - 1; i++){
    min += arr[i];
    max += arr[i+1];
  }
  console.log(`${min} ${max}`);
}
