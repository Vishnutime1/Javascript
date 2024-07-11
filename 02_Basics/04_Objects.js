// const tender = new Object()

// const tender = {}
// console.log(tender);

// tender.Id = "123"
// tender.email = "vishnu@gmail.com"
// console.log(tender);

// // const real_user = {
// //     id : 123,
// //     Email :{
// //         fullname :{
// //             "First name" : "Vishnu",
// //             "Last name" : "Reddy"
             
// //         }
// //     }
// // }

// // console.log(real_user.Email.fullname["First name"]);

// const Obj1 = {1 :"a", 2:"b"}
// const Obj2 = {3 :"a", 4:"b"}
// const Obj3 = {5 :"a", 6:"b"}


// obj4 = {Obj1,Obj2,Obj3}//{
//     Obj1: { '1': 'a', '2': 'b' },
//     Obj2: { '3': 'a', '4': 'b' },
//     Obj3: { '5': 'a', '6': 'b' }
//   }

// obj4 = Object.assign({},Obj1,Obj2,Obj3)
//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }
// obj4 = {...Obj1,...Obj2,...Obj3}
//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }
// console.log(obj4)
// console.log(tender)

// console.log(Object.keys(tender));
// console.log(Object.values(tender))
// console.log(Object.entries(tender))

// console.log(Object.hasOwnProperty('Id'))

// const users = [
//     {id : 1,
//       numb : 234,  

//     },{id : 2,
//         numb : 234, }

// ]

// console.log(users[1].id);

const consumer = {
  course :"js",
  validity : '1year',
  courseinstructor : "Vishnu"
}


console.log(consumer.courseinstructor);

const {courseinstructor:instructor} = consumer

console.log(instructor);








































