/**
 * generate separatorCol
 * set 40px height style
 */
export function genSeparatorCol() {
    var separatorCol = window.document.querySelectorAll(".separatorCol");
    separatorCol.forEach((div) => {
        div.setAttribute("style", "height:20px");
    });
}

/**
 * 
 * @param {string} tagName 
 * @param {string} text
 * @param {HTMLElement} target 
 */

export function textInElement(tagName, text, target) {
    var element = window.document.createElement(tagName);
    if (!tagName) {
        throw new Error("textInElement requires a tagName!!!");
    };
    if ("undefined" !== typeof text && text !== null) {
        element.appendChild(window.document.createTextNode(text));
    }
    else {
        // throw new Error("Not string arguments!!");
    }
    if (target instanceof HTMLElement) {
        target.appendChild(element);
    }
    else {
        throw new Error("Pas un HTMLElement!!");
    }
    return element
}


/**
 * set  batch attributes ute to element
 * @param {string} element 
 * @param {string} att1 
 * @param {string} att2 
 * @param {string} att3 
 * @param {string} att4 
 * @param {string*} att5 
 */

export function batchAttribute(element, att1, att2, att3, att4, att5) {
    if (!element) {
        throw new Error("no append element!!");
    }
    else if (element) {
        element.setAttribute(att1[0], att1[1]);

        if (att2 !== null && att2 !== undefined) {
            element.setAttribute(att2[0], att2[1]);
        }
        if (att3 !== null && att3 !== undefined) {
            element.setAttribute(att3[0], att3[1]);
        }
        if (att4 !== null && att4 !== undefined) {
            element.setAttribute(att4[0], att4[1]);
        }
        if (att5 !== null && att4 !== undefined) {
            element.setAttribute(att5[0], att5[1]);
        }
    }
}