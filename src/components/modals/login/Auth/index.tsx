import React from 'react'
import * as yup from 'yup'

import { useDispatch } from 'react-redux'

import { Icon } from '../../../Icon'

import styles from '../ModalRoot.module.sass'
import { turnOffLogin } from '../../../../redux/modals/LoginSlice'
import { turnOnWithCode } from '../../../../redux/modals/WithCodeSlice'
import { turnOnRegistration } from '../../../../redux/modals/RegistrationSlice'
import { turnOnPartners } from '../../../../redux/modals/PartnersSlice'

export interface Props {
  onClose: () => void;
}

export const Auth = ({onClose}: Props) => {
  const dispatch = useDispatch()
  const overlayRef = React.useRef<HTMLDivElement>(null)

  const validationSchema = yup.object({
    phone_number: yup
                  .string()
                  .required('Номер телефона обязателен')
                  .matches(/^\d{11}$/, 'Неверный формат телефона'),
    password: yup
              .string()
              .required('Пароль обязателен')
  })

  const openEnterCode = () => {
    dispatch(turnOffLogin())
    dispatch(turnOnWithCode())
  }

  const openRegistration = () => {
    dispatch(turnOffLogin())
    dispatch(turnOnRegistration())
  }

  const openPartners = () => {
    dispatch(turnOffLogin())
    dispatch(turnOnPartners())
  }

  return (
    <div className={styles.overlay} ref={overlayRef}>
      <div className={styles.window}>
      <div className={styles.container}>
        <div className={styles.head}>
          <h1>Вход</h1>
            <button onClick={() => onClose()} className={styles.cross}>
              <Icon name="Cross" size={18}/>
            </button>
        </div>
        <form className={styles.forms}>
          <label>
            <input type="tel" placeholder="Телефон"/>
          </label>
          <label>
            <input type="password" placeholder='Пароль'/>
          </label>
        </form>
        <div className={styles.enters}>
          <div className={styles.big}>Войти</div>
          <div className={styles.smalls}>
            <button className={styles.buttons} onClick={() => openEnterCode()}>Войти с помощью смс</button>
            <button className={styles.buttons} onClick={() => openRegistration()}>Регистрация</button>
          </div>
        </div>
        <button onClick={() => openPartners()} 
            className={styles.partners}>Вход для партнёров</button>
      </div>
      </div>
      </div>
  )
}