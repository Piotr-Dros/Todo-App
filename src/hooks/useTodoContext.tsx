import { useContext } from 'react';
import { TodoContext, TodoContextType } from '../context/TodoContext';

export default function useTodoContext() {
  return useContext(TodoContext) as TodoContextType;
}
