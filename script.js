
const questions = [
  {
    question: "Qual è il pianeta più vicino al Sole?",
    answers: ["Venere", "Terra", "Mercurio", "Marte"],
    correct: 2
  },
  {
    question: "Quanto fa 7 x 6?",
    answers: ["42", "36", "48", "56"],
    correct: 0
  },
  {
    question: "Chi ha scritto 'La Divina Commedia'?",
    answers: ["Petrarca", "Boccaccio", "Dante Alighieri", "Manzoni"],
    correct: 2
  }
];

let currentQuestion = 0;
let score = 0;

function showQuestion() {
  const questionEl = document.getElementById("question");
  const answersEl = document.getElementById("answers");
  const nextBtn = document.getElementById("next-btn");

  questionEl.textContent = questions[currentQuestion].question;
  answersEl.innerHTML = "";
  nextBtn.style.display = "none";

  questions[currentQuestion].answers.forEach((answer, index) => {
    const btn = document.createElement("button");
    btn.textContent = answer;
    btn.onclick = () => checkAnswer(index);
    answersEl.appendChild(btn);
  });
}

function checkAnswer(index) {
  const correctIndex = questions[currentQuestion].correct;
  const allButtons = document.querySelectorAll("#answers button");

  allButtons.forEach((btn, i) => {
    btn.disabled = true;
    if (i === correctIndex) {
      btn.style.backgroundColor = "lightgreen";
    } else if (i === index) {
      btn.style.backgroundColor = "salmon";
    }
  });

  if (index === correctIndex) score++;

  document.getElementById("next-btn").style.display = "inline-block";
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

function showScore() {
  document.getElementById("question-container").style.display = "none";
  document.getElementById("next-btn").style.display = "none";
  document.getElementById("score").textContent = `Hai totalizzato ${score} su ${questions.length} punti!`;
}

window.onload = showQuestion;

