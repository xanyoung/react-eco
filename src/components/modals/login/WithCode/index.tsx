import React from 'react'

import { Icon } from '../../../Icon'

import styles from '../Login.module.sass'
import { useDispatch } from 'react-redux'
import { setCurrentModal } from '../../../../redux/slices/slice'

export interface Props {
  onClose: () => void;
}

export const WithCode = ({onClose}: Props) => {
  const dispatch = useDispatch()

  return (
    <>
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
            <div onClick={() => dispatch(setCurrentModal("EnterCode"))} 
                className={styles.big}>Получить код</div>
            <div className={styles.smalls}>
              <div onClick={() => dispatch(setCurrentModal("Auth"))} 
              className={styles.buttons}>Я уже зарегистрировался(-ась)</div>
            </div>
          </div>
          <div onClick={() => dispatch(setCurrentModal("Partners"))} 
          className={styles.partners}>Вход для партнеров</div>
          </div>
    </>
  )
}