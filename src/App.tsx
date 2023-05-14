import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './routes/Root';
import Todos from './routes/Todos';
import { TodoContextProvider } from './context/TodoContext';

const router = createBrowserRouter([
  {
    element: <Root />,
    children: [
      {
        path: '/',
        element: (
          <TodoContextProvider>
            <Todos />
          </TodoContextProvider>
        ),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
