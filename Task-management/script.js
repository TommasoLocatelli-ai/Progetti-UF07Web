let tasks = []; // Array per memorizzare le attività tramite id,name e status
let currentId = 0; // Contatore per gli ID delle attività

function addTask() { // Funzione per aggiungere un'attività
  const name = document.getElementById('taskName').value.trim(); // Ottiene il nome e lo stato dell'attività dall'input
  const status = document.getElementById('taskStatus').value;
  if (name) { // Verifica se il nome non è vuoto
    tasks.push({ id: currentId++, name, status }); // Aggiunge l'attività all'array con un ID unico
    document.getElementById('taskName').value = ''; // Resetta l'input del nome dell'attività
    renderTasks(); // Rende visibili le attività aggiornate
  } 
} 

function deleteTask(id) { // Funzione per rimuovere un'attività in base al suo ID
  tasks = tasks.filter(task => task.id !== id);
  renderTasks();
}

function editTask(id) { // Funzione per modificare il nome di un'attività
  const newName = prompt("Nuovo nome dell'attività:"); // Chiede all'utente di inserire un nuovo nome per l'attività
  if (newName) {
    const task = tasks.find(t => t.id === id); // Trova l'attività da modificare in base all'ID e sostituisce il nome
    task.name = newName;
    renderTasks();
  }
}

function changeStatus(id) { // Funzione per cambiare lo stato di un'attività
  const task = tasks.find(t => t.id === id); 
  const newStatus = prompt("Nuovo stato (da-fare, in-corso, completato):", task.status); // Chiede all'utente di inserire un nuovo stato per l'attività
  if (["da-fare", "in-corso", "completato"].includes(newStatus)) {  // Verifica se il nuovo stato è valido
    task.status = newStatus;
    renderTasks();
  }
}