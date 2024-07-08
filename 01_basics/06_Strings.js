let name = "Vishnu"
let Rep_Count =3

console.log(`Hi my name is ${name} My rep count is ${Rep_Count}`)

const GetName = new String("Hello Vishnu")

// console.log(GetName)

// console.log(GetName.__proto__)
// console.log(GetName.length)
// console.log(GetName.toUpperCase)
// console.log(GetName.toLowerCase)
// console.log(GetName.charAt(3))
// console.log(GetName.indexOf('u'))

const NewString =  GetName.substring(0,4)
console.log(NewString)

const Slice_String = GetName.slice(-11,10)
console.log(Slice_String)

const trimString = new String("   Vishnu    ")
console.log(trimString)
console.log(trimString.trim())
let url = "https://hiteshchoudhary.com/hindi.html"

console.log(url.replace("h","%20"))
console.log(url.includes("hitesh"))
console.log(url.split("/"))