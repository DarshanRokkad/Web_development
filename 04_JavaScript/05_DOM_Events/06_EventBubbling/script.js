const container = document.querySelector(".container");
const btn = document.querySelector(".btn");

container.addEventListener(
    "click", (e) => {
        container.classList.toggle('hide');
    }
)

btn.addEventListener(
    "click", (e) => {
        container.style.backgroundColor = generateRandomColor();
        e.stopPropagation();        // this will stop triggering the events of all elements in which the current element is wrapped 
    }
)

function generateRandomColor() {
    const r = Math.floor(Math.random() * 256) + 1;
    const g = Math.floor(Math.random() * 256) + 1;
    const b = Math.floor(Math.random() * 256) + 1;
    return `rgb(${r}, ${g}, ${b})`;
}