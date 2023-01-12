export const getCaretIndex = (element) => {
    let position = 0;
    const isSupported = typeof window.getSelection !== "undefined";
    if (isSupported) {
        const selection = window.getSelection();
        if (selection.rangeCount !== 0) {
            const range = window.getSelection().getRangeAt(0);
            const preCaretRange = range.cloneRange();
            preCaretRange.selectNodeContents(element);
            preCaretRange.setEnd(range.endContainer, range.endOffset);
            position = preCaretRange.toString().length;
        }
    }
    return position;
}

export const getTextLength = (el) => {
    return el.textContent.length;
};



export const getWordsFromString = (str, n) => {
    return str.slice(0, n).join(" ");
};

export const formatText = (text) => {
    // Remove line breaks
    let formattedText = text.replace(/(\r\n|\n|\r)/gm, "");
    return formattedText;
};

/* export const moveCursorToPosition = (el, position) => {
    console.log(el.childNodes)
    console.log(`total length ${getTextLength(el.firstChild)}`)
    console.log(`moving cursor to ${position}`)

    var range = document.createRange();
    range.selectNodeContents(el);

    // range.setStart(el, position);
    range.collapse();

    var sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
} */

export const moveCursorToEnd = (el) => {
    var range = document.createRange();
    range.selectNodeContents(el);
    range.collapse();

    var sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
}