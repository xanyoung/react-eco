import React from 'react'
import { Link } from 'react-router-dom'

import { Portal } from '../../../Portal'
import { useModalClose } from '../../../hooks/useModalClose'
import { Icon } from '../../../Icon'

import styles from '../Login.module.sass'

// import Cross from '../../../assets/Cross.svg'

interface Props {
  visible: boolean;
  onClose: () => void;
}

export const Partners = ({visible, onClose}: Props) => {
  const overlayRef = React.useRef<HTMLDivElement>(null)
  // const crossRef = React.useRef<HTMLDivElement>(null)

  useModalClose(overlayRef, () => onClose())
  // useModalClose(crossRef, () => onClose())


  return (
    <>
    {visible && 
    <Portal>
    <div className={styles.overlay} ref={overlayRef}>
      <div className={styles.window}>
        <div className={styles.container}>
          <div className={styles.head}>
            <h1>Вход</h1>
              <button onClick={() => onClose()} className={styles.cross}>
              <Icon name="Cross" size={18}/>
              </button>
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
          </div>
      </div>
    </div>
    </Portal>
    }
    </>
  )
}