// Complete the minimumNumber function below.
/** Constraints
  Must be length of 6
  Must Contain at least 1 digit
  Must one lowercase English Char
  Must contain one Uppercase English Char
  It contains at least one special character.
*/

function minimumNumber(n, password) {
    // Return the minimum number of characters to make the password strong
    var count = 0;
    var containsDigit = /[0-9]/g.test(password);
    var containsLower = /[a-z]/g.test(password);
    var containsUpper = /[A-Z]/g.test(password);
    var containsSpecial = /[-!@#$%^&*()+]/g.test(password);

    if(!containsDigit) count++;
    if(!containsLower) count++;
    if(!containsUpper) count++;
    if(!containsSpecial) count++;
    if((count+password.length)<6){
      count = count + 6 - (count+password.length);
    }
    console.log(count);
    return count;
}

minimumNumber(7,"AUzs-nV")
