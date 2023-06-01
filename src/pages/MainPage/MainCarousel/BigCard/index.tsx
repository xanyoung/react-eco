import React from 'react'

import styles from './BigCard.module.sass'

interface infoProps {
    bigText: string;
    smallText: string;
    image: string;
    imageAlt: string;
    textButton?: string;
    color?: string
}

export const BigCard = (props: infoProps) => {
    return (
        <div className={styles.banner} style={{backgroundColor: props.color}}>
            <div className={styles.container}>
                <div className={styles.bigText}>{props.bigText}</div>
                <div className={styles.smallText}>{props.smallText}</div>
                <button className={styles.info}>{props.textButton}</button>
            </div>
            <div className={styles.picture}><img src={props.image} alt={props.imageAlt}/></div>
        </div>
    )
}
