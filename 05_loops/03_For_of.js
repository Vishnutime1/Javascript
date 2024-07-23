// for of

// ["", "", ""]
// [{}, {}, {}]
 
const arr = [1,2,3,4]

// for (const myarr of arr) {
//     console.log(`This my ${myarr}`);
// }

// const mystr = "Hello World!"

// for (const greet of mystr) {
//     console.log(`This my ${greet}`);
// }

const My_map = new Map()
My_map.set('IN',"INDIA") 
My_map.set('Fr',"France") 
My_map.set('It',"ITALY") 

// 
for (const [key, value ] of My_map) {
    console.log(`${key} = ${value} `);
}