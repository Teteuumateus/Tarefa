// Função para adicionar uma nova tarefa
function addTarefa(event) {
  event.preventDefault();

  const inputTarefa = document.querySelector("#criar--tarefa");
  const container = document.querySelector("#tarefas");

  if (!inputTarefa.value.trim()) {
    inputTarefa.classList.add("atencao");
    setTimeout(() => {
      inputTarefa.classList.remove("atencao");
    }, 500);
    return;
  }

  const novaTarefa = document.createElement("article");
  novaTarefa.classList.add("tarefa--item");
  novaTarefa.innerHTML = `<input type="checkbox" class="tarefa--check" name="concluido">
                          <h2 class="tarefa--titulo">${inputTarefa.value.trim()}</h2>`;

  container.append(novaTarefa);
  inputTarefa.value = ""; // Limpar o input após adicionar a tarefa

  atualizarContador(); // Atualizar o contador de tarefas
}

// Função para alternar o estado da tarefa (concluída ou não)
function alternarTarefa(event) {
  const containerCheck = event.target.closest('.tarefa--item');
  if (event.target.checked) {
    containerCheck.classList.add("concluida");
  } else {
    containerCheck.classList.remove("concluida");
  }
  atualizarContador(); // Atualizar o contador de tarefas
}

// Adicionar eventos aos checkboxes existentes e novos
function adicionarEventos() {
  const todosChecks = document.querySelectorAll(".tarefa--check");
  todosChecks.forEach(check => {
    check.addEventListener("change", alternarTarefa);
  });
}

// Atualizar o contador de tarefas
function atualizarContador() {
  const numTarefas = document.querySelectorAll(".tarefa--item").length;
  const contador = document.querySelector(".counter");
  if (numTarefas === 0) {
    contador.textContent = "Tudo feito";
  } else {
    contador.textContent = `${numTarefas} ${numTarefas > 1 ? "tarefas" : "tarefa"}`;
  }
}

// Adicionar o evento de clique ao botão de adicionar tarefa
const botaoAdd = document.querySelector("#add--tarefa");
botaoAdd.addEventListener("click", addTarefa);

// Adicionar eventos para os checkboxes existentes ao carregar a página
document.addEventListener("DOMContentLoaded", adicionarEventos);
