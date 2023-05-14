import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { deleteTodo, getTodos, postTodo, putTodo } from '../api/api';

export type TodoContextType = {
  todos: Todo[];
  filter: TodoFilterType;
  filteredTodos: Todo[];
  addTodo: (content: string) => void;
  setFilter: Dispatch<SetStateAction<TodoFilterType>>;
  removeTodo: (id: number) => void;
  changeTodo: (id: number, todoInfo: TodoInfo) => void;
  removeCompletedTodos: () => void;
};

export const TodoContext = createContext<TodoContextType | null>(null);

export function TodoContextProvider({ children }: { children: ReactNode }) {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<TodoFilterType>('all');

  useEffect(() => {
    getTodos().then((todos) => setTodos(todos));
  }, []);

  const addTodo = async (content: string) => {
    const postedTodo = await postTodo('active', content);
    setTodos([...todos, postedTodo]);
  };

  const removeTodo = async (id: number) => {
    await deleteTodo(id);
    setTodos((current) => current.filter((todo) => todo.id !== id));
  };

  const changeTodo = async (id: number, todoInfo: TodoInfo) => {
    const newTodo = await putTodo(id, todoInfo);

    setTodos((current) =>
      current.map((todo) => {
        if (todo.id === id) {
          return newTodo;
        }
        return todo;
      })
    );
  };

  const filteredTodos = useMemo(
    () => todos.filter((todo) => filter === 'all' || todo.state === filter),
    [todos, filter]
  );

  const removeCompletedTodos = async () => {
    const completedTodos = todos.filter((todo) => todo.state === 'completed');

    await Promise.all(completedTodos.map((todo) => deleteTodo(todo.id)));

    setTodos((current) => current.filter((todo) => todo.state !== 'completed'));
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        filter,
        filteredTodos,
        setFilter,
        addTodo,
        removeTodo,
        changeTodo,
        removeCompletedTodos,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
