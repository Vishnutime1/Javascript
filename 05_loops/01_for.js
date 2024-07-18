for (let i = 0; i < 10; i++) {
    console.log(i);
}

for (let i = 0; i < 10; i++) {
    console.log(`Outer loop ${i}`)
    if(i==5){
        console.log(`5 is detected`);
    }
    for (let j = 0; j < 10 ; j++){
        console.log(`Outer loop ${i} inner loop ${j}`);
    }
    
}

for (let k = 1; k <=5; k++) {
    for (let l = 1; l <=5; l++)
        console.log(`${k} * ${l} = ${k * l}`);
 
}

// break

for (let k = 1; k <=5; k++) {
    if(k ==3){
        console.log(`${k} is detected`);
        break
    }
    for (let l = 1; l <=5; l++)
        console.log(`${k} * ${l} = ${k * l}`);
 
}
// Continue

for (let k = 1; k <=5; k++) {
    if(k ==3){
        console.log(`${k} is detected`);
        continue
    }
    for (let l = 1; l <=5; l++)
        console.log(`${k} * ${l} = ${k * l}`);
 
}