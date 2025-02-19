import React from 'react'
import Quizapp from './component/quiz'
function App() {
  
  return (
    <>
      <Quizapp
        title = "Static Quiz App"
        projname = "Project name: quiz-app"
        quiz1 = "What is the capital of France?"
        ans1 = "Berlin"
        ans2 = "Madrid"
        ans3 = "Paris"
        ans4 = "Lisbon"

        quiz2 = "Who developed ReactJS?"
        ans5 = "Google"
        ans6 = "Facebook"
        ans7 = "Microsoft"
        ans8 = "Apple"

        quiz3 = "Which programming language is used for React?"
        ans9 = "Python"
        ans10 = "Java"
        ans11 = "Javascript"
        ans12 = "C++"
      />
    </>
  )
}

export default App