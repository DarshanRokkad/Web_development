const b2 = document.querySelector('#btn');
b2.onclick = function () {
    alert("This is event property")
}

document.querySelector("#btw").addEventListener(
    "click", () => {
        alert("This is event listener.");
        alert("Hello buddy");
    }
);