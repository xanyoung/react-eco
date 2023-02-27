import React from 'react'
import { Link } from 'react-router-dom'

import Logo from '../../assets/Frame 1982.svg'
import Marker from '../../assets/Pin.svg'
import CurrencyLogo from '../../assets/Frame 3.svg'
import Photo from '../../assets/Ellipse 153.svg'
// import GreenBar from '../../assets/Rectangle 446.svg'

import styles from './HeaderBlock.module.sass'

export const Header = () => {
  return (
    <header className={styles.header}>
      <img src={ Logo } className={styles.logo} alt='Ecorus'/>
      <nav className={styles.navigation}>
        <Link to='/'>
          Главная
        </Link>
        <Link to='/recycling-points'>
          Пункты сбора
        </Link>
        <Link to='/market' className={styles.active}>
          ЭкоМаркет
        </Link>
        <Link to='/about-service'>
          О сервисе
        </Link>
      </nav>  
      <div className={styles.info}>
        <Link to='/location' className={styles.infoPosition}>
          <img src={ Marker } alt="Marker"/>Казань
        </Link>
        <Link to='/balance' className={styles.infoBalance}>
          <img src={ CurrencyLogo } alt="Currency logo"/>1000
        </Link>
        <Link to='/profile' className={styles.infoProfile}>
          <img src={ Photo } alt="Your avatar" />Алексей
        </Link>
      </div>  
    </header>
  )
}