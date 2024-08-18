const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: "application/json" } };
        const res = await axios.get("https://icanhazdadjoke.com", config);
        return res.data.joke;
    }
    catch (err) {
        console.log("Unable to fetch the joke");
        return "No jokes available";
    }
};

const btn = document.querySelector("button");
const ul = document.querySelector("#jokes");

const addNewJoke = async () => {
    const newLi = document.createElement("li");
    const newJoke = await getDadJoke();
    console.log(newJoke, "main");
    newLi.innerText = newJoke;
    ul.append(newLi);
}

btn.addEventListener("click", addNewJoke);