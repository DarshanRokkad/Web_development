const input = document.querySelector("#move");

// input.addEventListener(
//     "keyup", function (evt) {
//         console.log(evt.key);       // give the key which is pressed
//         console.log(evt.code);      // give the location of the key which is pressed
//     }
// );




// example : moving a character pokemon in the pokemon game
input.addEventListener(
    "keyup", function (evt) {
        switch (evt.code) {
            case "ArrowUp":
                console.log("Move pokemon up!..");
                break;
            case "ArrowDown":
                console.log("Move pokemon down!..");
                break;
            case "ArrowLeft":
                console.log("Move pokemon left!..");
                break;
            case "ArrowRight":
                console.log("Move pokemon right!..");
                break;
            default:
                console.log("Ignored key");
                break;
        }
    }
);