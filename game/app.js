const board = document.querySelector("#board");
const colors = [
  "#009D91",
  "#FFA700",
  "#00665E",
  "#14D100",
  "#BC2F36",
  "purple",
];
const SQUARES_NUMBER = 300;

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  square.addEventListener("mouseover", () => setColor(square));
  square.addEventListener("mouseleave", () => remove(square));
  board.append(square);
}

function setColor(el) {
  const color = getRandomColor();
  el.style.backgroundColor = color;
  el.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function remove(el) {
  el.style.backgroundColor = "#1d1d1d";
  el.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}
