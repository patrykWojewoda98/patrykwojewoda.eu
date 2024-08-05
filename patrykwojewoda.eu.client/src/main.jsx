import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TopMenu } from "./components/TopMenu.jsx";
import { AboutMePage } from "./pages/AboutMePage.jsx";
import { ProjectsPage } from "./pages/ProjectsPage.jsx";
import { ReferencesPage } from "./pages/ReferencesPage.jsx";
import { ContactPage } from "./pages/ContactPage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <TopMenu />
              <App />
            </>
          }
        />
        <Route
          path="/about_me"
          element={
            <>
              <TopMenu />
              <AboutMePage />
            </>
          }
        />
        <Route
          path="/projects"
          element={
            <>
              <TopMenu />
              <ProjectsPage />
            </>
          }
        />
        <Route
          path="/references"
          element={
            <>
              <TopMenu />
              <ReferencesPage />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <TopMenu />
              <ContactPage />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
