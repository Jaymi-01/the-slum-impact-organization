import React from 'react'
import {
    createRoutesFromElements,
    createBrowserRouter,
    Route,
    RouterProvider,
  } from "react-router-dom";

const App = () => {
  
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <route>
        <Route path='/' element={<Root />}></Route>
      </route>
    )
  );

  return <RouterProvider router={router}/>
  
}

export default App