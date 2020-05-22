import React, { useContext } from "react";
import { AppContext } from "../../hooks/useAppContext";
import Header from "../../components/Header";
import Routes from "../../Routes";

const App = () => {
  const [state] = useContext(AppContext);

  return (
    <main className="App light-theme">
      <Header />
      <Routes />
    </main>
  );
};

export default App;
