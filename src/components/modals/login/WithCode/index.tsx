import React from 'react'
import { Link } from 'react-router-dom'

import { Portal } from '../../../Portal'
import { useModalClose } from '../../../hooks/useModalClose'
import { Icon } from '../../../Icon'

import styles from '../Login.module.sass'

// import Cross from '../../../assets/Cross.svg'

export interface Props {
  visible: boolean;
  onClose: () => void;
}

export const WithCode = ({visible, onClose}: Props) => {
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
            <h1>Вход или регистрация</h1>
              <button onClick={() => onClose()} className={styles.cross}>
              <Icon name="Cross" size={18}/>
              </button>
          </div>
          <div className={styles.forms}>
              <input type="tel" placeholder="Телефон"></input>
          </div>
          <div className={styles.enters}>
            <Link to="" className={styles.big}>Получить код</Link>
            <div className={styles.smalls}>
              <Link to="">Я уже зарегистрировался(-ась)</Link>
            </div>
          </div>
          <Link to='' className={styles.partners}>Отправить</Link>
          </div>
      </div>
    </div>
    </Portal>
    }
    </>
  )
}