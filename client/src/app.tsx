import React from "react";
import ReactDOM from "react-dom";
import { Login } from "./pages/Login";
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