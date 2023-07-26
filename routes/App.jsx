import React from 'react';
import '../src/styles/global.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../src/pages/Home';
import Eventos from '../src/pages/Eventos';
import Menu from '../src/pages/Menu'
// import Layout from '../src/containers/Layout';
import NotFound from '../src/pages/NotFound';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import WhatsApp from '../src/components/WhatsApp';
import Admin from '../src/pages/Admin';
import Login from '../src/pages/Login';

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/eventos' element={<Eventos />} />
                <Route exact path='/menu' element={<Menu />} />
                <Route exact path='/root' element={<Admin />} />
                <Route exact path='/login' element={<Login />} />
                <Route exact path='*' element={<NotFound />} />
            </Routes>
            <WhatsApp />
            <Footer/>
        </BrowserRouter>
    )
};

export default App;