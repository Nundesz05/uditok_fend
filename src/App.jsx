import './App.css'
import Layout from './Layout'
import Nevjegy from './pages/Nevjegy';
import Notfound from './pages/Notfound';
import Szerkeszt from './pages/Szerkeszt';
import Uditok from './pages/Uditok';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {

  const router = createBrowserRouter([
    {element: <Layout/>, children: [
      {path: '/', element: <Uditok/>},
      {path: '/szerkeszt', element: <Szerkeszt/>},
      {path: '/nevjegy', element: <Nevjegy/>},
      {path: '/nevjegy', element: <Notfound/>}
    ]}
  ]);

  return (
    <div className="app">
      <RouterProvider router={router}/>  
    </div>
  )
}

export default App
