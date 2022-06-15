import ReactDOM from "react-dom/client";
import App from "./Bootstrap";
import "./index.css";

const rootId = "root";
const root = document.getElementById(rootId);

if (root == null) {
  throw new Error(`Element with id ${rootId} not exists`);
}

ReactDOM.createRoot(root).render(<App />);
