export {};

declare global {
  type TodoState = 'active' | 'completed';
  type Todo = {
    id: number;
    state: TodoState;
    content: string;
  };
  type TodoInfo = Omit<Todo, 'id'>;

  type TodoFilterType = TodoState | 'all';
}
