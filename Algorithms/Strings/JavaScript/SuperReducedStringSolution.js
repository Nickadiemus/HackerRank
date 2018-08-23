// Complete the superReducedString function below.
function superReducedString(s) {
  //ascii range a-z -> 097-127
  //try regexing for each character
  var arr = [];
  var expression = '';
  for(var i = 97; i <= 122; i++) arr.push(String.fromCharCode(i));

  arr.forEach((i) => {
    //new RegExp since regex doesn't take string literals
    var regex = new RegExp(i,'g')
    //counts the matching characters based on the RegExp
    var count = (s.match(regex) || []).length
    //if matching
    if((count % 2) == 1){
      expression += i
    }
  });
  if(expression.length === 0) return "Empty String";
  else return expression;
}
