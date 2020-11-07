
let questions = [
  {
    id: 1,
    question: "Pourquoi CodeLoccol ?",
    answer: "Pour apprendre a developper",
    options: [
      "Pour venir manger",
      "Pour venir profiter de la connexion",
      "Pour apprendre a developper",
      "Pour optenir un Diplome"
    ]
  },
  {
    id: 2,
    question: "Pourquoi la programation?",
    answer: "Pour developper mes idees Numeriquemment",
    options: [
      "pour apprendre a coder",
      "Pour developper mes idees Numeriquemment",
      "Pour mieux manupiler le clavier",
      "Pour gagner de l'argent"
    ]
  },
  {
    id: 3,
    question: "Quel est le langage basique de Codeloccol ?",
    answer: "JavaScript",
    options: [
      "Python",
      "java",
      "Flutter",
      "JavaScript"
    ]
  },
  {
    id: 4,
    question: "Quel est l'objectif de CodeLoccol ?",
    answer: "De nous rendre les developeurs les plus rechercher",
    options: [
      "Nous amenés a resoudre des problemes",
      "De nous rendre les developeurs les plus rechercher",
      "Nous amenés pour profiter de la connexion",
      "Pour connaitre la valeur de technologie"
    ]
  },
  {
    id: 5,
    question: "Quel genre de developpeur vous voulez etre?",
    answer: "Developpeur Full-stack",
    options: [
      "Developpeur front-end",
      "Developpeur Back-end",
      "Developpeur IU",
      "Developpeur Full-stack"
    ]
  },
  {
    id: 6,
    question: "Comment tu veux gagner de l'argent entant que Developpeur?",
    answer: "Freelancer",
    options: [
      "Freelancer",
      "Salarier",
      "Chef d'entreprise",
      "Formateur"
    ]
  }
];

let question_count = 0;
let points = 0;

window.onload = function() {
  show(question_count);

};

function next() {

   
  // if the question is last then redirect to final page
  if (question_count == questions.length - 1) {
    sessionStorage.setItem("time", time);
    clearInterval(mytime);
    location.href = "end.html";
  }
  console.log(question_count);

  let user_answer = document.querySelector("li.option.active").innerHTML;
  // check if the answer is right or wrong
  if (user_answer == questions[question_count].answer) {
    points += 10;
    sessionStorage.setItem("points", points);
  }
  console.log(points);

  question_count++;
  show(question_count);
}

function show(count) {
  let question = document.getElementById("questions");
  let [first, second, third, fourth] = questions[count].options;

  question.innerHTML = `
  <h2>Q${count + 1}. ${questions[count].question}</h2>
   <ul class="option_group">
  <li class="option">${first}</li>
  <li class="option">${second}</li>
  <li class="option">${third}</li>
  <li class="option">${fourth}</li>
</ul> 
  `;
  toggleActive();
}

function toggleActive() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function() {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}
