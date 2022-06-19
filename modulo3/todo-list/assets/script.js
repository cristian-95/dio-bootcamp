const form = document.getElementById("entrada");
const novaTarefa = document.getElementById("nova-tarefa");

form.addEventListener('submit', event => {
    if (novaTarefa.value.length > 0){ // previni a criação de tarefas vazias
        gerarTarefa(novaTarefa.value);
        novaTarefa.value = '';
    }
    event.preventDefault();
}, false);

function gerarTarefa(tarefa){
    let div = document.createElement("div");
    div.setAttribute("class", "tarefa");
    
    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    
    let p = document.createElement("p");
    p.setAttribute("class", "tarefa-txt");
    let novaTarefa = document.createTextNode(tarefa);
    p.appendChild(novaTarefa);

    div.appendChild(checkbox);
    div.appendChild(p);

    let lista = document.getElementById("lista-tarefas");
    lista.appendChild(div);
}