import React from 'react'

import styles from './cardTemplate.module.sass'

import Coin from '../../../assets/Frame 3.svg'

export const CardTemplate = (props: {brand: string, name: string, category: string, price: number, imgUrl: string}) => {
  return (
    <div className={styles.containter}>
        <div className={styles.photo}>
            <img src={props.imgUrl} alt="Item" className="" />
            <div className={styles.brand}>{props.brand}</div>
        </div>
        <div className={styles.info}>
            <p className={styles.big}>{props.name}</p>
            <p className={styles.small}>{props.category}</p>
        </div>
        <div className={styles.price}>
            <img src={Coin} alt='coin'></img>{props.price}
        </div>
    </div>
  )
}
