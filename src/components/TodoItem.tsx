import classNames from 'classnames';
import { HTMLAttributes, useState } from 'react';
import Card from './Card';
import Checkbox from './Checkbox';
import useTodoContext from '../hooks/useTodoContext';

type TodoItemProps = HTMLAttributes<HTMLDivElement> & {
  todo: Todo;
};

const TodoItem = ({ todo, className }: TodoItemProps) => {
  const [isChecked, setIsChecked] = useState(todo.state === 'completed');
  const { changeTodo, removeTodo } = useTodoContext();

  const cardClasses = classNames(className, 'flex');
  const contentClasses = classNames({
    'line-through text-blue-disabled': isChecked,
  });

  const handleChange = () => {
    setIsChecked((prev) => !prev);
    changeTodo(todo.id, {
      content: todo.content,
      state: todo.state === 'active' ? 'completed' : 'active',
    });
  };

  return (
    <Card className={cardClasses}>
      <Checkbox isChecked={isChecked} onChange={handleChange} />
      <span className={contentClasses}>{todo.content}</span>
      <span
        className="w-3 self-end ml-auto cursor-pointer"
        onClick={() => removeTodo(todo.id)}
      >
        <img src="/src/assets/images/icon-cross.svg" alt="remove" />
      </span>
    </Card>
  );
};

export default TodoItem;
