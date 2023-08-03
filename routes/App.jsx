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
import ProtectedRoute from '../src/components/ProtectedRoute';
import ReadProductos from '../src/pages/ReadProductos';
import ReadEventos from '../src/pages/ReadEventos';
import CreateProducto from '../src/pages/CreateProducto';
import UpdateProducto from '../src/pages/UpdateProducto';
import CreateEvento from '../src/pages/CreateEvento';
import PruebaMenu from '../src/pages/PruebaMenu';
import ReadCategorias from '../src/pages/ReadCategorias';
import CreateCategorias from '../src/pages/CreateCategorias';
import UpdateCategorias from '../src/pages/UpdateCategorias';


const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/eventos' element={<Eventos />} />
                <Route exact path='/menu' element={<Menu />} />
                <Route element={<ProtectedRoute />}>
                    <Route exact path='/root' element={<Admin />} />
                    <Route exact path='/readproductos' element={<ReadProductos />} />
                    <Route exact path='/readeventos' element={<ReadEventos />} />
                    <Route exact path='/createproducto' element={<CreateProducto />} />
                    <Route exact path='/updateproducto' element={<UpdateProducto />} />
                    <Route exact path='/createevento' element={<CreateEvento />} />
                    <Route exact path='/pruebamenu' element={<PruebaMenu />} />
                    <Route exact path='/readcategorias' element={<ReadCategorias />} />
                    <Route exact path='/createcategorias' element={<CreateCategorias />} />
                    <Route exact path='/updatecategorias' element={<UpdateCategorias />} />
                </Route>
                <Route exact path='/login' element={<Login />} />
                <Route exact path='*' element={<NotFound />} />
            </Routes>
            <WhatsApp />
            <Footer/>
        </BrowserRouter>
    )
};

export default App;