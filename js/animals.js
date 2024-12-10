// Function to check quiz answers
function checkAnswers() {
    const questions = document.querySelectorAll('.question');
    let correctAnswers = 0;
  
    questions.forEach(question => {
      const correctIndex = parseInt(question.getAttribute('data-correct'));
      const options = question.querySelectorAll('.option');
      let selectedOption = null;
  
      options.forEach(option => {
        if (option.classList.contains('selected')) {
          selectedOption = parseInt(option.getAttribute('data-index'));
        }
      });
  
      if (selectedOption === correctIndex) {
        correctAnswers++;
      }
  
      options.forEach(option => {
        if (parseInt(option.getAttribute('data-index')) === correctIndex) {
          option.style.backgroundColor = '#4CAF50'; // Correct answer color
        } else {
          option.style.backgroundColor = '#E63946'; // Incorrect answer color
        }
      });
    });
  
    document.getElementById('score').innerText = `Your Score: ${correctAnswers} / ${questions.length}`;
  }
  
  // Add click event listeners to the options
  document.querySelectorAll('.option').forEach(option => {
    option.addEventListener('click', function() {
      this.parentElement.querySelectorAll('.option').forEach(option => option.classList.remove('selected'));
      this.classList.add('selected');
    });
  });
  
  // Add click event listener to the submit button
  document.getElementById('submit-btn').addEventListener('click', checkAnswers);
  