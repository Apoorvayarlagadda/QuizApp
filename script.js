const startBtn = document.getElementById('st-btn')
const nxtBtn = document.getElementById('nxt-btn')

const quesConEle = document.getElementById('qs-con')
const QuesEle = document.getElementById('qs')
const ansBtnEl = document.getElementById('ans-btns')
const title = document.getElementById('title')
const title1 = document.getElementById('title1')
const score = document.getElementById('score')
let randomQues, curQues, count = 0

// The addEventListener() method attaches an event handler to the specified element.
// When the start button is clicked it starts the function startQuiz()
startBtn.addEventListener('click', startQuiz)

/* () => Arrow functions allow us to write shorter function syntax.
    Instead we can also write:
        nxtBtn.addEventListener('click', function() {
            curQues++
            nextQues()
        })  
*/
nxtBtn.addEventListener('click', () => {
    curQues++
    nextQues()
})

// When the quiz is started the start button is hidden and question and answers are unhidden.

function startQuiz() {
    console.log('started')
    startBtn.classList.add('hide')
    title.classList.add('hide')
    title1.classList.add('hide')
    randomQues = questions.sort(() => Math.random() - 0.5)
    curQues = 0
    count = 0
    quesConEle.classList.remove('hide')
    nextQues()
}

function nextQues() {
    resetState();
    showQ(randomQues[curQues])
}

function showQ(questions) {
    QuesEle.innerText = questions.question
    questions.answers.forEach(ans => {
        const btn = document.createElement('btn')
        btn.innerText = ans.text;
        btn.classList.add('btn')
        if (ans.correct) {
            btn.dataset.correct = ans.correct
        }
        btn.addEventListener('click', chooseAnswer)
        ansBtnEl.appendChild(btn)
    })
}

function resetState() {
    clearStatusClass(document.body)
    // score = 0
    nxtBtn.classList.add('hide')
    score.classList.add('hide')
    while (ansBtnEl.firstChild) {
        ansBtnEl.removeChild
            (ansBtnEl.firstChild)
    }
}

function chooseAnswer(e) {
    const selectbtn = e.target
    const correct = selectbtn.dataset.correct
    setStatusClass(document.body, correct)
    getscore(correct)
    Array.from(ansBtnEl.children).forEach(btn => {
        setStatusClass(btn, btn.dataset.correct)
    })
    if (randomQues.length > curQues + 1)
        nxtBtn.classList.remove('hide')
    else {
        clearStatusClass(document.body)
        score.classList.remove('hide')
        score.innerText = "SCORE : " + count + "/" + randomQues.length
        startBtn.innerText = "RESTART"
        count = 0
        quesConEle.classList.add('hide')
        startBtn.classList.remove('hide')
    }
}
function getscore(c) {
    if (c) count++;
}
function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
        // score++
        // console.log(score)
    }
    else
        element.classList.add('wrong')
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: 'HTML stands for?',
        answers: [
            { text: 'HyperText Markup Language', correct: true },
            { text: 'HighText Machine Language', correct: false },
            { text: 'HyperText and links Markup Language', correct: false },
            { text: 'None of the above.', correct: false }
        ]
    },
    {
        question: 'The correct sequence of HTML tags for starting a webpage is?',
        answers: [
            { text: 'Head, Title, HTML, body', correct: false },
            { text: 'HTML, Body, Title, Head', correct: false },
            { text: 'HTML, Head, Title, Body', correct: true },
            { text: 'HTML, Title, Head, Body', correct: false }
        ]
    },
    {
        question: 'What are the types of unordered or bulleted list in HTML?',
        answers: [
            { text: 'disc, square, triangle', correct: false },
            { text: 'disc, circle, square', correct: true },
            { text: 'polygon, triangle, circle', correct: false },
            { text: 'All of the above', correct: false }
        ]
    },
    {
        question: 'Which if the following CSS function allows us to perform calculations?',
        answers: [
            { text: 'calc() function', correct: true },
            { text: 'calculator() function', correct: false },
            { text: 'cal() function', correct: false },
            { text: 'calculate() function', correct: false }
        ]
    },
    {
        question: 'The CSS property used to specify the transparency of an element is?',
        answers: [
            { text: 'hover', correct: false },
            { text: 'opacity', correct: true },
            { text: 'transparent', correct: false },
            { text: 'clearfix', correct: false }
        ]
    },
    {
        question: 'Which type of JavaScript language is?',
        answers: [
            { text: 'Object-Oriented', correct: false },
            { text: 'Assembly-language', correct: false },
            { text: 'Object-Based', correct: true },
            { text: 'High-level', correct: false }
        ]
    },
    {
        question: 'Which one of the following is the correct way for calling the JavaScript code?',
        answers: [
            { text: 'Preprocessor', correct: false },
            { text: 'Function/Method', correct: true },
            { text: 'RMI', correct: false },
            { text: 'Triggering Event', correct: false }
        ]
    },
    {
        question: 'Which HTML element is used to put the JavaScript code?',
        answers: [
            { text: '<javascript>', correct: false },
            { text: '<js>', correct: false },
            { text: '<scripting>', correct: false },
            { text: '<script>', correct: true }
        ]
    },
    {
        question: 'In HTML5, which of the following tag is used to initialize the document type?',
        answers: [
            { text: '<Doctype HTML>', correct: false },
            { text: '<\Doctype html>', correct: false },
            { text: '<!DOCTYPE html>', correct: true },
            { text: '<Doctype>', correct: false }
        ]
    },
    {
        question: 'CSS stands for?',
        answers: [
            { text: 'Color and style sheets', correct: false },
            { text: 'Cascading style sheets', correct: true },
            { text: 'Cascade style sheets', correct: false },
            { text: 'None of the above', correct: false }
        ]
    }

]