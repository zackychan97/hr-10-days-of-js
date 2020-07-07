// Arithmetic Operators Challenge:
/**
 *   Calculate the area of a rectangle.
 *
 *   length: The length of the rectangle.
 *   width: The width of the rectangle.
 *
 *	Return a number denoting the rectangle's area.
 **/
function getArea(length, width) {
  let area;
  // Write your code here
  area = length * width;
  return area;
}

/**
 *   Calculate the perimeter of a rectangle.
 *
 *	length: The length of the rectangle.
 *   width: The width of the rectangle.
 *
 *	Return a number denoting the perimeter of a rectangle.
 **/
function getPerimeter(length, width) {
  let perimeter;
  // Write your code here
  perimeter = length * 2 + width * 2;
  return perimeter;
}

// Functions Challenge:
/*
 * Create the function factorial here
 */

function factorial(n) {
  // if number is < 0 reject it
  if (n < 0) {
    return -1;
    //  else if number == 0 return 1, the factorial of 0
  } else if (n == 0) {
    return 1;
    //  else call the recursive procedure again.
  } else {
    return n * factorial(n - 1);
  }
}

// Let and Const Challenge:
function main() {
  // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
  let r = readLine();
  const PI = Math.PI;
  // Print the area of the circle:
  console.log(PI * Math.pow(r, 2));
  // Print the perimeter of the circle:
  console.log(2 * PI * r);
}
