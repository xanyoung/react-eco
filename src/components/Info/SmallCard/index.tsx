import React from 'react'

import styles from './SmallCard.module.sass'

import Arrow from '../../../assets/Arrow.svg'

interface infoProps {
    bigText: string;
    smallText: string;
    image: string;
    imageAlt: string
}

export const SmallCard = ({bigText, smallText, image, imageAlt}: infoProps) => {
  return (
    <div className={styles.card}>
        <div className={styles.container}>
        <div className={styles.bigText}>{bigText}</div>
        <div className={styles.smallText}>{smallText}</div>
        <div className={styles.button}><img src={ Arrow } alt="arrow"/></div>
        </div>
        <div className={styles.picture}>
            <img src={image} alt={imageAlt} />
        </div>
    </div>
  )
}
