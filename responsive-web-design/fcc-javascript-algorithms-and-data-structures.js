const codeSolutions = {
  solution1: `
    // single line comment
    /* Multi-line
    comment */
    `,
  solution2: `
      var myName;
    `,
  solution3: `
      a = 7;  
    `,
  solution4: `
    // Setup
    var a;
    a = 7;
    var b;
  
    // Only change code below this line
    b = a; 
    `,
  solution5: `
    var a = 9;
    `,
  // ... more code solutions
};

const questionsAndSolutions = [
  {
    id: 1,
    question: "Comment Your JavaScript Code.",
    solution: codeSolutions.solution1,
  },
  {
    id: 2,
    question: "Declare javascript variables.",
    solution: codeSolutions.solution2,
  },
  {
    id: 3,
    question: "Storing Values with the Assignment Operator",
    solution: codeSolutions.solution3,
  },
  {
    id: 4,
    question: "Assigning the Value of One Variable to Another",
    solution: codeSolutions.solution4,
  },
  {
    id: 5,
    question: "Define a variable a with var and initialize it to a value of 9.",
    solution: codeSolutions.solution5,
  },
  // ... more question-answer pairs
];

// Accessing a specific question and its solution
const question = questionsAndSolutions[4];
console.log("Question:", question.question);
console.log("Solution:");
console.log(question.solution);
