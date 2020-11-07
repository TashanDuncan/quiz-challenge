// 1. Create a multidimensional array to hold quiz questions and answers
const questions = [
    ['What year was Tashan born', '1994'], 
    ['what computer game does Tashan play the most currently', 'overwatch'], 
    ['what programming language is this quiz written in', 'javascript']
  ]

// 2. Store the number of questions answered correctly
let correct = 0

// Set arrays for correct and incorrect questions that the user has answered
const rightQuestions = []
const wrongQuestions = []
/* 
  3. Use a loop to cycle through each question
      - Present each question to the user
      - Compare the user's response to answer in the array
      - If the response matches the answer, the number of correctly
        answered questions increments by 1
*/
for (let i = 0; i < questions.length; i++) {
  const question = questions[i][0];
  const answer = questions[i][1];
  const userAnswer = prompt(question);
  if (userAnswer.toLowerCase() === answer){
    rightQuestions.push(question)
    correct++
  } else {
    alert('Incorrect')
    wrongQuestions.push(question)
  }
}

// 4. Display the number of correct answers to the user

const result = `<h1>Correct Answers = ${correct} of out ${questions.length}</h1>`


document.querySelector('main').innerHTML = `${result}` + `<h2>You got these questions right:</h2>`