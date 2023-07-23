import React from "react";
import ReactDOM from "react-dom";
import { Login } from "./pages/login/Login";
import 'normalize.css';

const App: React.FC = () => {

  return (
    <Login />
  )
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
);