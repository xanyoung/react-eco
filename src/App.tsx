import React from 'react';

import { Header } from './components/Header';
import { Market } from './components/Pages/Market';
import { NotFound } from './components/Pages/NotFound';
import { MainPage } from './components/Pages/MainPage';
import { Footer } from './components/Footer';
import { Login } from './components/modals/login';

import './App.sass';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  const [visible, setVisible] = React.useState(false)

  return (
    <>
      <Header setVisible={(value) => setVisible(value)}/>
      <div className="content">
      <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="/market" element={<Market />}/>
        <Route path="*" element={<NotFound />}/>   
      </Routes>
      <Login />      
      </div>
      <Footer />
    </>
  );
}