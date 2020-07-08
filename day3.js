// Arrays Challenge:
function getSecondLargest(nums) {
  // Complete the function
  let largest_val = nums[0];
  let second_largest;

  for (var i = 0; i < nums.length; i++) {
    let current_num = nums[i];
    if (current_num > largest_val) {
      second_largest = largest_val;
      largest_val = current_num;
    } else if (current_num < largest_val && current_num > second_largest) {
      second_largest = current_num;
    }
  }
  return second_largest;
}

// Try, Catch, and Finally Challenge:
function reverseString(s) {
  try {
    s = s.split("").reverse().join("");
  } catch (error) {
    console.log(error.message);
  } finally {
    console.log(s);
  }
}

// Throw Challenge:
function isPositive(a) {
  if (a > 0) {
    return "YES";
  } else if (a == 0) {
    throw new Error("Zero Error");
  } else {
    throw new Error("Negative Error");
  }
}
