import React from 'react'
import { BrowserRouter, Routes as ReactDomRouter, Route } from 'react-router-dom'
import Layout from '../components/Layout/Layout'
import Home from '../pages/Home/Home'
import Footer from '../components/Footer/Footer'
import Projects from '../pages/Projects/Projects'

const Routes = () => {
  return (
    <BrowserRouter>
        <Layout>
            <ReactDomRouter>
                <Route path='/' element={<Home />} />
                <Route path='projects' element={<Projects/>} />
            </ReactDomRouter>
        </Layout>
        <Footer>

        </Footer>
    </BrowserRouter>
  )
}

export default Routes