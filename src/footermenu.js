import { getSelectedLang } from './translate';
import { getExtensions } from './check'

var imgExtensionsDiv = window.document.querySelector("#imgExtensionsDiv");


/**
 * Create extensions list
 */
export function createMenu() {
    var imgExtensionsDivText = window.document.createTextNode(getSelectedLang().imgExtensionsTitle);
    imgExtensionsDiv.appendChild(imgExtensionsDivText);
    // create ul
    var extensionListUlElement = window.document.createElement("ul");
    // create li
    for (var i in getExtensions()) {
        var extensionListLiElement = window.document.createElement("li");
        var extensionListLiElementText = window.document.createTextNode(getExtensions()[i]);
        extensionListLiElement.appendChild(extensionListLiElementText);
        extensionListLiElement.setAttribute("class", "list-group-item");
        extensionListUlElement.appendChild(extensionListLiElement);
    }
    //append de ul assemblé dans ul
    imgExtensionsDiv.appendChild(extensionListUlElement);
    extensionListUlElement.setAttribute("class", "col-3");
}