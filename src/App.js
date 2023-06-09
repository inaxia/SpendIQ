import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import { HashRouter, Routes, Route } from "react-router-dom";

import LinearProgress from '@mui/material/LinearProgress';

import AuthContainer from "./components/auth/AuthContainer";
import PagesContainer from "./components/pages/PagesContainer";
import Profile from "./components/pages/profile/Profile";
import FinanceTracker from "./components/pages/financeTracker/FinanceTracker";
import Dashboard from "./components/pages/dashboard/Dashboard";

import './App.scss';

function App() {
  const loading = useSelector((store) => store.app.barLoading);

  return (
    <Suspense fallback={<div>Please wait while loading...</div>}>
      {loading ? <LinearProgress /> : ""}

      <div className="app">
        <HashRouter>
          <Routes>
            <Route path="/" element={<AuthContainer />}></Route>

            <Route path="/auth/login" element={<AuthContainer />}></Route>

            <Route path="/pages/" element={<PagesContainer />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="financeTracker" element={<FinanceTracker />} />
              <Route path="profile" element={<Profile/>} />
            </Route>

            <Route path="*" element={<AuthContainer />} />
          </Routes>
        </HashRouter>
      </div>
    </Suspense>
  );
}

export default App;
