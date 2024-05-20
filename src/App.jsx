import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./Pages/Jsx/MainPage.jsx";


function App() {

    return  (
        <BrowserRouter>
            <Routes >
                <Route path={ `/` } element={ <MainPage/> } />
            </Routes>
        </BrowserRouter>
    );
}

export default App;