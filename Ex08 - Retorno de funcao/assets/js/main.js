function multiplicador(valor) {
  return function (n) {
    return n * valor;
  };
}

const muiltiplicaPor2 = multiplicador(2);
const muiltiplicaPor3 = multiplicador(3);
const muiltiplicaPor4 = multiplicador(4);

console.log(muiltiplicaPor2(2));
console.log(muiltiplicaPor3(2));
console.log(muiltiplicaPor4(2));
