const addTarefa = document.querySelector("#adicionar-tarefa");
const descricaoTarefa = document.querySelector("#descricao-tarefa");
const divTarefas = document.querySelector("#lista-tarefas");
let listaTarefas = [];

addTarefa.addEventListener("click", adicionaTarefa);

descricaoTarefa.addEventListener("keyup", (e) => {
  if (e.keyCode == 13) {
    if (!descricaoTarefa.value) return;
    adicionaTarefa();
    limpaInput();
  }
});

function adicionaTarefa() {
  if (!descricaoTarefa.value) return;
  const p = document.createElement("p");

  p.innerHTML += `${descricaoTarefa.value} <button id='btn-remover-${listaTarefas.length}' class ='btn-remover task-${listaTarefas.length}' onclick="removeTarefa(this)">Remover</button>`;
  p.classList.add(`task-${listaTarefas.length}`);
  divTarefas.appendChild(p);
  listaTarefas.push(descricaoTarefa.value);
  localStorage.setItem("Lista_tarefas", JSON.stringify(listaTarefas));
  limpaInput();
}

function removeTarefa(e) {
  let taskToRemove = divTarefas.childNodes;
  let count = 0;
  for (let i = 0; i < divTarefas.childElementCount; i++) {
    if (e.classList.contains(taskToRemove[i].classList.value)) {
      divTarefas.removeChild(divTarefas.children[count]);
      break;
    }
    count++;
  }

  listaTarefas.splice(count, 1);
  localStorage.setItem("Lista_tarefas", JSON.stringify(listaTarefas));
}

function carregaTarefas() {
  if (localStorage.getItem("Lista_tarefas")) {
    const tasks = JSON.parse(localStorage.getItem("Lista_tarefas"));

    for (let i in tasks) {
      const p = document.createElement("p");

      p.innerHTML += `${tasks[i]} <button id='btn-remover-${i}' class ='btn-remover task-${i}' onclick="removeTarefa(this)">Remover</button>`;
      p.classList.add(`task-${i}`);
      divTarefas.appendChild(p);
    }
  }
}

function limpaInput() {
  descricaoTarefa.value = "";
  descricaoTarefa.focus();
}
