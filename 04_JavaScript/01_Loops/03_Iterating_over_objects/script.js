const scores = {
    ram: 99, 
    sita: 80,
    laks: 78
}

// below code gives error

// for (let s of scores) {
//     console.log(s);
// }

for (let key in scores) {
    console.log(`${key} -> ${scores[key]}`);
}



console.log(Object.keys(scores));

console.log(Object.values(scores));

console.log(Object.entries(scores));


// Q. average all the scores and round it to 2 decimal
let total_score = 0;
marks = Object.values(scores);
for (let score of marks) {
    total_score += score;
}
let n = marks.length;
let average_score = total_score / n;
console.log(average_score);