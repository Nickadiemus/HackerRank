//compare each array's position w/ each other
// a[i] > b[i], a++
// a[i] = b[i], None
// a[i] < b[i], b++
//returns array of two scores [Alice's Score, Bob's Score]
function compareTriplets(a, b) {
  var score = [0,0];
  a.forEach((i,iterator) => {
    if(i < b[iterator]){
      score[1]++;
    }
    else if (i > b[iterator]){
      score[0]++
    }
  });
  return score
}
