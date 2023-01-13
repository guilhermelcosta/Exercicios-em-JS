const form = document.querySelector("#form-imc");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const peso = document.querySelector("#input-weight").value;
  const altura = document.querySelector("#input-height").value;
  const p = document.createElement("p");
  const resultado = document.querySelector("#result-container");

  resultado.innerHTML = "";
  resultado.appendChild(p);
  document.querySelector("#result-container").classList.add("active");

  if (calcularIMC(peso, altura) != undefined)
    p.innerHTML = `<p>IMC = ${calcularIMC(peso, altura)[1]} - ${calcularIMC(peso, altura)[0]}</p>`;
  else p.innerHTML = `<p>Peso ou altura inválidos!</p>`;
});

function calcularIMC(peso, altura) {
  let resultado = [
    "Abaixo do peso",
    "Peso normal",
    "Sobrepeso",
    "Obesidade grau 1",
    "Obesidade grau 2",
    "Obesidade grau 3",
  ];
  const imc = (peso / altura ** 2).toFixed(2);

  switch (true) {
    case imc < 18.5:
      return [resultado[0], imc];

    case imc >= 18.5 && imc < 24.9:
      return [resultado[1], imc];

    case imc >= 25 && imc < 29.9:
      return [resultado[2], imc];

    case imc >= 30 && imc < 34.9:
      return [resultado[3], imc];

    case imc >= 35 && imc < 39.9:
      return [resultado[4], imc];

    case imc > 40:
      return [resultado[5], imc];

    default:
      break;
  }
}
