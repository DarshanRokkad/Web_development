function generateRandomColor() {
    const r = Math.floor(Math.random() * 256) + 1;
    const g = Math.floor(Math.random() * 256) + 1;
    const b = Math.floor(Math.random() * 256) + 1;
    return `rgb(${r}, ${g}, ${b})`;
}

function changeColor() {
    this.style.color = generateRandomColor();                   // "this" refers to the element which is calling it i.e h1/btn
    this.style.backgroundColor = generateRandomColor();
}


const h1s = document.getElementsByTagName("h1");
for (let h1 of h1s) {
    h1.addEventListener("click", changeColor);
}

const btns = document.getElementsByTagName("button");
for (let btn of btns) {
    btn.addEventListener("click", changeColor);
}