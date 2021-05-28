type ToDo = {
  title: string;
  description: string;
  label: string;
  prioriy: 'high' | 'low';
};

function updateTodo(todo: ToDo, fieldsToUpdate: Partial<ToDo>): ToDo {
  return {...todo, ...fieldsToUpdate};
}

const todo: ToDo = {
  title: 'learn typescript',
  description: 'study hard',
  label: 'ihi',
  prioriy: 'high',
};

updateTodo(todo, {prioriy: 'low'});