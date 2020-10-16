//We define the primary class and insert attributes in our constructor
class User{
    constructor(firstName, lastName, mail, password, birthDay, gender, location, interrest){
       this.firstName = firstName;
       this.lastName = lastName;
       this.mail = mail;
       this.password = password;
       this.birthDay = birthDay;
       this.gender = gender;
       this.location = location;
       this.interrest = interrest;
    }
}
//We define a subclass Freeuser, and add the same attributes, as well as an attribute called Ads(Free users has to watch add)
class FreeUser extends User{
    constructor(firstName, lastName, mail, password, birthDay, gender, location, interrest, adsOnDisplay){
        //We use super to inherit from the top-class, instead of writing this. again
        super(firstName, lastName, mail, password, birthDay, gender, location, interrest)
        this.adsOnDisplay=adsOnDisplay;
    }  
}
//We define another subclass paymenterUser and add creditcard information and billingadress.
class PaymentUser extends User{
    constructor(firstName, lastName, mail, password, birthDay, gender, location, interest, creditCard, billingadresse){
        //We use super to inherit from the top-class, instead of writing this. again
        super(firstName, lastName, mail, password, birthDay, gender, location, interest)
        this.creditCard = creditCard
        this.billingadresse = billingadresse
    }
}
//we define a new class Image, which will work a way for users to insert images
class Images{
    constructor(path, width, height, owner){
        this.path = path;
        this.width = width;
        this.height = height;
        this.owner = owner;
    }
}
//now we create an array of our classes, and export them.
ArrayOfClasses = [User, FreeUser, PaymentUser, Images];
module.exports = ArrayOfClasses