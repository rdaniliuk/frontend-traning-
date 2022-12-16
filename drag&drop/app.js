const items = document.querySelectorAll(".item");
const placeholders = document.querySelectorAll(".placeholder");

items.forEach((item) => item.addEventListener("dragstart", dragStart));
items.forEach((item) => item.addEventListener("dragend", dragEnd));

for (const placeholder of placeholders) {
  placeholder.addEventListener("dragover", dragOver);
  placeholder.addEventListener("dragenter", dragEnter);
  placeholder.addEventListener("dragleave", dragLeave);
  placeholder.addEventListener("drop", dragDrop);
}

function dragStart(e) {
  e.target.classList.add("hold");
  setTimeout(() => e.target.classList.add("hide"), 0);
  console.log(e.target);
}
function dragEnd(e) {
  e.target.className = "item";
}

function dragOver(e) {
  e.preventDefault();
}
function dragEnter(e) {
  e.target.classList[0] === "placeholder"
    ? e.target.classList.add("hovered")
    : null;
}
function dragLeave(e) {
  e.target.classList.remove("hovered");
}
function dragDrop(e) {
  const holdEl = document.querySelector(".hold");
  const hovEl = document.querySelector(".hovered");
  e.target.classList.remove("hovered");
  hovEl.append(holdEl);
}
