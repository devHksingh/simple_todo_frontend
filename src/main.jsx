import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import SignUp from './pages/SignUp.jsx'
import ErrorPage from './ErrorPage.jsx'
import Profile from './pages/Profile.jsx'
import CreateNewTodo from './pages/CreateNewTodo.jsx'
import SingleTodo from './pages/singleTodo.jsx'

const  router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>} errorElement={<ErrorPage/>}>
      <Route path='' element={<Home/>}/>
      <Route path='signIn' element={<Login/>}/>
      <Route path='signUp' element={<SignUp/>}/>
      <Route path='profile' element={<Profile/>}/>
      <Route path='addTodo' element={<CreateNewTodo/>}/>
      <Route path='singleTodo/:todoId' element={<SingleTodo/>}/>
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>,
)
