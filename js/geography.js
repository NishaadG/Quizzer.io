function checkAnswers() {
  const questions = document.querySelectorAll('.question');
  let totalQuestions = questions.length;
  let correctAnswers = 0;

  questions.forEach(question => {
    const correctIndex = parseInt(question.getAttribute('data-correct'));
    const options = question.querySelectorAll('.option');
    let selected = null;

    options.forEach(option => {
      if (option.classList.contains('selected')) {
        selected = parseInt(option.getAttribute('data-index'));
      }
    });

    options.forEach(option => {
      const index = parseInt(option.getAttribute('data-index'));
      if (index === correctIndex) {
        option.classList.add('correct');
      } else if (index === selected) {
        option.classList.add('wrong');
      }
    });

    if (selected === correctIndex) {
      correctAnswers++;
    }
  });

  const scorePercentage = (correctAnswers / totalQuestions) * 100;
  document.getElementById('score').innerHTML = `Your Score: ${scorePercentage.toFixed(2)}%`;
}

document.querySelectorAll('.option').forEach(option => {
  option.addEventListener('click', function() {
    const parent = this.parentElement;
    parent.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
    this.classList.add('selected');
  });
});
