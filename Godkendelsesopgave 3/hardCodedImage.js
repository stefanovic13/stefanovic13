//we require our image class
const Images = require("../FinalProductGK3/Model/user")

//Hardcode Images
let imageUser1 = new Images[3]('mac-drev', '20px', '60px', "Steffan Maksimovic");
let imageUser2 = new Images[3]('linux-drev', '20px', '60px', "Torben Larsen");
let imageUser3= new Images[3]('windows-drev', '20px', '60px', "Louise Klein");
let imageUser4 = new Images[3]('linux-drev', '20px', '60px', "Pia Steffensen");
let imageUser5 = new Images[3]('windwos-drev', '20px', '60px', "Mette Thomsen");
let imageUser6 = new Images[3]('mac-drev', '20px', '60px', "Emma Rye");

//create empty array of images
let ArrayOfImages = []

//overwrite our array of images and insert all images for our users
ArrayOfImages = [imageUser1, imageUser2, imageUser3, imageUser4, imageUser5, imageUser6]

//we export our array of images. 
module.exports = ArrayOfImages

