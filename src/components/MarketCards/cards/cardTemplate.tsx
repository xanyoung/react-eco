import React from 'react'

import styles from './cardTemplate.module.sass'

import Coin from '../../../assets/items/CurrencyBig.svg'

export interface cardProps {
  brand: string;
  name: string;
  category: string;
  price: number;
  imgUrl: string
}

export const CardTemplate = ({brand, name, category, price, imgUrl}: cardProps) => {
  return (
    <div className={styles.containter}>
        <div className={styles.photo}>
            <img src={imgUrl} alt="Item" className="" />
            <div className={styles.brand}>{brand}</div>
        </div>
        <div className={styles.info}>
            <p className={styles.big}>{name}</p>
            <p className={styles.small}>{category}</p>
        </div>
        <div className={styles.price}>
            <img src={Coin} alt='coin'></img>{price}
        </div>
    </div>
  )
}
