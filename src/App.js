import "./App.css";
import MainNavbar from "./componant/MainNavbar";
import Newscontainer from "./componant/Newscontainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import React from "react";

export default function App() {
  return (
    <div>
      <div>
        <BrowserRouter>
          <MainNavbar />
          <Routes>
            <Route
              index
              element={<Newscontainer pageSize={12} category={"general"} />}
            ></Route>
            <Route
              exact
              key="business"
              path="/business"
              element={
                <Newscontainer
                  key="business"
                  pageSize={12}
                  category={"business"}
                />
              }
            ></Route>
            <Route
              path="/entertainment"
              element={
                <Newscontainer
                  key="entertainment"
                  pageSize={12}
                  category={"entertainment"}
                />
              }
            ></Route>
            <Route
              path="/health"
              element={
                <Newscontainer key="health" pageSize={12} category={"health"} />
              }
            ></Route>
            <Route
              key={"science"}
              path="/science"
              element={
                <Newscontainer
                  key="science"
                  pageSize={12}
                  category={"science"}
                />
              }
            ></Route>
            <Route
              path="/sports"
              element={
                <Newscontainer key="sports" pageSize={12} category={"sports"} />
              }
            ></Route>
            <Route
              path="/technology"
              element={
                <Newscontainer
                  key="technology"
                  pageSize={12}
                  category={"technology"}
                />
              }
            ></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}
