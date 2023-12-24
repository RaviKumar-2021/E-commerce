import Home from './Components/Home/Home'
import Navbar from './Components/Navigation/Navbar'
import FilterData from './Components/FilterData/FilterData'
import { Router, Route, createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './Components/Login/Singup/Login';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/filter",
      element: <FilterData />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);
  return (
   <>
   <Navbar/>
    <RouterProvider router={router}/>
   </>
  )
}

export default App
