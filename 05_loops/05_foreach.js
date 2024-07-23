// const coding = [
//     "Javascript",
//    "Python",
//    "C++"
// ]

// coding.forEach((value) => {
//     console.log(`${value}`);
// });

const my_coding = [
    {
        Shortcut : "JS",
        Fullform : "javscropt"
    },  {
        Shortcut : "Py",
        Fullform : "Python"
    },  {
        Shortcut : "CPP",
        Fullform : "C++"
    }
]

// my_coding.forEach((item)=>{
//     console.log(item.Shortcut);
// }
// )
my_coding.forEach((item, index, arr)=>{
    console.log(item ,index, arr);
}
)