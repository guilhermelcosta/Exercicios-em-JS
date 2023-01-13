const elements = [
  { tag: "p", texto: "Frase 1" },
  { tag: "div", texto: "Frase 2" },
  { tag: "section", texto: "Frase 3" },
  { tag: "footer", texto: "Frase 4" },
];

const container = document.querySelector(".main-container");
const div = document.createElement("div");

for (let i in elements) {
  const { tag, texto: text } = elements[i];
  const newElement = document.createElement(tag);
  const newText = document.createTextNode(text);

  newElement.appendChild(newText);
  div.appendChild(newElement);
}
container.appendChild(div);
