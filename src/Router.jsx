import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layout/Layout'
import { HomeFactory } from './pages/home/HomeFactory'
import NoMatch from './pages/noMatch'
import AboutMe from './pages/aboutMe'
import ContactPage from './pages/contact'
import ProjectsPage from './pages/projectsPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: HomeFactory.create(),
      },
      {
        path: 'aboutme',
        element: <AboutMe />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
      },
      {
        path: 'projects',
        element: <ProjectsPage />,
      },
      {
        path: '*',
        element: <NoMatch />,
      },
    ],
  },
])

function Router() {
  return <RouterProvider router={router} />
}

export default Router
