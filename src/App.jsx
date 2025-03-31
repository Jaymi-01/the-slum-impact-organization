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
import Support from './pages/Support';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/projects' element={<Projects/>}></Route>
        <Route path='/exco' element={<Exco/>}></Route>
        <Route path='/support' element={<Support/>}></Route>
      </Route>
    )
  );

  return <RouterProvider router={router}/>
  
}

export default App