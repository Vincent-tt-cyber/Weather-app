import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/index.scss";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./provider/ThemeProvider.tsx";

// todo FIXME: https://youtu.be/W4h_fOVo8xI?t=1030

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
