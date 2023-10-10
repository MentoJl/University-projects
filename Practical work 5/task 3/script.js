class Question {
    constructor(question, variants) {
        this.question = question;
        this.answer = eval(question);
        this.variants = variants
        this.result = false
    }

    changeResult(result) {
        this.result = result;
    }
}

function radioChecked() {
    let variants = document.querySelectorAll('input');
    variants.forEach((variant) => {
        variant.addEventListener('click', (event) => {
            variants.forEach((radio) => {
                if(variant.value != radio.value) {
                    radio.checked = false
                }
            }); 
        });
    })
}

function answer(event) {
    if (index < 10 ) {
        let variant = document.querySelector('input:checked');
        if (variant == null) {
            return
        }
        if(variant.value == tasks[index-1].answer) {
            tasks[index].changeResult(true)
        }

        let message = document.getElementById('result');
        message.textContent = `Question ${(index+1).toString()}`;
        let task = document.getElementById('task');
        task.textContent = tasks[index].question;
        let labels = document.querySelectorAll('label');
        for(let i=0; i < labels.length; ++i) {
            labels[i].innerHTML = `<input type="radio" value="${(tasks[index].variants[i]).toString()}">${tasks[index].variants[i]}`;
        }
        radioChecked()
        index++;
    } else {
        let message = document.getElementById('result');
        let result_counter = 0
        tasks.forEach((task) => {
            if(task.result === true) {
                result_counter++
            }
        })
        message.textContent = `Correct answers: ${result_counter}/${tasks.length}`
    }

}

let tasks = [new Question("3*5", [10, 15, 13, 12]), new Question("2*8", [16, 12, 14, 18]), new Question("4*5", [24, 16, 20, 22]),
new Question("6*4", [22, 24, 20, 26]), new Question("7*6", [40, 36, 48, 42]), new Question("7*8", [49, 54, 56, 55]), new Question("8*6", [46, 48, 50, 44]),
new Question("8*5", [40, 35, 45, 30]), new Question("9*7", [63, 61, 66, 62]), new Question("9*8", [70, 68, 72, 71])];

let index = 1;
let nextQues = document.getElementById('next');
radioChecked()

nextQues.addEventListener('click', answer);

let answers = document.querySelectorAll('label');