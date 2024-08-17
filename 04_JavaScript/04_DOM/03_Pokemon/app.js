// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

let baseURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
let original_div = document.querySelector("#container");

for (let i = 1; i <= 151; i++){
    let img = document.createElement('img');
    img.src = `${baseURL}${i}.png`;;

    let span = document.createElement('span');
    span.innerText = `#${i}`;
    
    let div = document.createElement('div');
    div.classList.add("pokemon");    
    div.appendChild(img)
    div.appendChild(span);
    
    original_div.appendChild(div);    
}