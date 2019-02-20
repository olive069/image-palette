import { getApp } from './app';

/**
//      * Localize strings en/fr
//      */

var selectedLang = [];

export function selectLang() {
    var englishVar = {
        menuHome: "Home",
        menuGallery: "Gallery",
        menuMail: "Mail",
        langTitle: "Your language : ",
        langFull: "English",
        langSwitch: "Switch to French",
        welcome: "Welcome!!",
        fullGallery: "Gallery full!!",
        gallerySize: "Gallery size : ",
        emptyGallery: "Empty gallery",
        mainTitle: "Get the colors from an image : ",
        colorsTitle: "Colors",
        buttonTitle: "Upload image",
        buttonUploadTitle: "Submit",
        imageDivPath: "Image path : ",
        colorText: "Color ",
        colorListTitle : "Colors",
        emptyImgText: "Select a gallery image",
        imgExtensionsTitle: "Accepted extensions : ",
        deleteButtonText: "Delete image",
        eraseAllButtonText: "Delete All",
    };

    var frenchVar = {
        menuHome: "Accueil",
        menuGallery: "Gallerie",
        menuMail: "Mail",
        langTitle: "Votre langue : ",
        langFull: "Francais",
        langSwitch: "Changer en Anglais",
        welcome: "Bienvenue!!",
        fullGallery: "Gallerie pleine!!",
        gallerySize: "Taille de la gallerie : ",
        emptyGallery: "Gallerie vide!!",
        mainTitle: "Obtenez les couleurs de votre image : ",
        colorsTitle: "Couleurs",
        buttonTitle: "Uploader",
        buttonUploadTitle: "Envoyer",
        imageDivPath: "Chemin de l'image : ",
        colorText: "Couleur ",
        colorListTitle : "Couleurs",
        emptyImgText: "Sélectionner une image dans la gallerie",
        imgExtensionsTitle: "Formats acceptés : ",
        deleteButtonText: "Effacer l'image",
        eraseAllButtonText: "Effacer tout",

    };

    if (getApp().lang == "fr") {
        for (var i in frenchVar) {
            selectedLang[i] = frenchVar[i];
        };
    }
    else if (getApp().lang == "en") {
        for (var i in englishVar) {
            selectedLang[i] = englishVar[i];
        };
    }

}


export function getSelectedLang() {
    return selectedLang;
};



