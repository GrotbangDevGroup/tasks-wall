import { addElement, addElementWithClass } from './wdgjs.js';

export class Task {
    constructor() {
        this._title = "New Task";
        this._completed = false;
        this._desc;
    }

    get title() {
        return this._title;
    }
    set title(value) {
        this._title = value;
    }
}

export function taskCardTitle(Task) {
    const card_title_container = addElementWithClass("div", 0, 0, "card-title-container");
    const card_title = addElementWithClass("h2", card_title_container, true, "card-title");
    card_title.innerText = Task.title;
    const card_title_input = addElement("input", 0, 0);

    card_title.addEventListener('click', () => {
        editTitle(true);
    });
    card_title_input.addEventListener('focusout', () => {
        editTitle(false);
    });

    function editTitle(text = true)  {
        if (text) {
            const title = card_title.innerText;
            card_title_container.removeChild(card_title);
            card_title_input.value = title;
            card_title_container.appendChild(card_title_input);
        } else {
            const title = card_title_input.value;
            card_title_container.removeChild(card_title_input);
            card_title.innerText = title;
            card_title_container.appendChild(card_title);
            Task.title = title;
        }
    }

    return card_title_container;
}

export function taskCard(Task) {
    const card = addElementWithClass("div", 0, 0, "task-card");
    const card_title = taskCardTitle(Task);
    card.appendChild(card_title);

    return card;
}