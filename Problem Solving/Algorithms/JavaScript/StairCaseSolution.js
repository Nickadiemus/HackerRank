// Complete the staircase function below.
function staircase(n) {
  const stair = "#";
  var ws = n;
  var iterator = 0;
  while(iterator <= n){
    var currentLine = generateWhiteSpace(ws);
    for(var i = 0; i < iterator; i++){
      currentLine += stair;
    }
    if(iterator === 0){
      iterator++;
      ws--;
    }
    else{
      console.log(currentLine);
      ws--;
      iterator++;
    }
  }
}
//generates whitespace before adding hashtags
function generateWhiteSpace(n){
  var gws = '';
  for(var i = 0; i < n; i++){
    gws += ' ';
  }
  return gws;
}
