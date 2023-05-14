import classNames from 'classnames';
import useDarkMode from '../hooks/useDarkMode';
import TodoForm from '../components/TodoForm';
import useTodoContext from '../hooks/useTodoContext';
import TodoList from '../components/TodoList';

const Todos = () => {
  const { theme, toggleDarkMode } = useDarkMode();
  const { todos } = useTodoContext();

  const imageClasses = classNames(
    'absolute inset-x-0 top-0 h-[28%] -z-10',
    'bg-cover',
    {
      'bg-light-mobile sm:bg-light-desktop': theme === 'light',
      'bg-dark-mobile sm:bg-dark-desktop': theme === 'dark',
    }
  );

  const darkModeIconSrc =
    theme === 'light'
      ? '/src/assets/images/icon-moon.svg'
      : '/src/assets/images/icon-sun.svg';

  console.log(todos);

  return (
    <div className="relative bg-neutral-default min-h-screen isolate px-6 py-5">
      <div className="max-w-md mx-auto">
        <div className={imageClasses}></div>
        <div className="flex justify-between items-center my-4">
          <h1 className="text-white text-2xl font-bold tracking-[0.35em]">
            TODO
          </h1>
          <img
            src={darkModeIconSrc}
            className="cursor-pointer"
            onClick={toggleDarkMode}
            alt="dark mode"
          />
        </div>
        <TodoForm />
        <TodoList />
      </div>
    </div>
  );
};

export default Todos;
