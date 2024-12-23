 // Quiz Questions
    const quiz = [
      {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: 3,
      },
      {
        question: "Which programming language is known as the language of the web?",
        options: ["Python", "JavaScript", "C++", "Java"],
        answer: 2,
      },
      {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: 2,
      },
    ];

    let currentQuestionIndex = 0;
    let score = 0;

    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const submitButton = document.getElementById("submit-btn");
    const scoreElement = document.getElementById("score");
    const restartButton = document.getElementById("restart-btn");
    const questionSection = document.getElementById("question-section");
    const resultSection = document.getElementById("result-section");

    // Load a question
    function loadQuestion() {
      const currentQuestion = quiz[currentQuestionIndex];
      questionElement.textContent = currentQuestion.question;
      optionsElement.innerHTML = "";

      currentQuestion.options.forEach((option, index) => {
        const li = document.createElement("li");
        const radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "option";
        radio.value = index + 1;
        li.appendChild(radio);
        li.appendChild(document.createTextNode(option));
        optionsElement.appendChild(li);
      });
    }

    // Handle answer submission
    submitButton.addEventListener("click", () => {
      const selectedOption = document.querySelector('input[name="option"]:checked');
      if (!selectedOption) {
        alert("Please select an option!");
        return;
      }

      const answer = parseInt(selectedOption.value);
      if (answer === quiz[currentQuestionIndex].answer) {
        score++;
      }

      currentQuestionIndex++;
      if (currentQuestionIndex < quiz.length) {
        loadQuestion();
      } else {
        displayResults();
      }
    });

    // Display results
    function displayResults() {
      questionSection.style.display = "none";
      resultSection.style.display = "block";
      scoreElement.textContent = `Your final score is: ${score}/${quiz.length}`;
    }

    // Restart the quiz
    restartButton.addEventListener("click", () => {
      currentQuestionIndex = 0;
      score = 0;
      questionSection.style.display = "block";
      resultSection.style.display = "none";
      loadQuestion();
    });

    // Initialize the quiz
    loadQuestion();
