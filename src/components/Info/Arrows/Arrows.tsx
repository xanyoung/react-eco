import React from 'react'

import styles from './Arrows.module.sass'

import LeftArrow from '../../../assets/leftArrow.svg' 
import RightArrow from '../../../assets/rightArrow.svg' 


export const Arrows = (props: {type: "right" | "left"}) => {
  return (
    <div className={styles.container}>
      <img src={props.type === "left" ? LeftArrow : RightArrow} alt={props.type === "left" ? 'Left Arrow' : 'Right Arrow'} className={styles.arrows}/>
    </div>
  )
}
