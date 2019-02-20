import { isGalleryFull } from './check';
import { getSelectedLang } from './translate';
import { textInElement } from './utils';
import {sendImageUrl,onFileChange} from './urlprocess'
import $ from 'jquery'
var uploadButton = window.document.querySelector("#uploadButton");
var urlUploadForm = window.document.querySelector("#urlUploadForm");


/**
 * create upload button
 */
export function displayButton() {
    if (!isGalleryFull()) {
        (textInElement("button", getSelectedLang().buttonTitle, uploadButton).setAttribute("class", "btn btn-primary"));
        var uploadButtonElement = window.document.querySelector("#uploadButton button");
        uploadButton.setAttribute("style","text-align:center")
        uploadButtonElement.addEventListener("click", function () {
            file.click(); //ouvre le file dialog box
        });
        file.onchange = onFileChange; //si fichier selectionné lance onFileChange 
        return
    };
}


/**
 * create text & url form
 */
export function createUploadSubmit() {
    if (!isGalleryFull()) {
        var form = window.document.createElement("form"); //form
        form.setAttribute("class", "");
        form.setAttribute("method", "GET");
        form.setAttribute("style","text-align:center");
        form.setAttribute("name", "urlUploadFormText");
        urlUploadForm.appendChild(form);
        var urlUploadInputElement = window.document.createElement("input"); //input url
        urlUploadInputElement.setAttribute("type", "url");
        urlUploadInputElement.setAttribute("class", "col form-control justify-content-center");
        urlUploadInputElement.setAttribute("name", "urlUploadInputText");
        urlUploadInputElement.setAttribute("value", "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png");
        form.appendChild(urlUploadInputElement);
        var urlUploadSubmitElement = window.document.createElement("input"); //input button
        urlUploadSubmitElement.setAttribute("type", "submit");
        urlUploadSubmitElement.setAttribute("value", getSelectedLang().buttonUploadTitle);
        urlUploadSubmitElement.setAttribute("class", "col-6 btn btn-primary");
        form.appendChild(urlUploadSubmitElement);
        form.onsubmit = sendImageUrl;
    }
};
