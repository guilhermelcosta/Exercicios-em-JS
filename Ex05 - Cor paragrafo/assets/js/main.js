const container = document.querySelector(".main-container");
const paragraphs = container.querySelectorAll("p");
const bodyBackgroundColor = getComputedStyle(document.body).backgroundColor;

for (let p of paragraphs) {
  p.style.backgroundColor = bodyBackgroundColor;
  p.style.color = "white";
}
