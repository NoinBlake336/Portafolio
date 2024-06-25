import React from 'react'
import { BrowserRouter, Routes as ReactDomRouter, Route } from 'react-router-dom'
import Layout from '../components/Layout/Layout'
import Home from '../pages/Home/Home'

const Routes = () => {
  return (
    <BrowserRouter>
        <Layout>
            <ReactDomRouter>
                <Route path='/' element={<Home />} />
            </ReactDomRouter>
        </Layout>
    </BrowserRouter>
  )
}

export default Routes