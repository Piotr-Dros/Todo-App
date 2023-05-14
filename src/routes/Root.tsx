import { Outlet } from 'react-router-dom';
import useDarkMode from '../hooks/useDarkMode';

const Root = () => {
  const { theme } = useDarkMode();

  console.log(theme);
  return (
    <div data-theme={theme}>
      <Outlet />
    </div>
  );
};

export default Root;
