const quizDB = [{
        question: "Q1: What is the maximum number of players allowed on the fielding team at any one time?",
        a: "11",
        b: "12",
        c: "10",
        d: "9",
        ans: "ans1"
    },
    {
        question: "Q2: What is the name of the cricket governing body?",
        a: "ICC",
        b: "BCCI",
        c: "ECB",
        d: "PCB",
        ans: "ans1"
    },
    {
        question: "Q3: How many runs are scored if the ball crosses the boundary without touching the ground?",
        a: "4",
        b: "6",
        c: "1",
        d: "3",
        ans: "ans2"
    },
    {
        question: "Q4: What is the name of the trophy awarded to the winner of the ICC Cricket World Cup?",
        a: "Champions Trophy",
        b: "Ashes",
        c: "Border-Gavaskar Trophy",
        d: "World Cup Trophy",
        ans: "ans4"
    },
    {
        question: "Q5: Which country has won the most ICC Cricket World Cup titles?",
        a: "Australia",
        b: "India",
        c: "West Indies",
        d: "England",
        ans: "ans1"
    },
    {
        question: "Q6: What is the maximum number of overs in a T20 cricket match?",
        a: "20",
        b: "50",
        c: "10",
        d: "25",
        ans: "ans1"
    },
    {
        question: "Q7: What is the name of the Indian Premier League team owned by Shah Rukh Khan?",
        a: "Kolkata Knight Riders",
        b: "Mumbai Indians",
        c: "Royal Challengers Bangalore",
        d: "Chennai Super Kings",
        ans: "ans1"
    },
    {
        question: "Q8: Who is the highest run-scorer in Test cricket?",
        a: "Sachin Tendulkar",
        b: "Ricky Ponting",
        c: "Brian Lara",
        d: "Kumar Sangakkara",
        ans: "ans1"
    },
    {
        question: "Q9: Who has taken the most wickets in ODI cricket?",
        a: "Muttiah Muralitharan",
        b: "Glenn McGrath",
        c: "Wasim Akram",
        d: "Anil Kumble",
        ans: "ans1"
    },
    {
        question: "Q10: In which year was the first T20 World Cup held?",
        a: "2007",
        b: "2008",
        c: "2009",
        d: "2010",
        ans: "ans1"
    },
]
const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore');
let questionCount = 0;
let score = 0;
const loadQuestion = () => {
    const questionList = quizDB[questionCount];

    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}

loadQuestion();
const getCheckAnswer = () => {
    let answer;
    answers.forEach((currAnsElem) => {
        if (currAnsElem.checked) {
            answer = currAnsElem.id;
        }
    })
    return answer;
}

const deSelectAll = () => {
    answers.forEach((currAnsElem) => currAnsElem.checked = false);
}
submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if (checkedAnswer === quizDB[questionCount].ans) {
        score++;
    };
    questionCount++;
    deSelectAll();
    if (questionCount < quizDB.length) {
        loadQuestion();
    } else {
        showScore.innerHTML = `
<h3> You scored ${score}/${quizDB.length} ✌</h3>
<button class="btn" onclick="location.reload()"> Play Again </button>
`;

        showScore.classList.remove('scoreArea');
    }
})