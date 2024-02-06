
import {  RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout/Layout'
import StartFramework from './components/StartFramework/StartFramework';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import NotFound from './components/NotFound/NotFound';

function App() {
 

  const routers = createBrowserRouter([{

   path:'', element:<Layout/>, children:[
    {index:true, element:<StartFramework/>},
    {path:'about', element:<About/>},
    {path:'portfolio', element:<Portfolio/>},
    {path:'contact', element:<Contact/>},
    {path:'*', element:<NotFound/>},
  ]     
  }]);


  return <>
  
      <RouterProvider router={routers}></RouterProvider>
    </>
 
}

export default App
