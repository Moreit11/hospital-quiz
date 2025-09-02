const quizData = [
  {
    question: "What planet do we live on?",
    choices: ["Mars", "Earth", "Jupiter", "Venus"],
    correct_answer: "Earth"
  },
  {
    question: "Which animal is known as the King of the Jungle?",
    choices: ["Elephant", "Tiger", "Lion", "Giraffe"],
    correct_answer: "Lion"
  },
  {
    question: "What is the capital of France?",
    choices: ["Berlin", "Madrid", "Paris", "Rome"],
    correct_answer: "Paris"
  },
  {
    question: "How many legs does a spider have?",
    choices: ["6", "8", "10", "12"],
    correct_answer: "8"
  },
  {
    question: "Which color do you get when you mix red and blue?",
    choices: ["Green", "Purple", "Orange", "Brown"],
    correct_answer: "Purple"
  }
];

const form = document.getElementById("quiz");

// Create fieldsets for each question
quizData.forEach((item, index) => {
  const fieldset = document.createElement("fieldset");
  fieldset.setAttribute("aria-labelledby", `question-${index}`);

  const legend = document.createElement("legend");
  legend.id = `question-${index}`;
  legend.textContent = item.question;
  fieldset.appendChild(legend);

  item.choices.forEach((choice, choiceIndex) => {
    const choiceId = `q${index}-choice${choiceIndex}`;

    const label = document.createElement("label");
    label.setAttribute("for", choiceId);
    label.textContent = choice;

    const input = document.createElement("input");
    input.type = "radio";
    input.name = `question-${index}`;
    input.id = choiceId;
    input.value = choice;

    label.prepend(input);
    fieldset.appendChild(label);
    fieldset.appendChild(document.createElement("br"));
  });

  form.appendChild(fieldset);
});

// Append submit button
const submitBtn = document.createElement("input");
submitBtn.type = "submit";
submitBtn.value = "Submit Quiz";
form.appendChild(submitBtn);

// Handle scoring
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent page reload

  let score = 0;

  quizData.forEach((item, index) => {
    const selected = form.querySelector(`input[name="question-${index}"]:checked`);
    if (selected && selected.value === item.correct_answer) {
      score++;
    }
  });

  // Display result
  alert(`You scored ${score} out of ${quizData.length}!`);
});
