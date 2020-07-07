// Conditional Statements - If/Else Challenge:
function getGrade(score) {
  let grade;
  // Write your code here
  if (score > 25 && score <= 30) {
    grade = "A";
  } else if (score > 20 && score <= 25) {
    grade = "B";
  } else if (score > 15 && score <= 20) {
    grade = "C";
  } else if (score > 10 && score <= 15) {
    grade = "D";
  } else if (score > 5 && score <= 10) {
    grade = "E";
  } else {
    grade = "F";
  }
  return grade;
}

// Conditional Statements - Switch Challenge:
function getLetter(s) {
  let letter;
  // Write your code here
  let char = s.charAt(0);
  switch (char) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
      letter = "A";
      break;
    case "b":
    case "c":
    case "d":
    case "f":
    case "g":
      letter = "B";
      break;
    case "h":
    case "j":
    case "k":
    case "l":
    case "m":
      letter = "C";
      break;
    default:
      letter = "D";
  }

  return letter;
}

// Loops Challenge:
/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
  for (var i = 0; i < s.length; i++) {
    let current_i = s[i];
    if ("aeiou".includes(current_i)) {
      console.log(current_i);
    }
  }

  for (var x = 0; x < s.length; x++) {
    let current_x = s[x];
    if (!"aeiou".includes(current_x)) {
      console.log(current_x);
    }
  }
}
