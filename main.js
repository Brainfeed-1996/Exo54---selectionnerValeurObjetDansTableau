//Comment sélectionner une valeur d'un objet
// qui est dans un tableau

const todoList = [
  "Manomètre numérique",
  "Pompe à vide",
  {
    text: "Emplacement de la todolist",
    done: false,
  },
  "Thermométre",
];

console.log(todoList[2].text);
