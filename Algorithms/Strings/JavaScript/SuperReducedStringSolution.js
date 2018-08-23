// Complete the superReducedString function below.
function superReducedString(s) {
  //ascii range a-z -> 097-127
  //try regexing for each character
  var arr = [];
  var expression = s;
  for(var i = 97; i <= 122; i++){
    var l = String.fromCharCode(i)
    arr.push(l+l);
  }
  for(var j = 0; j < arr.length; j++){
    var currentSearch = arr[j]
    var index = expression.indexOf(currentSearch);
    if( index != -1){

      // expression = expression.slice(index, index+1)
      // console.log(expression);
      // console.log(begin + after);
    }
  }
  // arr.forEach((i) => {
  //   //new RegExp since regex doesn't take string literals
  //   var regex = new RegExp(i+i,'g')
  //   // console.log(regex);
  //   //counts the matching characters based on the RegExp
  //   var count = (s.match(regex) || []).length
  //   //if matching
  //   if((count % 2) == 1){
  //     expression += i
  //   }
  // });
  // console.log(expression);
  if(expression.length === 0) return "Empty String";
  else return expression;
}


superReducedString("aaabc")
