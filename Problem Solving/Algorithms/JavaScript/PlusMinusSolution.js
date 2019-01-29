// Complete the plusMinus function below.
function plusMinus(arr) {
  var p = 0, n = 0, z = 0;
  const size = arr.length;
  let arrcp = arr.sort((a,b) => {
    return a - b;
  })
  arrcp.forEach((i) => {
    if(i > 0) p++
    else if(i <  0) n++
    else z++
  })
  // Outputs numbers to fixed decimal
  console.log((p/size).toFixed(5));
  console.log((n/size).toFixed(5));
  console.log((z/size).toFixed(5));
}
plusMinus([-4,3,-9,0,4,1])
