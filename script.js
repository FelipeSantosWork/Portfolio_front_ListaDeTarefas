const tasks = [
  { title: "Comprar comida para o gato", type: "Urgente" },
  { title: "Consertar Computador", type: "Importante" },
  { title: "Beber água", type: "Normal" },
  { title: "Enviar relatório trimestral", type: "Importante" },
  { title: "Fazer exercícios físicos", type: "Normal" },
  { title: "Agendar consulta médica", type: "Urgente" },
  { title: "Ler pelo menos um capítulo de um livro", type: "Normal" },
  { title: "Limpar a despensa", type: "Importante" },
  { title: "Pagar a conta de energia", type: "Urgente" },
  { title: "Assistir a um documentário interessante", type: "Normal" },
];

function renderElements(tasksList) {
  const ulTasks = document.querySelector(".tasks__list");
  console.log(ulTasks);

  ulTasks.innerHTML = "";

  for (let i = 0; i < tasksList.length; i++) {
    const currentTask = tasksList[i];
    const task = createTaskItem(currentTask);
    ulTasks.append(task);
  }
}


function createTaskItem(taskInfo) {
  const liTask = document.createElement("li");

  const divTaskInfo = document.createElement("div");

  const spanTaskType = document.createElement("span");
  const pTaskTitle = document.createElement("p");

  const buttonRemoveTask = document.createElement("button");

  //  hierarquia:
  liTask.append(divTaskInfo, buttonRemoveTask);
  divTaskInfo.append(spanTaskType, pTaskTitle);

  //Classes:
  liTask.classList.add("task__item");
  divTaskInfo.classList.add("task-info__container");
  spanTaskType.classList.add("task-type");
  buttonRemoveTask.classList.add("task__button--remove-task");

  //Botão de excluir:

  buttonRemoveTask.addEventListener("click", function(){
    const index = tasks.indexOf(taskInfo);

    tasks.splice(index, 1);
    renderElements(tasks);
  })

  //Título da tarefa:
  pTaskTitle.innerText = taskInfo.title;

  //Classificação de importância:
  if (taskInfo.type.toLowerCase() === "urgente") {
    spanTaskType.classList.add("span-urgent")
  } else if (taskInfo.type.toLowerCase() === "importante") {
    spanTaskType.classList.add("span-important")
  } else if (taskInfo.type.toLowerCase() === "normal") {
    spanTaskType.classList.add("span-normal")
  }

  return liTask;
}



function addTaskEvent(tasksList) {
  const title = document.querySelector(".form__input--text");
  const type = document.querySelector(".form__input--priority");
  const buttonAddTask = document.querySelector(".form__button--add-task");

  buttonAddTask.addEventListener("click", function (event) {
    event.preventDefault();

    const newTask = {
      title: title.value,
      type: type.value };

    tasksList.push(newTask);

    renderElements(tasksList);
  })

}


renderElements(tasks);
addTaskEvent(tasks);





