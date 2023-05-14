import { useEffect, useMemo, useState } from 'react';
import useTodoContext from '../hooks/useTodoContext';
import Card from './Card';
import TodoItem from './TodoItem';
import FilterMenu from './FilterMenu';

const TodoList = () => {
  const { todos, filteredTodos, removeCompletedTodos } = useTodoContext();
  const [isDesktop, setIsDesktop] = useState(false);

  const count = useMemo(
    () =>
      todos.reduce((acc, todo) => (todo.state === 'active' ? acc + 1 : acc), 0),
    [todos]
  );

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 640);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex flex-col mt-2 shadow-lg">
      {filteredTodos.map((todo, index) => {
        const classes = index === 0 ? 'rounded-t-md' : '';
        return <TodoItem key={todo.id} todo={todo} className={classes} />;
      })}
      <Card className="rounded-b-md flex justify-between">
        <span className="text-xs text-blue-placeholder">
          {count} items left
        </span>
        {isDesktop && <FilterMenu isDesktop={isDesktop} />}
        <span
          className="text-xs text-blue-placeholder cursor-pointer hover:text-blue-main"
          onClick={removeCompletedTodos}
        >
          Clear completed
        </span>
      </Card>
      {!isDesktop && <FilterMenu isDesktop={isDesktop} />}
    </div>
  );
};

export default TodoList;
