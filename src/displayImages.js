import { getApp } from './app';
import { isExtensionValid } from './check';
import { genColorDiv,onClickImageDelete } from './gencolor';
import {getSelectedLang} from './translate';
import {batchAttribute} from './utils';
import { displayFullImage } from './displayfullimage';

var gallery = window.document.querySelector("#gallery");
var imgPrevUrlDiv = window.document.querySelector("#imgPrevUrlDiv");
var deleteButton = window.document.querySelector("#deleteButton");
var imgPreview = window.document.querySelector("#imgPreviewDiv");
var imgPrevUrlDiv = window.document.querySelector("#imgPrevUrlDiv");


/**
 * 
* Display images in gallery
*/
export function createGallery() {
    gallery.innerHTML = "";
    var images = getApp().images;
    for (var i in images) {
        ////create images
        if (isExtensionValid(images[i]) || null === images[i].extension) {
            var imageDivElement = window.document.createElement("div");
            var imageElement = window.document.createElement("img");
            imageElement.setAttribute("id","imageElement")
            imageDivElement.setAttribute("class", "col-12 col-sm-6 col-xl-3 col-lg-4");
            batchAttribute(imageElement, ["src", images[i].url], ["alt", images[i].name], ["class", "galleryImage"]);
            imageDivElement.style.backgroundImage = images[i].url;
            imageDivElement.style.textAlign = "center";
            imageDivElement.style.margin = "auto";
            imageElement.style.maxWidth = "200px";
            imageElement.style.maxHeight = "200px";
            imageElement.style.margin = "10px";
            imageDivElement.appendChild(imageElement);
            gallery.appendChild(imageDivElement);
            // sortir la variable du scope
            registerEvent(imageElement, images[i],i);
        }
    };

};


/**
 * onclick scope event function
 * @param {string} image 
 * @param {object} imageObj
 * @param {number} key
 */
function registerEvent(image, imageObj,key) {
    image.onclick = function (event) {
        onClickImage(event, imageObj,key);
    };

}


function onClickImage(event, imageObj,key) {
    deleteButton.innerHTML = "";
    getApp().lastClickedImage = key;
    window.localStorage.setItem(getApp().namespace,JSON.stringify(getApp()));
    var imageElement = window.document.querySelector("#imageElement")
    var deleteButtonElement = window.document.createElement("button");
    var deleteButtonElementText = window.document.createTextNode(getSelectedLang().deleteButtonText);
    deleteButtonElement.setAttribute("class", "btn btn-danger");
    deleteButtonElement.appendChild(deleteButtonElementText);
    deleteButton.appendChild(deleteButtonElement);    
    displayFullImage(imageObj);    
    imgPrevUrlDiv.innerHTML = getSelectedLang().imageDivPath +"<br/>"+ imageObj.name;
    genColorDiv(imageObj.colors);
    deleteButtonElement.addEventListener("click", function (event) {
        onClickImageDelete(event, imageObj.url)
    });
};
