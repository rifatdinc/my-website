import React from 'react'
import Introduce from '../components/Introduce';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/NavBar';
import { Container, } from "react-bootstrap";
import { Routes,Route } from 'react-router';
import Apps from '../Apps';
import Blog from '../components/Blog';
import BlogDetail from '../components/BlogDetail';

const AppLayout = () => {
    return (
        <>
            <div className="banner">
                <Navbar />
                <Routes>
                    <Route path='/Blog/:id' element={<BlogDetail />} />
                </Routes>

                <Outlet />

                <Container>
                    <Routes>
                        <Route index path='/' element={<Introduce />} />
                        <Route path='/Blog' element={<Blog />} />
                    </Routes>
                </Container>
            </div>
        </>
    )
}


export default AppLayout;