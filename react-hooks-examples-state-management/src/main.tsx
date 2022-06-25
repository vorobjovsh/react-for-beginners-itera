import ReactDOM from "react-dom/client";
import App from "./context/App";
import { configure } from "mobx";
import "./index.css";

configure({
  enforceActions: "always",
  computedRequiresReaction: true,
  reactionRequiresObservable: true,
  observableRequiresReaction: true,
  disableErrorBoundaries: true,
});

const rootId = "root";
const root = document.getElementById(rootId);

if (root == null) {
  throw new Error(`Element with id ${rootId} not exists`);
}

ReactDOM.createRoot(root).render(<App />);
