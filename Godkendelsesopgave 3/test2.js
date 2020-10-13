usersWhopaid = []
usersWhoFree = []

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
    class paymentUser extends User {
        constructor(firstname, lastname, age, userName, email, passWord, creditcardInformation, billingAdress) {
            super(firstname, lastname, age, userName, email, passWord);
            this.creditcardInformation = creditcardInformation;
            this.billingAdress = billingAdress;

    }
    getCreditcard_billingadress() {
        console.log("username:" + this.userName + " "+ "is now subscribed with the follwing credit card informaiton:" + " " + this.creditcardInformation + " " + "with the following adress:" + " " + this.billingAdress)
    }

    getuserswhopaid() {
        usersWhopaid.push(this.userName, this.creditcardInformation, this.billingAdress)
    }
}
    class freeuser extends User {
        constructor(firstname, lastname, age, userName, email, passWord) {
            super(firstname, lastname, age, userName, email, passWord)
            
    }
    getfreeusers() {
        console.log("username:" + this.userName + " " + "is now subscribe as free user")
    }

    getuserswhodidnotpaid() {
        usersWhoFree.push(this.userName)
}
    }

//let bobby = new User("bob", "hansen", 21, "bob123", "bob@mail.com", "123456")
//console.log(bobby)
//console.log(bobby.register());

//BOB PAID FOR SERVICE:
let bob = new paymentUser("bob", "hansen", 21, "bob123", "bob@mail.com", "123456", "9450-5450-2340-3242", "jagvej 68")
var bobPayer = bob.getCreditcard_billingadress()
console.log(bob.getuserswhopaid())
console.log(usersWhopaid)

//LINDA IS FREE USER
let Linda = new freeuser("lida", "hansen", 24, "linda123", "linda@mail.com", "123456")
var lindafreeUser = Linda.getfreeusers()
console.log(Linda.getuserswhodidnotpaid())
console.log(usersWhoFree)
