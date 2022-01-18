import logo from './logo.svg';
import './App.css';
import Navigacija from "./components/Navigacija";
import {BrowserRouter, Routes} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <Navigacija/>
        <Routes>

        </Routes>
    </BrowserRouter>
  );
}

export default App;
