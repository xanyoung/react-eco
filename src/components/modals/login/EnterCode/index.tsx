import React from 'react'

import { Icon } from '../../../Icon'

import styles from '../ModalRoot.module.sass'
import { useDispatch } from 'react-redux'
import { setCurrentModal } from '../../../../redux/modals/slice'

interface Props {
  onClose: () => void;
}

export const EnterCode = ({onClose}: Props) => {
  const dispatch = useDispatch()

  return (
    <>
        <div className={styles.container}>
          <div className={styles.head}>
            <h1>Ввести код</h1>
              <button onClick={() => onClose()} className={styles.cross}>
              <Icon name="Cross" size={18}/>
              </button>
          </div>
          <form className={styles.forms}>
              <span>Введите код отправленный вам на телефон <p>+7 (917) 888 88 88</p></span>
              <label>
                <input type="text" placeholder="Код"/>
              </label>
          </form>
          <div className={styles.enters}>
            <div className={styles.big}>Войти</div>
            <div className={styles.smalls}>
              <div className={styles.buttons}>Не получил(-а) код</div>
            </div>
          </div>
          <div onClick={() => dispatch(setCurrentModal("Partners"))} 
          className={styles.partners}>Вход для партнёров</div>
          </div>
    </>
  )
}