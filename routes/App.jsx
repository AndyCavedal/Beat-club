import React, { lazy, Suspense } from 'react';
import '../src/styles/global.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../src/pages/Home';
import Eventos from '../src/pages/Eventos';
import Menu from '../src/pages/Menu'
import Contacto from '../src/pages/Contacto'
import NotFound from '../src/pages/NotFound';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import WhatsApp from '../src/components/WhatsApp';
import Login from '../src/pages/Login';
import ProtectedRoute from '../src/components/ProtectedRoute';


const Admin = lazy(() => import('../src/pages/Admin'));
const ReadProductos = lazy(() => import('../src/pages/ReadProductos'));
const ReadEventos = lazy(() => import('../src/pages/ReadEventos'));
const CreateProducto = lazy(() => import('../src/pages/CreateProducto'));
const UpdateProducto = lazy(() => import('../src/pages/UpdateProducto'));
const CreateEvento = lazy(() => import('../src/pages/CreateEvento'));
const ReadCategorias = lazy(() => import('../src/pages/ReadCategorias'));
const CreateCategorias = lazy(() => import('../src/pages/CreateCategorias'));
const UpdateCategorias = lazy(() => import('../src/pages/UpdateCategorias'));

import { ScaleLoader } from 'react-spinners'

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Suspense fallback={<div className="loading-message general">
                <ScaleLoader
                    color="#A80038"
                    height={70}
                    margin={4}
                    width={8}
                />
            </div>}>
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/eventos' element={<Eventos />} />
                    <Route exact path='/menu' element={<Menu />} />
                    <Route exact path='/contacto' element={<Contacto />} />
                    <Route element={<ProtectedRoute />}>
                        <Route exact path='/root' element={<Admin />} />
                        <Route exact path='/readproductos' element={<ReadProductos />} />
                        <Route exact path='/readeventos' element={<ReadEventos />} />
                        <Route exact path='/createproducto' element={<CreateProducto />} />
                        <Route exact path='/updateproducto' element={<UpdateProducto />} />
                        <Route exact path='/createevento' element={<CreateEvento />} />
                        <Route exact path='/readcategorias' element={<ReadCategorias />} />
                        <Route exact path='/createcategorias' element={<CreateCategorias />} />
                        <Route exact path='/updatecategorias' element={<UpdateCategorias />} />
                    </Route>
                    <Route exact path='/login' element={<Login />} />
                    <Route exact path='*' element={<NotFound />} />
                </Routes>
            </Suspense>
            <WhatsApp />
            <Footer />
        </BrowserRouter>
    )
};

export default App;