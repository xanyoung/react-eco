import React from 'react'

import styles from './filterButton.module.sass'

interface Buttons {
    text: string
}

export const FilterButton = ({text}: Buttons) => {
    return (
        <button className={styles.filterbutton}>
            {text}
        </button>
    );
}
