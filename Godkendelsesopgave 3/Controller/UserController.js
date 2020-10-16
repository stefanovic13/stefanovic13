//we require our hardcoded users
const AllofOurUsers = require('../hardCodedUser');

//controller to strinigify our users
function userController(req, res) {
    res.end(JSON.stringify(AllofOurUsers))
}
//eksport the user controller
module.exports = userController;