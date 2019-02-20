import {textInElement,batchAttribute} from "./utils";
var body = window.document.querySelector("body");

/**
 * Populate menuItems
 * @param {string} name 
 * @param {string} lien 
 */
var menuItems = [];
export function pushItem(name, lien) {
    menuItems.push({
        name: name,
        lien: lien,
    })
}


/**
 * set backgroundimages
 */

 export function setBgImage (){
    body.style.backgroundImage = "url('/assets/images/debut_light.png')";
    body.style.backgroundRepeat = "repeat";

 }


/**
 * Append Nav Menu items
 */
export function displayMenuItems() {
    var menu = window.document.querySelector("#menu");
    var menuNavUl = textInElement("ul", "", menu);
    menuNavUl.setAttribute("class", "navbar-nav");
    for (var i in menuItems) {
        var menuNavLi = textInElement("li", "", menuNavUl);
        var itemElement = textInElement("a", menuItems[i].name, menuNavLi);
        batchAttribute(itemElement, ['href', menuItems[i].lien], ["class", "nav-link h4"]);
    }
}


