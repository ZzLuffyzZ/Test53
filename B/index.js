(function(){

  const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const myQuestions = [{"category":"Sports","type":"multiple","difficulty":"easy",
                            question:"Which team won the 2015-16 English Premier League?",
                            correctAnswer:"Leicester City",answers:["Liverpool","Cheslea","Leicester City","Manchester United"]},
                        {"category":"Sports","type":"multiple","difficulty":"easy",
                        question:"Who won the 2015 Formula 1 World Championship?",
                        correctAnswer:"Lewis Hamilton","answers":["Nico Rosberg","Sebastian Vettel","Lewis Hamilton","Jenson Button"]},
                        {"category":"Sports","type":"multiple","difficulty":"easy",
                        question:"Which team won 2014 FIFA World Cup in Brazil?",
                        correctAnswer:"Germany","answers":["Argentina","Brazil","Germany","Netherlands"]},
                        {"category":"Sports","type":"multiple","difficulty":"easy",
                        question:"This Canadian television sportscaster is known for his &quot;Hockey Night in Canada&quot; role, a commentary show during hockey games.",
                        correctAnswer:"Don Cherry",answers:["Don McKellar","Don Taylor ","Donald Sutherland","Don Cherry"]},
                        {"category":"Sports","type":"multiple","difficulty":"easy",
                        question:"Who won the 2017 Formula One World Drivers&#039; Championship?",
                        correctAnswer:"Lewis Hamilton",answers:["Sebastian Vettel","Lewis Hamilton","Nico Rosberg","Max Verstappen"]}];
  
    function buildQuiz(){
      const output = [];
  
      myQuestions.forEach(
        (currentQuestion, questionNumber) => {
  

          const answers = [];
  
          for(answer in currentQuestion.answers){
  

            answers.push(
              `<label>
                <input type="radio" name="question${questionNumber}" value="${answer}">
                ${answer} :
                ${currentQuestion.answers[answer]}
              </label>`
            );
          }
  
          output.push(
            `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')} </div>`
          );
        }
      );
  
      quizContainer.innerHTML = output.join('');
    }
  
    function showResults(){
  
      const answerContainers = quizContainer.querySelectorAll('.answers');
  
      let numCorrect = 0;
  
      myQuestions.forEach( (myQuestion, questionNumber) => {
  
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || ``).value;
  
        if(userAnswer === myQuestion.correctAnswer){
          numCorrect++;
  
          answerContainers[questionNumber].style.color = 'lightgreen';
        }
        else{
          answerContainers[questionNumber].style.color = 'red';
        }
      });
  
      
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }
  
    
    buildQuiz();
  
    // Event listeners
    submitButton.addEventListener('click', showResults);
})();
