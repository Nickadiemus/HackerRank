// Complete the countingValleys function below.

// n - number of steps taken
// s - array of strings containing his path
function countingValleys(n, s) {
  var pos = visitedValleys = 0; // if pos < 0 below sea level, if pos > 0 above sea level. if pos == 0 at sea level
  const path = s.split('');
  path.forEach((i, index) => {
    var temp = trackPath(i);
    pos += temp;
    if(pos == 0){
      visitedValleys++;
    }
  });
  console.log("visitedValleys: " + visitedValleys);
}

function trackPath(step){
  switch (step.toUpperCase()) {
    case 'U':
      return 1;
      break;
    case 'D':
      return -1;
      break;
    default:
      console.log("Error: Not found")
  }
}

countingValleys(8,"UDDDUDUU");
