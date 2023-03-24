import React from 'react'

import styles from './getPromo.module.sass'

import coin from '../../../assets/coin.svg'

export const GetPromo = () => {
  return (
    <div className={styles.card}>
      <div className={styles.cardBalance}>
        <p className={styles.uppertext}>На вашем балансе
          <div className={styles.sum}>
            <img src={coin} alt="coin"/>200
          </div>
        </p>
        <p className={styles.undertext}>Вы можете обменять их на скидку 200 руб.</p>
      </div>
      <button className={styles.promo}>Получить промокод</button>
    </div>
  )
}
