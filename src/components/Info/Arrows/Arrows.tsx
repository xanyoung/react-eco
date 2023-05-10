import React from 'react'

import styles from './Arrows.module.sass'

// import LeftArrow from '../../../assets/leftArrow.svg' 
// import RightArrow from '../../../assets/rightArrow.svg' 

import { Icon } from '../../Icon'

export const Arrows = (props: {type: "right" | "left"}) => {
  return (
    <div className={styles.container}>
      <Icon name={props.type === "left" ? 'leftArrow' : 'rightArrow'} width={8} height={14}/>
    </div>
  )
}
