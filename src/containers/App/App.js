import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../../hooks/useAppContext";
import Header from "../../components/Header";
import Routes from "../../Routes";

const App = () => {
  const [{ theme }] = useContext(AppContext);
  const [currentTheme, setTheme] = useState(theme);

  useEffect(() => {
    if (theme) {
      setTheme("light-theme");
    } else setTheme("dark-theme");
  }, [theme]);

  return (
    <main className={`App ${currentTheme}`}>
      <Header />
      <Routes />
    </main>
  );
};

export default App;
