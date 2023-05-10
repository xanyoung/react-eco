import React from 'react'
import { NavLink, Link } from 'react-router-dom'

import { Icon } from '../Icon'

import Logo from '../../assets/items/Logo.svg'
// import Marker from '../../assets/Pin.svg'
import CurrencyLogo from '../../assets/items/CurrencyBig.svg'
import Photo from '../../assets/items/Photo.svg'

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
          <NavLink to='/' className={ ({isActive}) => isActive ? styles.active : ''}>
            Главная
          </NavLink>
          <NavLink to='/recycling-points' className={ ({isActive}) => isActive ? styles.active : ''}>
            Пункты сбора
          </NavLink>
          <NavLink to='/market' className={ ({isActive}) => isActive ? styles.active : ''}>
            ЭкоМаркет
          </NavLink>
          <NavLink to='/about-service' className={ ({isActive}) => isActive ? styles.active : ''}>
            О сервисе
          </NavLink>
        </nav>  
      </div>
      <div className={styles.info}>
        <Link to='/location' className={styles.infoPosition}>
          <Icon name='Pin' size={24} />
          Казань
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