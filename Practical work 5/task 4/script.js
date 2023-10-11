class Question {
    constructor(question) {
        this.question = question;
        this.answer = eval(question);
        this.result = false
    }

    changeResult(result) {
        this.result = result;
    }
}

let fillNewTask = function () {
    let task = document.getElementById('task')
    let input = document.querySelector("input")
    input.value = ""
    task.textContent = tasks[index].question + " ="
    index++
}

let index = 0;
let tasks = [new Question("3*5"), new Question("2*8"), new Question("4*5"),
new Question("6*4"), new Question("7*6"), new Question("7*8"), new Question("8*6"),
new Question("8*5"), new Question("9*7"), new Question("9*8")];

fillNewTask()

let next_button = document.getElementById("next")
next_button.addEventListener('click', (event) => {
    let result = document.getElementById("result")
    if (index < 10) {
        let input = document.querySelector("input")
        if (eval(tasks[index-1].question).toString() === input.value) {
            tasks[index-1].changeResult(true)
        }
        fillNewTask()
        result.textContent = `Question ${index}`
    }
    else {
        let counter = 0
        tasks.forEach((task) => {
            if(task.result) {
                counter++
            }
        })
        result.textContent = `Correct questions: ${counter}.`
    }
})

let check_button = document.getElementById("check-button")
check_button.addEventListener('click', (event) => {
    let input = document.querySelector("input")
    let check_list = document.getElementById("check-list")
    if (eval(tasks[index-1].question).toString() === input.value) {
        check_list.textContent = `Congrats, you're right it's "${input.value}"`
    } else {
        check_list.textContent = `Unfortunately that's not "${input.value}"`
    }
})
