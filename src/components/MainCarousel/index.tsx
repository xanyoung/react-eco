import React from 'react'
import { Carousel } from 'react-responsive-carousel';

import styles from './MainCarousel.module.sass'
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { SmallCard } from './SmallCard'
import { BigCard } from './BigCard'
import { Arrows } from './Arrows/Arrows';

import Map from '../../assets/items/Map.svg'
import Package from '../../assets/items/Package.svg'
import RecycleSymb from '../../assets/items/Recycle Symb.svg'
import RecycleItems from '../../assets/items/Recycle Items.svg'
import Masks from '../../assets/items/Masks.svg'

interface infoProps {
    bigText: string;
    smallText: string;
    image: string;
    imageAlt: string;
    color?: string;
    textButton?: string
}

const SmallInfo: Array<infoProps> = [
    {bigText: "Пункты сбора", smallText: "Посмотри, где в твоем городе можно сдать вторсырье на переработку", image: Map, imageAlt: "Map"},
    {bigText: "ЭкоМаркет", smallText: "Используй заработанные экокоины для покупки товаров из переработанных материалов", image: Package, imageAlt: "Package"}    
]

const BigInfo: Array<infoProps> = [
    {bigText: "Сделаем мир чище", smallText: "Сдай макулатуру или старую одежду и получи скидку на покупку товаров из переработанных материалов", image: RecycleSymb, imageAlt: "Recycle symbol", color: '#B3EDC8', textButton: 'Условия сервиса'},
    {bigText: "А вы знали...", smallText: "что среднее время разложения пластмассовых изделий колеблется от 400 до 700 лет,  а полиэтиленовых пакетов — от 100 до 200 лет? ", image: RecycleItems, imageAlt: "Products to recycle", color: '#FFE48F', textButton: 'Узнать больше'},
    {bigText: "Что с масками?", smallText: "Медицинские маски не обязательно должны становиться отходами. Их тоже можно сдать на переработку.", image: Masks, imageAlt: "Masks", color: '#BFF0DE', textButton: 'Пункты сбора масок'}
]

export const MainCarousel = () => {
    return (
        <div className={styles.container}>
            <div className={styles.bigCards}>
                <Carousel infiniteLoop={true} showIndicators={false} showStatus={false}
                renderArrowPrev={(clickHandler) => <div onClick={clickHandler} className={styles.left}><Arrows type='left'/></div>}
                renderArrowNext={(clickHandler) => <div onClick={clickHandler} className={styles.right}><Arrows type='right'/></div>}>
                    {BigInfo.map((item, i) => <BigCard key={i} bigText={item.bigText} smallText={item.smallText} image={item.image} imageAlt={item.imageAlt} color={item.color} textButton={item.textButton}/>)}
                </Carousel>
            </div>
            <div className={styles.smallCards}>
                {SmallInfo.map((item, i) => <SmallCard key={i} bigText={item.bigText} smallText={item.smallText} image={item.image} imageAlt={item.imageAlt}/>)}
            </div>
        </div>
    )
}
