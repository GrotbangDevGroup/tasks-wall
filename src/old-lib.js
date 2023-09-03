export class TaskTitle {;
    constructor(className, title) {
        this._element = addElementWithClass("div", 0, 0, "card-title-container");
        this._titleElement = addElementWithClass("h2", this._element, true, className);
        this._titleElement.innerText = title;
        this._inputElement = addElement("input", 0, 0);

        this._titleElement.addEventListener('click', () => {
            this.editTitle();
        });
        this._inputElement.addEventListener('focusout', () => {
            this.editTitle(false);
        });
        this._inputElement.addEventListener('keydown', (e) => {
            if (e.key === "Enter" && !e.repeat) {
                this.editTitle(false);
            }
        });
    }

    get element() {
        return this._element;
    }

    editTitle(text=true) {
        if (text) {
            const title = this._titleElement.innerText;
            this._element.removeChild(this._titleElement);
            this._inputElement.value = title;
            this._element.appendChild(this._inputElement);
            console.log("Work!");
        } else {
            const title = this._inputElement.value;
            this._element.removeChild(this._inputElement);
            this._titleElement.innerText = title;
            this._element.appendChild(this._titleElement);
        }
    }
}

export class Task {
    constructor() {
        this._title = "new Task";
        this._element = addElementWithClass("div", 0, 0, "task-card");
        this._titleElement = new TaskTitle("task-title", this._title);
        console.error("pre append");
        this._element.appendChild(this._titleElement.element);
        console.error("post append");
    }

    get title() {
        return this._title;
    }
    set title(value) {
        this._title = value;
    }
    get element() {
        return this._element;
    }
    get titleElement() {
        return this._titleElement.element;
    }
    
}