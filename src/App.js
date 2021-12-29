import logo from './logo.svg';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Home from './routes/Home';
import MemorizeNumber from './routes/MemorizeNumber';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/memorize" element={<MemorizeNumber />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
