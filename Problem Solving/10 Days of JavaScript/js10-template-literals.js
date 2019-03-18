/*
 * Determine the original side lengths and return an array:
 * - The first element is the length of the shorter side
 * - The second element is the length of the longer side
 *
 * Parameter(s):
 * literals: The tagged template literal's array of strings.
 * expressions: The tagged template literal's array of expression values (i.e., [area, perimeter]).
 */
function sides(literals, ...expressions) {
    var order = [];

    order.push(((expressions[1] + Math.sqrt((Math.pow(expressions[1], 2) - 16 * expressions[0]))) / 4));
    order.push(((expressions[1] - Math.sqrt((Math.pow(expressions[1], 2) - 16 * expressions[0]))) / 4));

    order = order.sort((a,b) => {
      return a-b;
    });
    return order;

}
