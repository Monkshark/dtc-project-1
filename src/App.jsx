import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StampPage from "./Pages/Jsx/StampPage.jsx";
import MainPage from "./Pages/Jsx/MainPage.jsx";
import {MAIN_PAGE_PATH, STAMP_PAGE_PATH} from "./Js/Paths.js";


function App() {

    return  (
        <BrowserRouter>
            <Routes >
                <Route path={ MAIN_PAGE_PATH } element={ <MainPage/> } />
                <Route path={ STAMP_PAGE_PATH } element={ <StampPage/> } />
            </Routes>
        </BrowserRouter>
    );
}

export default App;