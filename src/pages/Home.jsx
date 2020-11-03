import React from 'react'
import {Catygories, SortPopup, PizzasBlock} from '../components';

function Home({ items }) {
    return (
        <div className="container">
        <div className="content__top">
          <Catygories onClickItem={(name) => console.log(name)} items={[
            'Мясные', 
            'Вегетарианская',
            'Гриль',
            'Острые',
            'Закрытые',
          ]}></Catygories>
         <SortPopup items={["популярности","цене", "алфавиту"]}></SortPopup>
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
        {
          items.map((obj) => <PizzasBlock 
          key={obj.id} 
          {...obj}
          />)
        }
        </div>
        </div>
    ); 
}

export default Home
