/*
    Є список завдань
    const tasks = ['Завдання 1'];

    Написати функції:
        - додавання завдання вкінець;
        - видалення завдання по назві;
        - перенесення завдання на початок списку по назві;

    Завжди змінюємо початковий масив
*/

const tasksList = ['Завдання 1'];
console.log(`Початковий масив:`, tasksList);

function addTask(task) {
    tasksList.push(task);
}

function deleteTask(task) {
    const indexOfTask = tasksList.indexOf(task);

    if(indexOfTask !== -1) {
        tasksList.splice(indexOfTask, 1);
        return;
    }

    console.log('Завдання не знайдено!')
}

function putTaskOnStart(task) {
    const indexOfTask = tasksList.indexOf(task);
    if(indexOfTask !== -1) {
        const elemForReplacing = tasksList.splice(indexOfTask, 1);
        tasksList.unshift(elemForReplacing[0]);
        return;
    }

    console.log('Завдання не знайдено!')
}

addTask('Завдання 2');
addTask('Завдання 3');
addTask('Завдання 4');
console.log(tasksList);

deleteTask('Завдання 2');
console.log(tasksList);

putTaskOnStart('Завдання 4');
console.log(tasksList);
