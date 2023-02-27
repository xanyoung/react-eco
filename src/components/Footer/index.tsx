import React from 'react'

import styles from './FooterBlock.module.sass'

import Mail from '../../assets/Mail.svg'
import Call from '../../assets/Call.svg'

export const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.first}>
        <img src={Mail} alt="Mail" className={styles.marks}/>info@ecorus.ru
      </div>
      <div className={styles.second}>
        <img src={Call} alt="Phone"className={styles.marks}/>+7 (800) 880-88-88
      </div>
    </footer>
  )
}

