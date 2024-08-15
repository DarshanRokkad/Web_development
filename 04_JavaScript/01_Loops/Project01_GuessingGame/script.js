let number = parseInt(prompt("Enter the maximum number : "));
while (!number) {
    number = parseInt(prompt("Please Enter the valid maximum number: "));
}

let target = Math.floor(Math.random() * number) + 1;

// Game logic goes from here

let guess = prompt('Enter your first guess : ');
let attempt = 1;

while (parseInt(guess) !== target)
{
    if (guess === 'q') {
        break;
    }
    if (parseInt(guess) > target) {
        guess = prompt("Guess lesser number : ");
    }
    else {
        guess = prompt("Guess higher number : ");
    } 
    attempt++;
}

if (guess === 'q') {
    console.log("You have quit the game.");
}
else {
    console.log(`You have guessed number ${target} in ${attempt} attempts`);
}
