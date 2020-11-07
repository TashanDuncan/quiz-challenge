// 1. Create a multidimensional array to hold quiz questions and answers
const questions = [['What year was Tashan born', '1994'], ['what computer game does Tashan play the most currently', 'overwatch'], ['what programming language is this quiz written in', 'javascript']]

// 2. Store the number of questions answered correctly
let correct = 0


/* 
  3. Use a loop to cycle through each question
      - Present each question to the user
      - Compare the user's response to answer in the array
      - If the response matches the answer, the number of correctly
        answered questions increments by 1
*/
for (let i = 0; i < questions.length; i++) {
  let answer = prompt(`${questions[i][0]}`);
  if (answer.toLowerCase() === questions[i][1]){
    correct++
  } else {
    alert('Incorrect')
  }
}

// 4. Display the number of correct answers to the user
document.querySelector('main').innerHTML = `<h1>Correct Answers = ${correct} of out ${questions.length}</h1>`