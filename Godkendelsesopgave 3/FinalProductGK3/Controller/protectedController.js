//once again we require our hardcoded users as well as our tokens
users = require('../hardCodedUser')
var jwt = require('jsonwebtoken');

//here we create a logincontroller function
function loginController(req, res) {
    //here we can veryfy if token exists
    jwt.verify(req.token, 'my_secret', function(err, data){
        if(err){
            res.sendStatus(403);
        } else{
            res.json({
                msg: "Det her er beskyttet",
                data: data
            })
        }
    }) 
}
//we export our logincontroller
module.exports = loginController