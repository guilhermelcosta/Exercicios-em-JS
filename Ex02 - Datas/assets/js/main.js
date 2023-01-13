// const date = new Date();
// const weekDay = date.getDay();
// const month = date.getMonth();
// const weekDayString = getWeekDayString(weekDay);
// const monthString = getMonthString(month);
// const hour = `${date.getHours()}:${date.getMinutes()}`;
// const h1 = document.createElement("h1");
// const result = document.querySelector(".main-container");

// h1.innerHTML = `${weekDayString}, ${date.getDate()} de ${monthString} de ${date.getFullYear()}, ${hour}`;
// result.appendChild(h1);

// function getWeekDayString(weekDay) {
//   const result = [
//     "Domingo",
//     "Segunda-feira",
//     "Terça-feira",
//     "Quarta-feira",
//     "Quinta-feira",
//     "Sexta-feira",
//     "Sábado",
//   ];

//   return result[weekDay];
// }

// function getMonthString(month) {
//   const result = [
//     "Janeiro",
//     "Fevereiro",
//     "Março",
//     "Abril",
//     "Maio",
//     "Junho",
//     "Julho",
//     "Agosto",
//     "Setembro",
//     "Outubro",
//     "Novembro",
//     "Dezembro",
//   ];

//   return result[month];
// }

let data = new Date().toLocaleString("pt-br", { dateStyle: "full", timeStyle: "short" });
// new Intl.DateTimeFormat('pr-br', { dateStyle: "full", timeStyle: "short" }).format(new Date())
const h1 = document.createElement("h1");
const result = document.querySelector(".main-container");

h1.innerHTML = `${data}`;
result.appendChild(h1);
