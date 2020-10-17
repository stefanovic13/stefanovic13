//firstly we require our different classes.
const userInterestArray = require('./Model/userinterest')
const ArrayOfClasses  = require('../FinalProductGK3/Model/user');
//we use indexing to acces our exporte array of classes
const User = ArrayOfClasses[0]
const FreeUser = ArrayOfClasses[1]
const PaymentUser = ArrayOfClasses[2]

//Create an empty array of users
let ArrayofUsers = []

//Hardcode user 
let user1 = new User('Steffan', 'Maksimovic', 'stmak1999@live.dk', 'stefanovic14', '1999/13/01', 'Male', 'Copenhagen', userInterestArray[2]);
let user2 = new User('Camilla', 'Jensen', 'Cam3@live.dk', 'Jensen1515', '1998/25/02', 'Female', 'Roskilde', userInterestArray[2]);

//Hardcode freeuser
let user3 = new FreeUser('Louise', 'Klein', 'louise2001@live.dk', 'louise2001', '1998/16/10', 'Female', 'København', userInterestArray[5], 'Flixbus');
let user4 = new FreeUser('Pia', 'Steffensen', 'piasteffensen1@live.dk', 'piasteffensen32', '1985/12/10', 'Female', 'Roskilde', userInterestArray[3], 'bet365');

//Hardcode Paymentuser
let user5 = new PaymentUser('Mette', 'Thomsen', 'mette23001@live.dk', 'mette4545', '1998/26/2', 'Female', 'København', userInterestArray[6], "9540-3400-2340-2352", "Jagtvej 28");
let user6 = new PaymentUser('emma', 'rye', 'emmarye25@live.dk', 'emmarye545', '1996/23/2', 'Female', 'København', userInterestArray[4],  "2350-2430-2320-5452", "Tårnblæser vej 3");

//add hardcoded users into array
ArrayofUsers = [user1, user2, user3, user4, user5, user6]

//export the Arrayofusers
module.exports = ArrayofUsers 



