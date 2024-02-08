import React from 'react';

import { BrowserRouter, Routes, Route, } from "react-router-dom";

import Home from './pages/Home'
import About from './pages/About'
import Error from './pages/Error'
import FicheLogement from './pages/FicheLogement'

import Header from './components/Header/index.jsx';
import Footer from './components/Footer/index.jsx';


function Router() {
    return (
        <React.StrictMode>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route exact path="/" element={<Home />} /> 
                    <Route path="/about" element={<About />} />
                    <Route path="/logement/:idFicheLogement" element={<FicheLogement />} />
                    <Route path="/*" element={<Error />} />      
                </Routes>
                <Footer />
            </BrowserRouter>
        </React.StrictMode>
    )   
}

export default Router