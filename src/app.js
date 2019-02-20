/**
 * get app & exportApp
 */

var app = {
    namespace: "image_color",
    images: [],
    lang: "en",
    maxFilesGallery: 20,
    lastClickedImage: 0
};

var loadedApp = JSON.parse(window.localStorage.getItem(app.namespace));

if (loadedApp === null) {
    app.lang = "en";
    app.images = [];
    app.maxFilesGallery = 20;
    app.lastClickedImage = 0;
}
else {
    app.lang = loadedApp.lang;
    app.images = loadedApp.images;
    app.maxFilesGallery = loadedApp.maxFilesGallery;
    app.lastClickedImage = loadedApp.lastClickedImage;
    if(app.lastClickedImage === ""){
        app.lastClickedImage =0;
    }

}

export function getApp() {
    return app;
}
