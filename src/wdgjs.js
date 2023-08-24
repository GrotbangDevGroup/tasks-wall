export function addElement(element, append, child = true) {
    const _element = document.createElement(element);
    if (append !=0) {
        child ? append.appendChild(_element) : append.append(_element);
    }
    return _element;
}

export function addElementWithClass(element, append, child = true, className) {
    const _element = addElement(element, append, child);
    _element.className = className;
    return _element;
}