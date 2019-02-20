import {getApp} from './app';

/**
 * populate images
 * @param {string} name 
 * @param {string} url 
 * @param {string} taille 
 * @param {string} extension 
 * @param {array} colors 
 */
export function pushImage(name, url, taille, extension, colors) {
    getApp().images.push({
        name: name,
        url: url,
        taille: taille,
        extension: extension,
        colors: colors,
    });
    window.localStorage.setItem(getApp().namespace, JSON.stringify(getApp()));   
};

export function getImages (){
    return getApp().images
}