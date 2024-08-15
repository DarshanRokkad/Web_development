console.log("For loop");
for (let i = 0; i < 10; i++){
    console.log(i);
}

console.log('\nWhile loop');
let num = 100;
while (num != 90) {
    console.log(num);
    num--;
}

console.log('\nNested loop');
for (let i = 1; i < 3; i++){
    for (let j = 1; j < 3; j++){
        console.log(`${i} + ${j} = ${i + j}`);
    }
}

console.log('\nBreak statement');
for (let i = 1; i < 10; i++){
    console.log(i);
    if (i == 5) {
        console.log('As i = 5 we will break');
        break;
    }
}

