import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { Alert } from "./components/Alert";
import Navbar from "./components/Navbar";
import { AlertState } from "./context/alert/AlertState";
import { FireBaseState } from "./context/fireBase/FireBaseState";
import { About } from "./pages/About";
import { Home } from "./pages/Home";

const App = () => {
  return (
    <FireBaseState>
      <AlertState>
        <BrowserRouter>
          <Navbar />
          <div className="container pt-4">
            <Alert />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
            </Switch>
          </div>
        </BrowserRouter>
      </AlertState>
    </FireBaseState>
  );
};

export default App;
