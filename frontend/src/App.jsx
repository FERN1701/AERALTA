import { RouterProvider } from 'react-router-dom';
import { router } from './routes/AppRoutes'; // Adjust path if router file is elsewhere (e.g., './routes/router')

function App() {
  return <RouterProvider router={router} />;
}

export default App;