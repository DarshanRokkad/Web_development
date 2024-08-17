const input = document.querySelector("input");
const container = document.querySelector("#container");
const form = document.querySelector('form');

form.addEventListener(
    "submit", (e) => {
        e.preventDefault();        // avoids the default route after submit
        const itemName = input.value;
        const newItem = document.createElement("li");
        newItem.innerText = itemName;
        container.append(newItem);
        input.value = "";
    }
)



// Problem:

// It can remove only "li" element which are present at starting only; not "li" elements that will be added later
// because 'event listener' will be added to "li elements" which are present at starting only

// const lis = document.querySelectorAll("li");
// for (let li of lis) {
//     li.addEventListener(
//         "click", () => {
//             li.remove();
//         }
//     )
// }




// It will remove both elements that are present and also that will be added
// because added event listener to the whole container because 'li elements' are added to the container.
container.addEventListener(
    "click", (e) => {
        // console.dir(e);
        // console.log(e.target);
        // console.log(e.target.nodeName);
        if (e.target.nodeName === "LI")            // helps to avoid removing of other elements than "li elements"
        {
            e.target.remove();
        }
    }
)


// Solution -> add event listener to the 'container' instead of 'li elements' to avoid the "Event Delegation"