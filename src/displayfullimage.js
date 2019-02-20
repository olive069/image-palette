import { batchAttribute } from './utils'
import { getSelectedLang } from './translate';
import { getApp } from './app';
import {genColorDiv} from './gencolor';
import {getImages} from './gallery';

var imgPrevUrlDiv = window.document.querySelector("#imgPrevUrlDiv");

/**
 * Display Full Image
 * @param {string} imageUrl 
 * @param {string} data 
 * que imageUrl si url
 **/

export function displayFullImage(imageUrl, data) {
    var imageElement = window.document.createElement("img");
    var key = getApp().lastClickedImage;
    imageElement.setAttribute("id", "imgPreview")
    imgPreviewDiv.innerHTML = "";
    imgPreviewDiv.appendChild(imageElement);
    // imageElement.style.maxWidth = "300px";
    // imageElement.style.maxHeight = "220px";
    imgPrevUrlDiv.innerHTML = getSelectedLang().emptyImgText;
    batchAttribute(imageElement, ["class", "img-fluid"], ["src", "assets/images/empty_image.png"], ["alt", imageUrl]);
    if (imageUrl) {
        //url et file   

        imgPrevUrlDiv.innerHTML = getSelectedLang().imageDivPath + imageUrl.name;
        imageElement.setAttribute("src", imageUrl.url);
        
        if (data) {
            //que file
            console.log("file");
            
            imgPrevUrlDiv.innerHTML = getSelectedLang().imageDivPath + imageUrl.name;
            imageElement.setAttribute("src", data);
        }
    }

    else if (!imageUrl && getApp().images.length > 0) {
        imgPrevUrlDiv.innerHTML = getSelectedLang().imageDivPath + getApp().images[key].name;
        imageElement.setAttribute("src", getApp().images[key].url);       
        genColorDiv(getImages()[key].colors);
    }
    else if (!imageUrl && getApp().images.length === 0) {


    }
}
