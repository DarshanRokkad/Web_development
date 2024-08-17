h1 = document.querySelector("h1");

function generateRandomColor() {
    const r = Math.floor(Math.random() * 256) + 1;
    const g = Math.floor(Math.random() * 256) + 1;
    const b = Math.floor(Math.random() * 256) + 1;
    return `rgb(${r}, ${g}, ${b})`;
}

document.querySelector("button").addEventListener(
    "click", () => {
        const newColor = generateRandomColor();
        document.body.style.backgroundColor = newColor;
        h1.innerText = newColor;
        h1.style.color = "white";
    }
);