import React from 'react'

import { Gender } from './Options/Gender'
import { TypeOfItem } from './Options/TypeOfItem'
import { Brand } from './Options/Brand'

import styles from './Sidebar.module.sass'

export const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.panel}>
          <p>Пол
              <Gender />
          </p>
          <p>Тип товара
              <TypeOfItem />
          </p>
          <p>Брэнд
              <Brand />
          </p>
      </div>
      <button className={styles.reset}>Сбросить фильтры</button>
    </div>
  )
}
