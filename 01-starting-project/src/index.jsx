import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";

// pass html element to add component init it
const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(<App />);
