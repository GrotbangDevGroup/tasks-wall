import { addElement, addElementWithClass } from './wdgjs.js';
import {Task, taskCard, taskCardTitle} from './lib.js';

const toolbar = document.querySelector("#toolbar");
const tasksWall = document.querySelector("#tasks-wall");

const tasks_array = new Array();

function addToolbarAction(title, action) {
    const toolbarAction = document.createElement("button");
    toolbarAction.classList.add("toolbar-action-button");
    toolbarAction.innerHTML += title;
    toolbarAction.addEventListener('click', action);
    toolbar.appendChild(toolbarAction);
    return toolbarAction;
}

function tasksRender() {
    if (tasksWall.hasChildNodes()) {
        tasksWall.innerHTML = "";
    }
    tasks_array.forEach( e => {
        const task_card = taskCard(e);
        tasksWall.appendChild(task_card);
    });
    console.table(tasks_array);
}

function taskDialog(Task) {
    const dialog = addElementWithClass("dialog", document.documentElement, false, "task-dialog");
    const title = taskCardTitle(Task);
    dialog.appendChild(title);
    const create_button = addElement("button", dialog, true);
    create_button.innerHTML = "Create";

    create_button.addEventListener('click', () => {
        tasks_array.push(Task);
        dialog.close();
        tasksRender();
    });

    dialog.addEventListener('close', (event) => {
        const task_dialog = document.querySelector(".task-dialog");
        if (task_dialog) {
            document.documentElement.removeChild(dialog);
        }
    });

    dialog.showModal();
}

const addActionButton = addToolbarAction("Add", ()=> {
    taskDialog(new Task());
});
