///Sibgleton
//Literals
const sy = Symbol("key")
const Obj_User = {name :"Vishnu",
    Email : "vishnu@google.com",
    phone :99494204,
    "Lang zone" : "Telugu",
    [sy] : "My care"}//to use as symbol //[Symbol(key)]: 'My care'

// console.log(Obj_User.Email)
// console.log(Obj_User["Lang zone"])
// console.log(Obj_User.sy)
// console.log(Obj_User)

Obj_User.greeting = function(){
    console.log("Hi Hitesh")
}

console.log(Obj_User.greeting)//[Function (anonymous)]
// console.log(Obj_User.greeting())

Obj_User.mygreeting = function(){
    console.log(`Hi ia m vishnu my email , ${this.Email}, is my email`)
}
console.log(Obj_User.mygreeting())
console.log(Obj_User)