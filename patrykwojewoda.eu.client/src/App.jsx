import React from "react";
import useLocalStorage from "use-local-storage";
import Button from "react-bootstrap/Button";
import "./App.css";

export const App = () => {
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDark] = useLocalStorage("isDark", preference);

  return (
    <div className="App" data-theme={isDark ? "dark" : "light"}>
      <h1 className="title">Moja strona Internetowa</h1>
      <div className="box">
        <h2>Napis</h2>
        <Button>Press me</Button>
      </div>
    </div>
  );
};

export default App;
