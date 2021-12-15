const quizData = [{
    number: 1,
    question: 'Aproximadamente, ¿cuántos huesos tiene el cuerpo humano?',
    a: "40",
    b: "390",
    c: "208",
    correct: "c"
}, {
    number: 2,
    question: '¿En la Amazonía qué grupos indígenas se hallan?',
    a: "Huaorani",
    b: "Los Tsáchilas",
    c: "Los Saraguros",
    correct: "a"
}, {
    number: 3,
    question: 'El parque nacional Yasuní, en qué provincia está ubicado?',
    a: "Morona Santiago",
    b: "Sucumbíos",
    c: "Orellana",
    correct: "c"
}, {
    number: 4,
    question: '¿En qué provincia se desarrolló la cultura Tolita?',
    a: "Manabí",
    b: "Esmeraldas",
    c: "Guayas",
    correct: "b"
}, {
    number: 5,
    question: '¿Cuál es la capital de la Provincia de Santo Domingo de los Tsáchilas?',
    a: "Guayaquil",
    b: "Santo Domingo",
    c: "Bahia",
    correct: "b"
}]

const correct = document.querySelector(".correct");
const incorrect = document.querySelector(".incorrect");
const correctr = document.querySelector(".correct-r");
const incorrectr = document.querySelector(".incorrect-r");
const cronometro = document.querySelector(".cronometro");
const number__question = document.querySelector(".number__question");
const question__copy = document.querySelector(".question__copy");
const a_nswer = document.querySelector(".a_nswer");
const b_nswer = document.querySelector(".b_nswer");
const c_nswer = document.querySelector(".c_nswer");
const answers = document.querySelectorAll(".x__question");
const btn__question = document.querySelector(".btn__question");

let cr = 30;
let n = 0;
let corre = 0;
let incorre = 0;

seleccion();

function seleccion() {
    let answ = undefined;
    answers.forEach((answersEl) => {
        if (answersEl.checked) {
            answ = answersEl.id;
        }
    });

    return answ;
}


function crono() {
    let cronom = setInterval(function() {
        cronometro.innerHTML = formatTime(cr--);
        if (cr < 0) { clearInterval(cronom) };
    }, 1000);

}

function formatTime(time) {
    return time < 10 ? (`00:0${time}`) : (`00:${time}`);
}

function nu__question() {
    let numQuesti = 5 - quizData[n].number;

    number__question.innerHTML = (`Question ${quizData[n].number} (${numQuesti} reamining)`);
    question__copy.innerHTML = (`${quizData[n].question}`);
    a_nswer.innerHTML = (`${quizData[n].a} `);
    b_nswer.innerHTML = (`${quizData[n].b} `);
    c_nswer.innerHTML = (`${quizData[n].c} `);
}

crono();
nu__question();

btn__question.addEventListener("click", () => {
    cr = 30;
    n++;
    const answer = seleccion();
    if (answer === quizData[n - 1].correct) {
        corre++;
        correct.innerHTML = (`&#10003; ${corre} correct`);
    } else {
        incorre++;
        incorrect.innerHTML = (`&#10005; ${incorre} wrong`);
    }

    if (n !== 5) {
        nu__question();
    } else {
        const resultados = document.querySelector(".resultados");
        correctr.innerHTML = (`&#10003; ${corre} correct`);
        incorrectr.innerHTML = (`&#10005; ${incorre} wrong`);
        resultados.style.display = "flex";
        resultados.addEventListener("click", () => {
            window.location.reload();
        });
    }

});