import React from "react";
import {
  BrowserRouter,
  Routes as ReactDomRouter,
  Route,
} from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home from "../pages/Home/Home";
import Project from "../pages/Project/Project";

const Routes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <ReactDomRouter>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path=":kind/:slug" element={<Project />} />
          </Route>
        </ReactDomRouter>
      </Layout>
    </BrowserRouter>
  );
};

export default Routes;
