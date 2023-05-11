import React from 'react'

import { Icon } from '../../../Icon'

import styles from '../Login.module.sass'
import { setCurrentModal } from '../../../../redux/slices/slice'
import { useDispatch } from 'react-redux'

interface Props {
  onClose: () => void;
}

export const Partners = ({onClose}: Props) => {
  const dispatch = useDispatch()

  return (
    <>
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
            <div className={styles.big}>Войти</div>
            <div className={styles.smalls}>
              <div className={styles.buttons} onClick={() => dispatch(setCurrentModal("WithCode"))}>Войти с помощью смс</div>
              <div className={styles.buttons} onClick={() => dispatch(setCurrentModal("Registration"))}>Регистрация</div>
            </div>
          </div>
          </div>
    </>
  )
}