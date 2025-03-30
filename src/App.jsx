import React from 'react'
import Layout from './layout/Layout'
import {
    createRoutesFromElements,
    createBrowserRouter,
    Route,
    RouterProvider,
  } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Exco from './pages/Exco';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/project' element={<Projects/>}></Route>
        <Route path='/exco' element={<Exco/>}></Route>
      </Route>
    )
  );

  return <RouterProvider router={router}/>
  
}

export default App