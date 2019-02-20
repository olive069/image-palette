import { getImages } from './gallery';
import { getApp } from './app';
import { getSelectedLang} from './translate';


var imgExtensions = [];
var gallerySize = window.document.querySelector("#gallerySize");


/**
 * populate validExtensions
 * @param {string} extension 
 */
export function pushExtensions(extension) {
    imgExtensions.push(extension)
};

/**
 * 
 * @param {array} image 
 */
export function getExtensions (){
    return imgExtensions
}

/**
 * check if valid Extension
 * True if valid
 * @param {object} image
 * @returns {boolean} 
 */
export function isExtensionValid(image) {
    for (var i in imgExtensions) {
        if (image.extension === imgExtensions[i]) {
            return true;
        }
    }
    return false;
};

/**
 * Full gallery??
 * True if full
 */
export function isGalleryFull() {
    return (getImages().length > getApp().maxFilesGallery)
};



/**
 * manage gallery Size
 */
export function gallerySizeFunc() {
    gallerySize.innerHTML = "";
    var gallerySizeText = window.document.createTextNode(getSelectedLang().gallerySize + getApp().images.length + "/" + getApp().maxFilesGallery);
    if (isGalleryFull()) {
        gallerySizeText = window.document.createTextNode(getSelectedLang().fullGallery);
        throw new Error(getApp().fullGallery)
    }
    gallerySize.appendChild(gallerySizeText);
}