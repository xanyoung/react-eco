import React from 'react'
import { Link } from 'react-router-dom'

import { Portal } from '../Portal'
import { useModalClose } from '../hooks/useModalClose'

import styles from './login.module.sass'


interface Props {
  visible: boolean;
  onClose: () => void;
}

export const Login = ({visible, onClose}: Props) => {
  const overlayRef = React.useRef<HTMLDivElement>(null)
  const crossRef = React.useRef<HTMLDivElement>(null)

  useModalClose(overlayRef, () => onClose())
  useModalClose(crossRef, () => onClose())


  return (
    <>
    {visible && 
    <Portal>
    <div className={styles.overlay} ref={overlayRef}>
      <div className={styles.window}>
        <div className={styles.container}>
          <div className={styles.head}>
            <h1>Вход</h1>
            <div className={styles.cross} ref={crossRef}/>
          </div>
          <div className={styles.forms}>
              <input type="tel" placeholder="Телефон"></input>
              <input type="password" placeholder='Пароль'></input>
          </div>
          <div className={styles.enters}>
            <Link to="" className={styles.big}>Войти</Link>
            <div className={styles.smalls}>
              <Link to="">Войти с помощью смс</Link>
              <Link to="">Регистрация</Link>
            </div>
          </div>
          <Link to='' className={styles.partners}>Вход для партнёров</Link>
          </div>
      </div>
    </div>
    </Portal>
    }
    </>
  )
}
