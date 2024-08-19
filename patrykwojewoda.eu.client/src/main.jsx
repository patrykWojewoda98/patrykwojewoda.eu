import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { TopMenu } from "./components/TopMenu.jsx";
import { ProjectsPage } from "./pages/ProjectsPage.jsx";
import { ReferencesPage } from "./pages/ReferencesPage.jsx";
import { ContactPage } from "./pages/ContactPage.jsx";
import "./i18n.js";
import { Footer } from "./components/Footer.jsx";
import "@fortawesome/fontawesome-free/css/all.min.css";

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
              <Footer />
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
