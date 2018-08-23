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
    var isLength = false, hasDigit = false, hasLower = false, hasUpper = false, hasSpecialChar = false;
    var containsDigit = new RegExp('/[0-9]/','g')
    var containsLower = new RegExp('/[^]')
    var containsUpper = new RegExp('/[^]')
    var containsSpecial = new RegExp('/[^]')

}
minimumNumber(1,2)
