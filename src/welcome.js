import { textInElement } from './utils';
import { getSelectedLang } from './translate'

var title = window.document.querySelector("#title");


/**
 * Create Welcome Message
 */
export function displayWelcomeMessage() {
    (textInElement("h2", getSelectedLang().welcome, title)).setAttribute("style", "text-align:center");
};