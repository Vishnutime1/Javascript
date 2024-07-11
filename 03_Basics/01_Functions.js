// function addTwoNumbers(number1, number2) {
//     // num3 = number1+number2;
//     return number1+number2
// }

// result = addTwoNumbers(5,8)
// console.log(result)

// function LoginUser(user)
// {
//     if(!user){
//         console.log(`Please enter user name`)
//         return
//     }

//     console.log(`Hi  ${user}, you are logged in`)
// }

// console.log(LoginUser())

// function CalculateCart(newarray) {
//     return newarray
// }

// const value = CalculateCart(200,300)
// console.log(value);

// ========================Multiple values using spread==============

// function CalculateCart(...newarray) {
//     return newarray
// }

// const value = CalculateCart(200,300)
// console.log(value);//[ 200, 300 ]

//==============Check how spread works==============

// function CalculateCart(val1,val2,...newarray) {
//     return newarray
// }

// const value = CalculateCart(200,300,500,600)
// console.log(value);//[ 500, 600 ]


//==============How to pass Object has function=======================

// const user = {
//     name : "Vishnu",
//     Score : 90
// }

// function Objectrefrence(anyObject){

//     console.log(`Username is ${anyObject.name}, Score is  ${anyObject.Score}`)
// }

// Objectrefrence(user)

//==============How to pass Array has function=======================

const user = [100,200,300,400]

function Arrayrefrence(anyArray){

    console.log(`Username is ${anyArray[0]}, Score is  ${anyArray[1]}`)
}

Arrayrefrence(user)



















