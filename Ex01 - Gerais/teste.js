// -----------------------------------------------------------------------------------------------
// const area = document.querySelector("#number-area");
// let num = Number(prompt("Digite um numero"));

// area.innerHTML += `<p><strong>Seu numero e: ${num}</strong></p>`;
// area.innerHTML += `<p>Raiz quadrada: ${Math.sqrt(num)}</p>`;
// area.innerHTML += `<p>E inteiro? ${Number.isInteger(num)}</p>`;
// area.innerHTML += `<p>E NaN? ${Number.isNaN(num)}</p>`;
// area.innerHTML += `<p>Arredondamento para baixo: ${Math.floor(num)}</p>`;
// area.innerHTML += `<p>Arredondamento para cima: ${Math.ceil(num)}</p>`;
// area.innerHTML += `<p>Com duas casas decimais: ${num.toFixed(2)}</p>`;
// -----------------------------------------------------------------------------------------------
// const nomes = ["Guilherme", "Rodrigo", "Matheus"];
// const removidos = [];

// for (let i = 0; i < 3; i++) removidos.push(nomes.pop());

// console.log(`Removidos: ${removidos}`);

// console.log(`Nomes: ${nomes}`);
// -----------------------------------------------------------------------------------------------
// const pessoa = [
//   {
//     nome: "",
//     sobrenome: "",
//     peso: 0,
//     altura: 0,
//   },
// ];

// function salvarInfo2() {
//   let nome = document.querySelector("#first-name").value;
//   let sobrenome = document.querySelector("#last-name").value;
//   let peso = document.querySelector("#weight").value;
//   let altura = document.querySelector("#height").value;

//   pessoa.nome = nome;
//   pessoa.sobrenome = sobrenome;
//   pessoa.peso = peso;
//   pessoa.altura = altura;

//   console.log(pessoa);
// }
const form = document.querySelector("#form");
const pessoas = [];

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nome = form.querySelector("#first-name").value;
  const sobrenome = form.querySelector("#last-name").value;
  const peso = form.querySelector("#weight").value;
  const altura = form.querySelector("#height").value;

  pessoas.push({
    nome,
    sobrenome,
    peso,
    altura,
  });

  document.querySelector(
    "#pessoas-cadastradas"
  ).innerHTML += `<p>${nome} ${peso} ${altura}</p>`;

  console.log(pessoas);
});
