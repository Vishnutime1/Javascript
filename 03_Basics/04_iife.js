// Immediately invoked function expressions(IIFE)

//(IIFEs) are used in JavaScript to create a local scope and avoid polluting the global namespace with variables. 
//They are executed immediately after their creation, ensuring that any variables declared within them are not accessible outside their scope.

(function chai(){
    console.log("Hi there")
})();//delimeter

((name)=>{
    user = "Varun"
    console.log(`Hi this is ${name}`);
    console.log(`Hi this is ${user}`);
})
('Vishnu')

