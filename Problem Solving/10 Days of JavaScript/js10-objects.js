/*
 * Complete the Rectangle function
 */
function Rectangle(a, b) {
  var rectangle = {
    length: a,
    width: b,
    perimeter: 2*(a+b),
    area: a*b
  }
  return rectangle;
}

Rectangle(4,5)
