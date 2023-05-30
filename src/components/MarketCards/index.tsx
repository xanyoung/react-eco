import React from 'react'

import { FilterButton } from './FilterButton/FilterButton'
import { Sidebar } from './longFilter/Sidebar'
import { ItemCards } from './cards/ItemCards'

import styles from './MainBlock.module.sass'

export const MarketCards = () => {
  return (
    <main>
      <div className={styles.headpart}>
        <p>ЭкоМаркет</p>
        <div className={styles.filters}>
          <FilterButton children="По популярности"/>
          <FilterButton children="По цене"/>
          <FilterButton children="По новизне"/>
        </div>
      </div>
      <div className={styles.mainpart}>
        <Sidebar />
        <ItemCards />
      </div>
    </main>
  )
}

