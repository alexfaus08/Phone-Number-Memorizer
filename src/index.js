import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from "./App";
import Home from "./routes/Home";
import MemorizeNumber from "./routes/MemorizeNumber";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={ <App />}>
      <Route index element={<Home />} />
      <Route path="/memorize" element={<MemorizeNumber />} />
    </Route>
  </Routes>
</BrowserRouter>,
  rootElement
);