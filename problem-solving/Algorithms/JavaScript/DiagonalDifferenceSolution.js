// Complete the diagonalDifference function below.
function diagonalDifference(arr) {
  var sumf = 0, sumr = 0, j = arr.length-1;
  for(var i = 0; i < arr.length; i++){
    sumf += arr[i][i];
    sumr += arr[i][j];
    j--;
  }
  return Math.abs(sumf - sumr);
}
