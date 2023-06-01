import React from 'react'

import styles from './GetPromo.module.sass'

import coin from 'assets/items/coin.svg'

export const GetPromo = () => {
  return (
    <div className={styles.card}>
      <div className={styles.cardBalance}>
        <div className={styles.uppertext}>На вашем балансе
          <span className={styles.sum}>
            <img src={coin} alt="coin"/>200
          </span>
        </div>
        <p className={styles.undertext}>Вы можете обменять их на скидку 200 руб.</p>
      </div>
      <button className={styles.promo}>Получить промокод</button>
    </div>
  )
}
