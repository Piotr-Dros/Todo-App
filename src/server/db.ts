type Todo = {
  id: number;
  state: 'active' | 'completed';
  content: string;
};

const todos: Todo[] = [
  {
    id: 1,
    state: 'active',
    content: 'Wake up',
  },
];

export default todos;
