// Function Declaration
function greet(name) {
  return `Hello, ${name}!`;
}

// Function Expression
const square = function(number) {
  return number * number;
};

// Arrow Function
const add = (a, b) => a + b;

// Function with Default Parameters
function multiply(a, b = 1) {
  return a * b;
}

// Function with Rest Parameters
function sum(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}

// Function with Return Statement
function checkEven(number) {
  if (number % 2 === 0) {
    return 'Even';
  }
  return 'Odd';
}

// Basic if-else Statement
function checkAge(age) {
  if (age >= 18) {
    return 'Adult';
  } else {
    return 'Minor';
  }
}

// if-else if-else Statement
function getGrade(score) {
  if (score >= 90) {
    return 'A';
  } else if (score >= 80) {
    return 'B';
  } else if (score >= 70) {
    return 'C';
  } else if (score >= 60) {
    return 'D';
  } else {
    return 'F';
  }
}

// Ternary Operator
const canVote = (age) => age >= 18 ? 'Can vote' : 'Cannot vote';

// Switch Statement
function getDayName(dayNumber) {
  switch(dayNumber) {
    case 0:
      return 'Sunday';
    case 1:
      return 'Monday';
    case 2:
      return 'Tuesday';
    case 3:
      return 'Wednesday';
    case 4:
      return 'Thursday';
    case 5:
      return 'Friday';
    case 6:
      return 'Saturday';
    default:
      return 'Invalid day';
  }
}

