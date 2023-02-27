import React from 'react'

import { Checkbox } from '../Checkbox/Checkbox'
import styles from '../longFilter.module.sass'

export const Brand = () => {
  return (
    <div className={styles.brand}>
        <Checkbox text={'Выбрать все'}/>
        <Checkbox text={'H&M'}/>
        <Checkbox text={'P&B'} checked={true}/>
        <Checkbox text={'Adidas'}/>
        <Checkbox text={'Nike'}/>
        <Checkbox text={'Reebok'}/>
    </div>
  )
}
