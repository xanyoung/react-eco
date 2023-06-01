import React from 'react'

import { Checkbox } from '../Checkbox/Checkbox'
import styles from '../Sidebar.module.sass'

export const TypeOfItem = () => {
  return (
    <div className={styles.typeof}>
      <Checkbox text={'Выбрать все'} checked={true}/>
      <Checkbox text={'Одежда'}/>
      <Checkbox text={'Обувь'}/>
      <Checkbox text={'Аксессуары'}/>
    </div>
  )
}
