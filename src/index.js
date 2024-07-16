import ReactDOM from "react-dom/client";
import App from "./App";
import ProContextProvider from "./context/ProContext";
import { BrowserRouter } from "react-router-dom";
import "./Style/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
// const BASE_PATH = '/public_html'; 

root.render(
  // <BrowserRouter  basename={BASE_PATH}>
 <BrowserRouter  > 
    <ProContextProvider>
      <App />
    </ProContextProvider>
  </BrowserRouter>
);
