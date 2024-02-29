// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector("#container");
const baseURL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
let j = 1;

function loadImages(numImages = 10) {
  for (let i = 1; i <= 24; i++) {
    const pokemon = document.createElement("div");
    pokemon.classList.add("pokemon");
    const label = document.createElement("span");
    label.innerText = `#${j}`;
    const newImg = document.createElement("img");
    newImg.src = `${baseURL}${j}.png`;

    pokemon.appendChild(newImg);
    pokemon.appendChild(label);
    container.appendChild(pokemon);
    j++;
  }
}

loadImages();

window.addEventListener("scroll", () => {
  console.log("WS", window.scrollY);
  console.log("WI", window.innerHeight);
  console.log("DSH", document.documentElement.scrollHeight);
  if (
    window.scrollY + window.innerHeight >=
    document.documentElement.scrollHeight - 1
  ) {
    loadImages();
  }
});
