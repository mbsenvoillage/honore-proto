//import  {Theme} from "./cust-p_model.js";

//const theme1 = new Theme("theme de la mort");


import {Theme, Picture, UploadedPictures, ProductCustom, Canvas, ProductView} from "./cust-p_model.js";
import {View} from "./cust-p_view.js";
import {ViewUtils} from "./cust-p_view.js";

// const theme1 = new Model.Theme("theme de la mort");

//console.log(theme1.themeName);

class Controller {

    constructor() {
        this.view = new View(new ViewUtils());
        this.model = Picture;
        this.picarray = new this.model.UploadedPictures();

        this.view.uploadPicture(this.addPicture)
    }

    addPicture = (url) => {
        let picture = new this.model.Picture("test", "testdata", url);
        this.picarray.picturePush(picture);
        console.log(picture);
    }

}


$(document).ready(function() {
    const app = new Controller();
    let imgUploadBtn = document.getElementById('img-upload-btn');
    imgUploadBtn.click(alert("got clicked"));


});



console.log("hey there");






