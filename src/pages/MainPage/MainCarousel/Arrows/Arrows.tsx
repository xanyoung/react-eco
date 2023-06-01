import React from 'react'

import styles from './Arrows.module.sass'

import { Icon } from 'components/Icon' 

interface Props {
  type: "right" | "left"
}

export const Arrows = ({type}: Props) => {
  return (
    <div className={styles.container}>
      <Icon name={type === "left" ? 'leftArrow' : 'rightArrow'} width={8} height={14}/>
    </div>
  )
}
