import React from 'react'
import { NavLink, Link } from 'react-router-dom'

import Logo from '../../assets/Logo.svg'
import Marker from '../../assets/Pin.svg'
import CurrencyLogo from '../../assets/CurrencyBig.svg'
import Photo from '../../assets/Photo.svg'
// import GreenBar from '../../assets/Rectangle 446.svg'

import styles from './HeaderBlock.module.sass'

interface HeaderProps {
  setVisible: (value: boolean) => void;
}

export const Header = ({setVisible}: HeaderProps) => {

  return (
    <header className={styles.header}>
      <div className={styles.rightnav}>
        <img src={ Logo } className={styles.logo} alt='Ecorus'/>
        <nav className={styles.navigation}>
          <NavLink to='/'>
            Главная
          </NavLink>
          <NavLink to='/recycling-points'>
            Пункты сбора
          </NavLink>
          <NavLink to='/market' className={styles.active}>
            ЭкоМаркет
          </NavLink>
          <NavLink to='/about-service'>
            О сервисе
          </NavLink>
        </nav>  
      </div>
      <div className={styles.info}>
        <Link to='/location' className={styles.infoPosition}>
          <img src={ Marker } alt="Marker"/>Казань
        </Link>
        <Link to='/balance' className={styles.infoBalance}>
          <img src={ CurrencyLogo } alt="Currency logo"/>1000
        </Link>
        <Link to='/market' onClick={() => setVisible(true)} className={styles.infoProfile}>
          <img src={ Photo } alt="Your avatar" />Алексей
        </Link>
      </div>  
    </header>
  )
}