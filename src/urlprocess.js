import { processImage } from './gencolor';
var urlUploadInputText = window.document.querySelector("#urlUploadInputText");


/**
 * Send request after file load
 * @param {Event} event 
 * this = uploadedFile
 */
//api 1 : Basic YWNjXzJjNWJlOWRmODkyNzYxZjphM2JjM2Q3M2ZhNTQ5Y2UxYmI0MWEzMjRjMGI0NTg4Mg==

export function onFileChange(event) {
    var xhr = new XMLHttpRequest;
    xhr.open("POST", "https://api.imagga.com/v2/colors");
    xhr.setRequestHeader("Authorization", "Basic YWNjXzUxNzRmNTYyZTVlNjZhYjo5NTJiZmY5NTEyYzA0YTNjMDE0NDUyMzc1Y2U3MDZjNQ==");
    var body = new FormData;
    body.append("image", this.files[0]);
    xhr.send(body);
    var uploadedFile = this.files[0];
    xhr.onload = function (event) {
        if (200 === xhr.status) {
            var reader = new FileReader;
            reader.onload = function () {
                //xhr.responseText : json
                //uploadedFile.name : name.jpg
                //reader.result : base64
                processImage(xhr.responseText, uploadedFile.name, reader.result);
            };
            reader.onerror = function () {
            };
            reader.readAsDataURL(uploadedFile);
        }
    }
}



/**
 * Send request after url load
 * @param {*} url 
 */
export function sendImageUrl(event) {
    event.preventDefault();
    var form = this;
    var xhr = new XMLHttpRequest;
    var test = "https://api.imagga.com/v2/colors?image_url=" + form.elements[0].value;
    xhr.open("GET", test);
    xhr.onload = function (event) {
        if (200 === this.status) {
            processImage(xhr.responseText, form.elements[0].value);
            form.elements[0].value = "";
        };
    }
    xhr.setRequestHeader("Authorization", "Basic YWNjXzUxNzRmNTYyZTVlNjZhYjo5NTJiZmY5NTEyYzA0YTNjMDE0NDUyMzc1Y2U3MDZjNQ==");
    var body = new FormData;
    body.append("image_url", test);
    xhr.send(body);
}