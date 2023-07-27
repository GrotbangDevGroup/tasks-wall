const toolbar = document.querySelector("#toolbar");
const tasksWall = document.querySelector("#tasks-wall");

function AddToolbarAction(title, action) {
    const toolbarAction = document.createElement("button");
    toolbarAction.classList.add("toolbar-action-button");
    toolbarAction.innerHTML += title;
    toolbarAction.addEventListener('click', action);
    toolbar.appendChild(toolbarAction);
    return toolbarAction;
}

class Task {
    title = "New Task";
    element;
    titleElement;
    titleInputElement;

    constructor() {
        const taskElement = document.createElement("div");
        const taskTitle = document.createElement("h2");
        taskTitle.classList.add("task-title");
        taskTitle.innerHTML += this.title;
        const taskTitleInput = document.createElement("input");
        taskElement.appendChild(taskTitle);

        taskTitle.addEventListener('click', () => {
            this.changeTaskTitle();
        });
        
        this.element = taskElement;
        this.titleElement = taskTitle;
        this.titleInputElement = taskTitleInput;
    }

    changeTaskTitle = () => {
        const title = this.titleElement.innerText;
        this.element.removeChild(this.titleElement);
        this.element.appendChild(this.titleInputElement);
    }
    
}

tasksWall.appendChild(new Task().element);
tasksWall.appendChild(new Task().element);
tasksWall.appendChild(new Task().element);


const actionAdd = () => {

}

const addActionButton = AddToolbarAction("Add", ()=>{hello()});
