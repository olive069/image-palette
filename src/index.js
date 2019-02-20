import 'bootstrap'; //cas particulier 
import $ from 'jquery';

import { pushExtensions } from './check';
import { getSelectedLang, selectLang } from './translate';
import { displayMenuItems, pushItem,setBgImage } from "./menu";
import { createMenu } from './footermenu';
import { createGallery } from './displayImages';
import { displayWelcomeMessage } from './welcome';
import { displayLang } from './displaylang';
import { displayButton, createUploadSubmit } from './uploadbutton';
import { displayFullImage } from './displayfullimage'
import { getApp } from './app';
import { genSeparatorCol } from './utils';


/**
 * when doc is loaded - prevents win pollution
 */
$(function () {
    selectLang();
    genSeparatorCol();
    pushItem(getSelectedLang().menuHome, "/");
    pushItem(getSelectedLang().menuGallery, "#gallery");
    pushItem(getSelectedLang().menuMail, "Mail.php");
    pushExtensions("jpg");
    pushExtensions("gif");
    pushExtensions("png");
    setBgImage();
    displayMenuItems();
    displayFullImage();
    displayLang();
    displayWelcomeMessage();
    createUploadSubmit();
    createGallery();
    createMenu();
    displayButton();

});