const questions = document.querySelectorAll('.question');

questions.forEach((question) => {
  question.addEventListener('click', () => {
    let questionText = question.firstElementChild;
    let answerText = question.nextElementSibling;
    
    if (!questionText.classList.contains('question-active')) {
      // Remove active state from question if the question is selected
      questions.forEach((q) => {
        let qSelected = q.firstElementChild;
        let aSelected = q.nextElementSibling;
      
        if (qSelected.classList.contains('question-active')) {
          qSelected.classList.remove('question-active');
          aSelected.classList.remove('visible');
        }
      });
      questionText.classList.add('question-active');
      answerText.classList.add('visible');
    } else {
      questionText.classList.remove('question-active');
      answerText.classList.remove('visible');
    }  
  });
});