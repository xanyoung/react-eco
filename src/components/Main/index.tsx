import React from 'react'

import { FilterButton } from './filterButton/filterButton'
import { LongFilter } from './longFilter/longFilter'
import { ItemCards } from './cards/itemCards'

import styles from './MainBlock.module.sass'

export const Main = () => {  
  return (
    <main>
      <div className={styles.headpart}>
        <p>ЭкоМаркет</p>
        <div className={styles.filters}>
          <FilterButton text={"По популярности"}/>
          <FilterButton text={"По цене"}/>
          <FilterButton text={"По новизне"}/>
        </div>
      </div>
      <div className={styles.mainpart}>
        <LongFilter />
        <ItemCards />
      </div>
    </main>
  )
}

