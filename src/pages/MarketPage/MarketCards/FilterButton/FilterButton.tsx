import React from 'react'

import styles from './FilterButton.module.sass'

interface Props {
    children: React.ReactNode
}

export const FilterButton = ({children}: Props) => {
    return (
        <button className={styles.filterbutton}>
            {children}
        </button>
    );
}
