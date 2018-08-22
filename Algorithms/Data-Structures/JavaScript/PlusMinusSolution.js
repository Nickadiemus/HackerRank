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
  // FIXME: Make sure to output up to 6 decimals
  console.log(p/size);
  console.log(n/size);
  console.log(z/size);
}
plusMinus([-4,3,-9,0,4,1])
