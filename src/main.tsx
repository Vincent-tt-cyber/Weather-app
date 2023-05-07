import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/index.scss";
import { BrowserRouter } from "react-router-dom";

// todo FIXME: https://youtu.be/wjx--n5X-QI?t=5862

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
