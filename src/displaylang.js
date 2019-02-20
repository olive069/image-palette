import { getApp } from './app';
import { batchAttribute } from './utils';
import {selectLang,getSelectedLang} from './translate';
var langDiv = window.document.querySelector(".langDiv");
var langSwitchElementDiv = window.document.querySelector(".langSwitchElement");

/**
 * Display language choice
 */
export function displayLang() {
    var langElement = window.document.createElement("p");
    var langTextString = getSelectedLang().langTitle + getSelectedLang().langFull + " (" + getApp().lang + ") ";
    var langText = window.document.createTextNode(langTextString);
    var langSwitchElement = window.document.createElement("a");
    var langSwitchElementText = window.document.createTextNode(getSelectedLang().langSwitch);
    langSwitchElement.appendChild(langSwitchElementText);
    batchAttribute(langSwitchElement, ["href", "#"], ["style", "display:inline"]);
    langElement.setAttribute("style", "display:inline");
    langElement.appendChild(langText);
    langDiv.appendChild(langElement);
    langSwitchElementDiv.appendChild(langSwitchElement);
    langSwitchElementDiv.addEventListener("click", function (event) { langSwitchEvent() });
};

export function langSwitchEvent(event) {
    if (getApp().lang === "fr") {
        selectLang("en");
        getApp().lang = "en";
        window.localStorage.setItem(getApp().namespace, JSON.stringify(getApp()));
        window.location.reload();
    }
    else if (getApp().lang === "en") {
        selectLang("fr");
        getApp().lang = "fr";
        window.localStorage.setItem(getApp().namespace, JSON.stringify(getApp()));
        window.location.reload();
    }

};

