import ReactDOM from "react-dom/client";
import App from "./App";
import ProContextProvider from "./context/ProContext";

import { BrowserRouter } from "react-router-dom";
import "./Style/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ProContextProvider>
      <App />
    </ProContextProvider>
  </BrowserRouter>
);
