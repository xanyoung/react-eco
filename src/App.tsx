import React from 'react';

import { Header } from './components/Header';
import { Market } from './pages/Market';
import { NotFound } from './pages/NotFound';
import { MainPage } from './pages/MainPage';
import { Footer } from './components/Footer';
import { ModalRoot } from './components/modals/login';

import './App.sass';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { useLazyUserInfoQuery } from './redux/auth';
import { setUsername } from './redux/user/slice'

export const App = () => {
  // eslint-disable-next-line
  const [userInfo] = useLazyUserInfoQuery()
  const dispatch = useDispatch()
  const [visible, setVisible] = React.useState(false)

  React.useEffect(() => {
    if (localStorage.getItem('token')) {
      userInfo(null)
					.then((res) => dispatch(setUsername(res.data?.username as string)))
    }
  })

  return (
    <>
      <Header setVisible={(value) => setVisible(value)}/>
      <div className="content">
      <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="/market" element={<Market />}/>
        <Route path="*" element={<NotFound />}/>   
      </Routes>
      <ModalRoot />      
      </div>
      <Footer />
    </>
  );
}