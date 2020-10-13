//vi laver en overklasse
class User {
    constructor(firstname, lastname, age, userName, email, passWord) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        this.userName = userName;
        this.email = email;
        this.passWord = passWord;
    }
    register() {
        console.log(this.userName + " "+ "Is now registered");
        
    }

}
let bobby = new User("bob", "hansen", 21, "bob123", "bob@mail.com", "123456")
//console.log(bobby)
//console.log(bobby.register());

//vi laver en paymentuser underklasse til user
class paymentUser extends User {
    constructor(firstname, lastname, age, userName, email, passWord, creditcardInformation) {
        super(firstname, lastname, age, userName, email, passWord);
        this.creditcardInformation = creditcardInformation;
    }
    getCreditcardinformation() {
        console.log(this.userName + " "+ "is now subscribed with the follwing credit card informaiton:" + " " + this.creditcardInformation )

    }
}

let bob = new paymentUser("bob", "hansen", 21, "bob123", "bob@mail.com", "123456", "9450-5450-2340-3242")

console.log(bob)
console.log(bob.register())
console.log(bob.getCreditcardinformation())


class freeuser extends User {
    constructor(firstname, lastname, age, userName, email, passWord) {
        super(firstname, lastname, age, userName, email, passWord)
    }
}

