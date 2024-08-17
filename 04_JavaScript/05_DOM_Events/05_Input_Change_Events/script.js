const liveUpdatetxt = document.querySelector("#liveUpdatetxt");
const Updatetxt = document.querySelector("#Updatetxt");

// updates text immediately on typing
liveUpdatetxt.addEventListener(
    "input", () => {
        document.querySelector("#liveUpdateh1").innerText = liveUpdatetxt.value;
    }
)


// updates text only when we come out of the input text box
Updatetxt.addEventListener(
    "change", () => {
        document.querySelector("#Updateh1").innerText = Updatetxt.value;
    }
)