// Create a Rectangle Object Challenge
function Rectangle(a, b) {
  let rectangle = {
    length: a,
    width: b,
    perimeter: 2 * (a + b),
    area: a * b,
  };

  return rectangle;
}

// Count Objects Challenge
/*
 * Return a count of the total number of objects 'o' satisfying o.x == o.y.
 *
 * Parameter(s):
 * objects: an array of objects with integer properties 'x' and 'y'
 */
// Way 1 to solve
function getCount0(objects) {
  // This is the forEach way to solve this
  let counter = 0;
  objects.forEach(function (o) {
    if (o.x == o.y) {
      counter += 1;
    }
  });

  return counter;
}

// Way 2 to solve
function getCount1(objects) {
  let counter = 0;
  for (let o in objects) {
    if (objects[o].x == objects[0].y) {
      counter += 1;
    }
  }
  return counter;
}

// Way 3 to solve
function getCount2(objects) {
  let counter = 0;
  for (let i = 0; i < objects.length; i++) {
    let current_object = objects[i];
    if (current_object.x == current_object.y) {
      counter += 1;
    }
  }
  return counter;
}
// Classes Challenge
/*
 * Implement a Polygon class with the following properties:
 * 1. A constructor that takes an array of integer side lengths.
 * 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.
 */

 class Polygon {
    constructor(sides){
        this.s = sides
    }

    perimeter(){
        var sum = 0;
        for (let e of this.s){
            sum+=e
        }
        return sum
    }
 }
