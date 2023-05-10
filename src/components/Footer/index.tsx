import React from 'react'

import styles from './FooterBlock.module.sass'

import { Icon } from '../Icon'

export const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.containerFirst}>
        <Icon name='Mail' size={24} />
        <span>info@ecorus.ru</span>
      </div>
      <div className={styles.containerSecond}>
        <Icon name='Call' size={24} />
        <span>+7 (800) 880-88-88</span>
      </div>
    </footer>
  )
}

