import React from 'react';

import { Header } from './components/Header';
import { Market } from './pages/Market';
import { NotFound } from './pages/NotFound';
import { MainPage } from './pages/MainPage';
import { Footer } from './components/Footer';
import { ModalRoot } from './components/modals/login';

import './App.sass';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  // eslint-disable-next-line
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
      </div>
      <Footer />
    </>
  );
}