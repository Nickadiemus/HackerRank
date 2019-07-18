
// Complete the caesarCipher function below.
/*
  @param: (s String, k Int)
*/
//// FIXME: still not working for k > range
function caesarCipher(s, k) {
  const deciper = s.split('')
  var conversion = [];
  deciper.forEach((i) => {
    console.log(i, " -> ", i.charCodeAt(0));
    conversion.push(i.charCodeAt(0))
  })
  debugger;
  conversion.forEach((i,j) => {
    //checks to see if special characters are found
    if(i < 65 || 123 < i || i === 95){
      console.log(i ,"was true");
      conversion[j] = String.fromCharCode(i);
    }
    //captial letter constraint
    else if((i < 91) && (i > 64)){
      if((i + k) > 90){
        var newConv = ((i + k - 1) - (90 - 65));
        conversion[j] = String.fromCharCode(newConv);
      }
      else {
        conversion[j] = String.fromCharCode(i+k);
      }
    }
    else if((i + k) > 122){
      var newConv = (( i + k - 1) - (122 - 97))

      conversion[j] = String.fromCharCode(newConv);
    }
    else{
      conversion[j] = String.fromCharCode(i+k);
    }
  })
 console.log(conversion.join(''));
 return conversion.join('');
}

caesarCipher("Hello_World!", 4);
caesarCipher("DNFjxo?b5h*5<LWbgs6?V5{3M].1hG)pv1VWq4(!][DZ3G)riSJ.CmUj9]7Gzl?VyeJ2dIPEW4GYW*scT8(vhu9wCr]q!7eyaoy.",45)
// caesarCipher("!@#$%^&*]", 4);
