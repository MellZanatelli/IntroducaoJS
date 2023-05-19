const listElement = document.querySelector("#app ul")
const inputElement = document.querySelector("#app input")
const buttonElement = document.querySelector("#app button")

const tarefas = ["Estudar para prova", "Dormir cedo"]

for (const iterator of tarefas) {
    const tarefaElement = document.createElement("li")
    const tarefaText = document.createTextNode(iterator)

    tarefaElement.appendChild(tarefaText)
    listElement.appendChild(tarefaElement)

    //console.log(iterator)
}

//console.log(listElement, inputElement, buttonElement)