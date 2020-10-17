//we require two packaes from our npm, cors and express and define the port
const cors = require('cors');
const express = require("express");
const server = express();
const port = 4000

//then we make our server use our cors package
server.use(cors());

//now we require our controlls, which we will use in our HTTP methods.
let userController = require('../FinalProductGK3/Controller/UserController');
let FreeUserController = require('../FinalProductGK3/Controller/FreeUserController');
let PaymentUserController = require('../FinalProductGK3/Controller/PaymentUserController');
let MatchOfInterestController = require('../FinalProductGK3/Controller/MatchOfInterestController');
let ImageController = require('../FinalProductGK3/Controller/ImageController');
let userInterestArray = require('../FinalProductGK3/Model/userinterest');
let ensureToken = require('../FinalProductGK3/Middelware/ensureToken');
let protectedController = require('../FinalProductGK3/Controller/protectedController')
let loginController = require('../FinalProductGK3/Controller/logincontroller')

//Now we define er get methods, where we can write localhost:4000/users to get our users and etc.
server.get('/Users', userController)
server.get('/Images', ImageController)
server.get('/admin', ensureToken, userController)
server.get('/protected', ensureToken,  protectedController)

//another way to define get methods, used since the other way wouldn't work
server.get('/Users/Match', function(req,res){
    res.json({
      Match: MatchOfInterestController()
    })
  })

//see user interests
server.get('/Users/interest', function(req,res){
    res.json({
      Interest: userInterestArray
    })
  })

//see all our different paths
server.get('/', function(req,res){
    res.json("Use the following to navigate GET: /Users, /Users/Images, /Users/match/, /Users/interest")
  })

//we also use PUT, and Delete, as well as Post in our HTTP
server.put('/Users/Images', userController, ImageController)
server.delete('/Delete', userController)
server.post('/login', loginController)
server.put('/Created', FreeUserController)
server.delete('/Delete/PaymentUser', PaymentUserController)

//our server listens at port 4000, we use dollar to refer back to our port
server.listen(port, function() {
    console.log(`Server running on port ${port}`);
})



