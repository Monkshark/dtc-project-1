import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartButton from "./Components/Jsx/StartButton.jsx";


function App() {

    return  (
        <BrowserRouter>
            <Routes >
                <Route path={ `/` } element={ <StartButton/> } />
            </Routes>
        </BrowserRouter>
    );
}

export default App;