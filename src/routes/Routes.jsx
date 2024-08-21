import React from 'react'
import { BrowserRouter, Routes as ReactDomRouter, Route } from 'react-router-dom'
import Layout from '../components/Layout/Layout'
import Home from '../pages/Home/Home'
import Projects from '../pages/Projects/Projects'
import Project from '../pages/Project/Project'
import Services from '../pages/Services/Services'
const Routes = () => {
  return (
    <BrowserRouter>
        <Layout>
            <ReactDomRouter>
                <Route path='/' element={<Home />} />
                <Route path='projects'>
                  <Route index element={<Projects/>} />
                  <Route path=':project' element={<Project/>} />
                </Route>
                <Route path='services' element={<Services/>}>
                </Route>
            </ReactDomRouter>
        </Layout>

    </BrowserRouter>
  )
}

export default Routes