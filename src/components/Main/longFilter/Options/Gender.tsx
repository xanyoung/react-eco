import React from 'react'

import styles from '../Sidebar.module.sass'
import { Checkbox } from '../Checkbox/Checkbox'

export const Gender = () => {
  return (
    <div className={styles.gender}>
        <Checkbox text={"Мужской"} checked={true}/>
        <Checkbox text={"Женский"} />
    </div>
  )
}
