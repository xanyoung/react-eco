import React from 'react';

import { Header } from './components/Header';
import { Market } from './components/Pages/Market';
import { NotFound } from './components/Pages/NotFound';
import { Footer } from './components/Footer';
import { Login } from './components/LoginModal/login';

import './App.sass';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  const [visible, setVisible] = React.useState(false)

  return (
    <>
      <Header setVisible={(value) => setVisible(value)}/>
      <div className="content">
      <Routes>
        <Route path="/market" element={<Market />}/>
        <Route path="*" element={<NotFound />}/>   
      </Routes>
      <Login visible={visible} onClose={() => setVisible(false)}/>
      </div>
      <Footer />
    </>
  );
}