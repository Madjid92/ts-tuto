interface Todo5 {
    title: string;
    description: string;
    completed: boolean;
    createdAt: number;
  }
 
  type T8 = Omit<Todo5, 'description'|'completed'>
 
  const test11: T8 = {
    title:'dczdc',
    createdAt:4,
  }
 
  console.log(test11)