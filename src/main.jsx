import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createHashRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home.jsx'
import CourseList from './components/CourseList.jsx'
import LoginForm from './components/LoginForm.jsx'
import CourseDetail from './components/courseDetails.jsx'

// import { HashRouter } from 'react-router'


const router = createHashRouter(
  [
    {
      path: '/',
      Component: App,
      children: [
        {
          index: true,
          Component: Home
        },
                { 
          path: '/components/login/:loginId?', 
          Component: LoginForm 
        },
        {
          path: '/components/courses/:courseListId?',
          Component: CourseList,
        },
        { 
          path: 'components/courseDetails/:id?', 
          Component: CourseDetail, 
        }
        

        
      ]
   }
  ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)