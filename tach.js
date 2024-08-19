// document.addEventListener('DOMContentLoaded', function() {
//   const inputTask = document.querySelector('.inputTask');
//   const addTaskButton = document.querySelector('.addTask');
//   const taskList = document.querySelector('.List');

//   // Fonction pour ajouter une tâche
//   function addTask() {
//     const taskText = inputTask.value.trim();
//     if (taskText === '') return;

//     // Crée un élément <li> pour la tâche
//     const taskItem = document.createElement('li');
//     taskItem.textContent = taskText;

//     // Crée un bouton de suppression pour la tâche
//     const deleteButton = document.createElement('button');
//     deleteButton.textContent = 'delete';
//     deleteButton.addEventListener('click', function() {
//       taskList.removeChild(taskItem);
//     });

//     // Ajoute le bouton de suppression à la tâche
//     taskItem.appendChild(deleteButton);

//     // Ajoute la tâche à la liste
//     taskList.appendChild(taskItem);

//     // Efface le champ de texte
//     inputTask.value = '';
//   }

//   // Ajoute un événement au bouton "Ajouter une tâche"
//   addTaskButton.addEventListener('click', addTask);

//   // Permet d'ajouter une tâche en appuyant sur la touche Entrée
//   inputTask.addEventListener('keypress', function(e) {
//     if (e.key === 'Enter') {
//       addTask();
//     }
//   });
// });
