import React from 'react';
import '../src/styles/global.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../src/pages/Home';
import Eventos from '../src/pages/Eventos';
import Menu from '../src/pages/Menu'
import Contacto from '../src/pages/Contacto'
import Layout from '../src/containers/Layout';
import NotFound from '../src/pages/NotFound';

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/eventos' element={<Eventos />} />
                    <Route exact path='/menu' element={<Menu />} />
                    <Route exact path='/contacto' element={<Contacto />} />
                    <Route exact path='*' element={<NotFound />} /> 
                </Routes>
            </Layout>
        </BrowserRouter>
    )
};

export default App;