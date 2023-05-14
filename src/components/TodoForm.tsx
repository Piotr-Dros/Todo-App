import { ChangeEvent, FormEventHandler, useState } from 'react';
import Card from './Card';
import Checkbox from './Checkbox';
import useTodoContext from '../hooks/useTodoContext';

const TodoForm = () => {
  const [todoInput, setTodoInput] = useState('');
  const { addTodo } = useTodoContext();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodoInput(e.target.value);
  };

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    addTodo(todoInput.trim());
    setTodoInput('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Card className="flex items-center rounded-md">
        <Checkbox isChecked={false} onChange={() => null} />
        <input
          type="text"
          className="w-full placholder:text-blue-placeholder bg-transparent text-sm caret-primary"
          placeholder="Create a new todo..."
          value={todoInput}
          onChange={handleChange}
        />
      </Card>
    </form>
  );
};

export default TodoForm;
