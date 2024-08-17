const btn = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("#productList");


// Task : take the input given by user and add it to cart present in same page
btn.addEventListener(
    "submit", function (e) {
        e.preventDefault();                          // used to avoid going to action route page after submitting
        const newProduct = input.value;
        const newLi = document.createElement('li');
        newLi.innerText = newProduct;
        ul.append(newLi);
        console.log(`${newProduct} is added to cart`)
        input.value = "";
    }
);