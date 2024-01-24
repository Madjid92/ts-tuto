interface Todo {
    title: string;
    description: string;
  } 
  function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>): Todo {
    return { ...todo, ...fieldsToUpdate };
  }

const test4:Todo = {title :'book', description:'myBook'};
const valueToUpdate  = {description : "test", dd: "c"};

const r = updateTodo(test4, valueToUpdate);
console.log(r);