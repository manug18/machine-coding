import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import PlayerDetails from "./components/PlayerDetails";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <Home />
      </header>
    </div>
    // <Router>
    //   {/* <Switch> */}
    //   <Route path="/">{/* Render your Home component here */}</Route>
    //   <Route path="/player/:playerId">
    //     <PlayerDetails />
    //   </Route>
    //   {/* </Switch> */}
    // </Router>
  );
}

export default App;
