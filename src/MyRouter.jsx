import React from 'react'
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Footer from './containers/Footer';
import Header from './containers/Header';
import Home from './containers/Home';

const MyRouter = () => {
  return (
    <>
        <BrowserRouter>
        <Header />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        <Footer />
        </BrowserRouter>
    </>
  )
}

export default MyRouter