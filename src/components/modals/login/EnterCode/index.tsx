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

export const EnterCode = ({visible, onClose}: Props) => {
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
            <h1>Ввести код</h1>
              <button onClick={() => onClose()} className={styles.cross}>
              <Icon name="Cross" size={18}/>
              </button>
          </div>
          <div className={styles.forms}>
              <span>Введите код отправленный вам на телефон <p>+7 (917) 888 88 88</p></span>
              <input type="text" placeholder="Код"></input>
          </div>
          <div className={styles.enters}>
            <Link to="" className={styles.big}>Войти</Link>
            <div className={styles.smalls}>
              <Link to="">Не получил(-а) код</Link>
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