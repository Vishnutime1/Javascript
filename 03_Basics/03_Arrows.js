const chai = {
    username : "Vishnu",
    Price : 1000000,

    WelcomeMessage : function() {
        console.log(`Hi ${this.username},is here `);
        console.log(this);
    }
}
// console.log(chai);

chai.WelcomeMessage()
// chai.username ="Reddy"
// chai.WelcomeMessage()

// console.log(this);//{} In browser points to windows

// function chai() {
//     username : "Vishnu",
//     console.log(this);
// }
// chai()//In function many objects are present

// const chai =  () => {
//     username : "Vishnu",
//     console.log(this)
// }

//  console.log(chai())// In arrow this is empty object {}

// let num1 =2
// let num2 =3

// const Numadd = (num1, num2) => {
//     return num1 + num2
// }

// const Numadd = (num1, num2) => ( num1 + num2)
// const Numadd = (num1, num2) => num1 + num2
const Numadd = (num1, num2) => ( {username : "Vishnu"})


console.log(Numadd(5,19))















