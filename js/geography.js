
function checkAnswers() {
    var questions = document.querySelectorAll('.question');
    var totalQuestions = questions.length;
    var correctAnswers = 0;
  
    questions.forEach(function(question) {
      var correctIndex = parseInt(question.getAttribute('data-correct'));
      var options = question.querySelectorAll('.option');
      var selected = null;
      options.forEach(function(option) {
        if (option.classList.contains('selected')) {
          selected = parseInt(option.getAttribute('data-index'));
        }
      });
      if (selected === correctIndex) {
        correctAnswers++;
      }
      options.forEach(function(option) {
        var index = parseInt(option.getAttribute('data-index'));
        if (index === correctIndex) {
          option.classList.add('correct');
        } else if (index === selected) {
          option.classList.add('wrong');
        } else {
          option.style.display = 'none';
        }
      });
    });
  
    var score = (correctAnswers / totalQuestions) * 100;
    document.getElementById('score').innerHTML = "Your Score: " + score.toFixed(2) + "%";
  }
  document.querySelectorAll('.option').forEach(function(option) {
    option.addEventListener('click', function() {
      var selectedOption = this;
      var options = this.parentElement.querySelectorAll('.option');
      options.forEach(function(option) {
        option.classList.remove('selected');
      });
      selectedOption.classList.add('selected');
    });
  });