const PaymentUser = require('../Model/user');
const interest= require('../Model/userinterest')

//hardcode new paymenteruser for model
let paymentUser1 = new PaymentUser[2]('Louise', 'Klein', 'louise2001@live.dk', 'louise2001', '19981610', 'Female', 'København', interest[4], "3534-2323-5343-2325", "Niebevej 23");

//controller
function PaymentUserController(req, res) {
    res.end("deleted" + JSON.stringify(paymentUser1))
}
//eksport the controller
module.exports = PaymentUserController;