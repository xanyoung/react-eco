import React from 'react'

import { GetPromo } from './getPromo'
import { CardTemplate } from './cardTemplate'

import styles from './itemCards.module.sass'

import NikeAirMax21 from '../../../assets/items/NikeAirMax21.svg'
import NikeAirMax90 from '../../../assets/items/NikeAirMax90.svg'
import AdidasAlpha from '../../../assets/items/AdidasAlphabounce.svg'
import HMHoodie from '../../../assets/items/H&MHoodie.svg'
import NikeAir from '../../../assets/items/NikeAir.svg'


export const ItemCards = () => {
  const items = [
    {img: NikeAirMax21, brand: 'NIKE', name: 'Nike Air Max 2021', category: 'Мужская обувь', price: 1000},
    {img: NikeAirMax90, brand: 'NIKE', name: 'Nike Air Max 90 Premium', category: 'Мужская обувь', price: 750},
    {img: AdidasAlpha, brand: 'Adidas', name: 'Adidas Alphabounce RC', category: 'Мужская обувь', price: 1200},
    {img: HMHoodie, brand: 'H&M', name: 'Nike Air Max 2021', category: 'Мужская обувь', price: 1000},
    {img: NikeAir, brand: 'NIKE', name: 'Nike Air Force 1 Low', category: 'Мужская обувь', price: 2100}
  ]
  return (
    <div className={styles.container}>
      <GetPromo />
      {
        items.map((item, i) => <CardTemplate key={i} brand={item.brand} name={item.name} category={item.category} price={item.price} imgUrl={item.img}/>)
      }
    </div>
  )
}
