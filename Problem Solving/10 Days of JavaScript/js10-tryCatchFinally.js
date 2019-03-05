/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
    let reverse;
    try{
      if(typeof(s) == "number" ) throw "s.split is not a function"
      else reverse = s.split("").reverse().join("");

      console.log(reverse);
    }
    catch(err){
      console.log(err);
      console.log(s);
    }
  }
reverseString(3252)
