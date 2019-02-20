import { getSelectedLang } from './translate';
import { gallerySizeFunc } from './check'
import { getApp } from './app';
import { createGallery } from './displayImages';
import { pushImage } from './gallery';
import { displayFullImage } from './displayfullimage'

var colorList = window.document.querySelector("#colorList");
var galleryIm = window.document.querySelector("#gallery img");
var gallery = window.document.querySelector("#gallery");
var imgPreview = window.document.querySelector("#imgPreviewDiv");
var imgPrevUrlDiv = window.document.querySelector("#imgPrevUrlDiv");
var deleteButton = window.document.querySelector("#deleteButton");
var colorListTitle = window.document.querySelector("#colorListTitle");


/**
 * Generate colors Div in 
 */
export function genColorDiv(colorArray) {
    colorList.innerHTML = "";
    // colorListTitle.style.height = "30px";
    // colorListTitle.innerHTML = getSelectedLang().colorListTitle;
    for (var i = 0; i < colorArray.length; i++) {
        var genColorDiv = window.document.createElement("div");
        var colorDivName = "colorDiv" + (i + 1);
        genColorDiv.setAttribute("id", colorDivName);
        genColorDiv.setAttribute("class", "col");
        var genColorDivText = window.document.createTextNode(colorArray[i]);
        genColorDiv.style.textAlign = "center";
        genColorDiv.style.verticalAlign = "middle";
        // genColorDiv.style.margin = "auto";
        genColorDiv.style.height = "35px";
        genColorDiv.style.backgroundColor = colorArray[i];
        genColorDiv.appendChild(genColorDivText);
        colorList.appendChild(genColorDiv);
    };

};

export function onClickImageDelete(event, imageUrl) {
    deleteButton.onclick = function (event) {
        var imgPreview = window.document.querySelector("#imgPreview");
        var app = getApp();
        var confirmMess = confirm("Etes-vous sûr?");
        if (!confirmMess) {
            return;
        }
        var foundImage = app.images.find(function (elem) {
            return imageUrl === elem.url;
        });
        var foundImageKey = app.images.indexOf(foundImage);
        app.images.splice(foundImageKey, 1);
        window.localStorage.setItem(app.namespace, JSON.stringify(app));
        createGallery();
        gallerySizeFunc();
        displayFullImage();
        if (app.images.length) {
            imgPreview.setAttribute("src", imageUrl)
            return;
        }
        else {
            gallery.innerHTML = getSelectedLang.emptyGallery;
            imgPreview.setAttribute("src", "/assets/images/empty_image.png");
            imgPrevUrlDiv.innerHTML = getSelectedLang().emptyImgText;
            throw new Error("Gallerie vide!!");
        }
    }
};

/**
 * Extract Colors
 * @param {JSON} responseText //le result JSON (raw à parser)
 * @param {string} imageUrl //name du fichier depuis l'objet uploadedFile
 * @param {string} data //result du File Reader : base64
 * 2 pour url (sans data)
 * 3 pour file
 */
export function processImage(responseText, imageUrl, data) {
    var myObj = JSON.parse(responseText);
    var colors = myObj.result.colors.image_colors;
    var colorArray = [];
    for (var i in colors) {
        var color = colors[i].html_code;
        colorArray.push(color);
    }
    if (!data) {
        pushImage(imageUrl, imageUrl, null, "jpg", colorArray);
        displayFullImage(imageUrl);
        
    }
    else {
        pushImage(imageUrl, data, null, "jpg", colorArray);
        displayFullImage(imageUrl, data);
    }
    genColorDiv(colorArray);
    createGallery();
    gallerySizeFunc();
};

