//we rquire our hardcoded images
const Images = require('../hardCodedImage');

//controller
function ImageController(req, res) {
    res.end(JSON.stringify(Images))
}

//export the controller.
module.exports = ImageController;