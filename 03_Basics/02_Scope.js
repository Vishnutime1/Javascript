// let a = 10

// if(true){
//     var b = 20;
//     let c = 30;
//     const d= 40;
// }

// console.log(`${a},${b},${c}`);//c is not defined
// console.log(`${a},${b}`) // 10,20

if(true){
    let My_User = "Hitesh";
    if(true){
        let Next_User = ("Vishnu");
        console.log(`User name is ${My_User}`)
    }
    // console.log(`Hi another user ${Next_User}`);Next_User is not defined
}
// console.log(My_User) My_User is not defined

num_1 =10
num_2 =20
function AddNum(){
    return num_1+num_2
}

console.log(AddNum());

// console.log(Num());Cannot access 'Num' before initialization
const Num = function(){
    return num_1+num_2
}
console.log(Num());





