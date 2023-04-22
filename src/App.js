import React, { Suspense } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import LinearProgress from '@mui/material/LinearProgress';

import AuthContainer from "./components/auth/AuthContainer";

import './App.scss';

function App() {
  const loading = false;

  return (
    <Suspense fallback={<div>Please wait while loading...</div>}>
      {loading ? <LinearProgress /> : ""}

      <div className="app">
        <HashRouter>
          <Routes>
            <Route path="/" element={"LANDING PAGE"}></Route>

            <Route path="/auth/login" element={<AuthContainer />}></Route>

            <Route path="/pages/" element={"PAGES CONTAINER"}>
              <Route path="dashboard" element={"DASHBOARD"} />
              <Route path="profile" element={"PROFILE"} />
            </Route>

            <Route path="*" element={<AuthContainer />} />
          </Routes>
        </HashRouter>
      </div>
    </Suspense>
  );
}

export default App;
