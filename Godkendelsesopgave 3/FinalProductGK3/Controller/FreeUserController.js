//we require freeUser
const FreeUser = require('../Model/user');
const interest= require('../Model/userinterest')

//hardcode freeuser
let freeUser1 = new FreeUser[1]('Muhammed', 'Allan', 'Moallan2001@live.dk', 'MoAllan2001', '19981610', 'Male', 'København', interest[0], "ADS ON");

//controller
function FreeUserController(req, res) {
    res.end("created" + JSON.stringify(freeUser1))
}
//eksporter controlleren
module.exports = FreeUserController;