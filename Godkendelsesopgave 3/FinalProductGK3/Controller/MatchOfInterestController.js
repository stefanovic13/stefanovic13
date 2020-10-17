//We require our array of users and interest
const ArrayofUsers = require("../hardCodedUser");
const interest = require('../Model/userinterest')

//Create a function that loops over our users
function MatchUsersOfInterest(){
  //First loop checks length  
  for (let i = 0; i < ArrayofUsers.length; i++) {
    //nest we assign the index of our usseraray of user  
    const user = ArrayofUsers[i];
      //we iterate over users that comes after user
      for (let j = i+1; j <  ArrayofUsers.length; j++) {
        const user1 =  ArrayofUsers[j];
        //if both have same interests, they are a match
        if (user.interest == user1.interest) {
          //we return the firstname of the matches  
          return `${user.firstName} is matched with ${user1.firstName}`;
        }
      }
    }
  }
  
//now we export our match
module.exports = MatchUsersOfInterest;

